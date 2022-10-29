import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import {Container} from "react-bootstrap";
import {Banner, FutureBanner, FutureWrapper} from "../components/banner/Banner";
import bg from '../components/banner/banner-bg.png'
import f1 from '../components/banner/future1.png'
import f2 from '../components/banner/future2.png'
import axios from "axios";
import {serverHost} from "../consts/consts";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function Home() {
	const token = useSelector((state) => state.user.token)
	const [listProjects, setListProjects] = useState([])

	useEffect(() => {
		axios({
			method: "GET",
			url: serverHost + '/api/v1/projects/',
			headers: { Authorization: `Token ${token}` }
		}).then((response) => {
			setListProjects(response.data)
			console.log(response.data);
		})
	}, [setListProjects])


	return (
		<>
			<Header/>
			<main>
				<Container>
					<h2 className={"blockHeader"}>Актуальные соревнования</h2>
					{listProjects.length !== 0 ? <Banner backgroundImage={listProjects[0].image} link={"/project/"+listProjects[0].id} title={listProjects[0].title} price={listProjects[0].price} /> : null}
					<h2 className={"blockHeader"} style={{marginTop: "64px"}}>Предстоящие соревнования</h2>
					<FutureWrapper>
						<FutureBanner backgroundImage={f1} title={"СВАДЕБНАЯ СЪЕМКА"} date={"1-15 НОЯБРЯ"} disable={true}/>
						<FutureBanner backgroundImage={f2} title={"NEON FEST"} date={"10-20 ДЕКАБРЯ"} disable={true}/>
					</FutureWrapper>
				</Container>
			</main>
			<Footer/>
		</>
	)
}
