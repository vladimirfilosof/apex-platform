import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {Container} from "react-bootstrap";
import {MiniBanner} from "../components/banner/Banner";
import styles from './project.module.scss'
import Avatar from "../components/avatar/Avatar";
import bg from '../components/banner/banner-bg.png'
import CardDescription from "../components/cardDescription/CardDescription";
import ContestProduct, {ContestProductWrapper} from "../components/contestProduct/ContestProduct";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {serverHost} from "../consts/consts";
import {useSelector} from "react-redux";

export default function Project() {
	const token = useSelector((state) => state.user.token)
	const {id} = useParams()
	const [project, setProject] = useState(null)
	const [products, setProducts] = useState([])
	useEffect(() => {
		axios({
			method: 'GET',
			url: serverHost + "/api/v1/projects/" + id + '/',
			headers: {Authorization: `Token ${token}`}
		}).then((response) => {
			setProject(response.data)
			// console.log(response.data);
			const id = response.data.id

			axios({
				method: 'GET',
				url: serverHost + "/api/v1/products-on-project/" + id + '/',
				headers: {Authorization: `Token ${token}`}
			}).then((response) => {
				setProducts(response.data)
				console.log(response.data);
			})
		})
	}, [setProject, setProducts])

	return (
		<>
			<Header/>
			<main>
				{project !== null ?
					<Container>
						<div className={styles.projectBannerHeader}>
							<div style={{marginRight: "25px"}}>
								<h2 className={"blockHeader"}>Автор конкурса</h2>
								<Avatar src={project.user.avatar}/>
							</div>
							<div style={{width: "100%"}}>
								<h2 className={"blockHeader"}>Карточка конкурса</h2>
								<MiniBanner backgroundImage={project.image} title={project.title} price={project.price}/>
							</div>
						</div>
						<h2 className={"blockHeader"} style={{marginTop: "50px"}}>Описание конкурса</h2>
						<CardDescription text={project.description}/>
						{project.selected_work !== null ?
							<div className={styles.projectBannerHeader} style={{marginTop: "50px"}}>
								<Avatar src={project.selected_work.user.avatar}/>
								<div className={styles.winner}>
									<div className={styles.winnerTitle}>Победитель</div>
									<div className={styles.winnerName}>{project.selected_work.user.full_name}</div>
								</div>
								<Avatar src={project.selected_work.files[0].file}/>
							</div>
							:
							null
						}

						<h2 className={"blockHeader"} style={{marginTop: "50px"}}>Результаты голосования</h2>
						{products.length !== 0 ?
							<ContestProductWrapper>
								{products.map((item, index) =>
									<ContestProduct images={item.files.map(file_item => file_item.file)} likes={item.vote_count} key={index}
																	isLiked={item.is_vote} userId={item.user.id}/>
								)}
							</ContestProductWrapper>
							: null}

					</Container>
					: null
				}
			</main>
			<Footer/>
		</>
	)
}
