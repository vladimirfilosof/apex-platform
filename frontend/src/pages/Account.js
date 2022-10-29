import Header from "../components/header/Header";
import {Container} from "react-bootstrap";
import Avatar, {ChangeAvatar} from "../components/avatar/Avatar";
import Footer from "../components/footer/Footer";
import {AddPublication, EmptyPublications, MyHeader, OtherHeader, Publications} from "../components/account/Account";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {serverHost} from "../consts/consts";

export default function Account() {
	const token = useSelector((state) => state.user.token)
	const [userData, setUserData] = useState(null)
	const getUserData = () => {
		axios({
			method: 'get',
			url: serverHost + '/api/v1/my-account/',
			headers: {Authorization: `Token ${token}`}
		}).then((response) => {
			setUserData(response.data)
		})
	}
	const createPost = (event) => {
		event.preventDefault()
		let formData = new FormData()
		console.log();
		formData.append('file', event.target.image.files[0])
		axios({
			method: 'post',
			url: serverHost + '/api/v1/posts/',
			data: formData,
			headers: {Authorization: `Token ${token}`}
		}).then((response) => {
			getUserData()
			event.target.reset()
		})
	}
	useEffect(() => {
		getUserData()
	}, [setUserData])

	return (
		<>
			<Header/>
			<main>
				{userData !== null ?
				<Container>
					<div className="d-flex ">
						<div style={{marginRight: "30px"}}>
							{userData.avatar ?
							<Avatar src={userData.avatar}/>
								: <ChangeAvatar/>
							}
						</div>
						<MyHeader name={userData.full_name}/>
						{/*<OtherHeader/>*/}
					</div>
					<AddPublication onSubmit={createPost} />
					{userData.posts.length === 0 ?
						<EmptyPublications/>
						:
						<Publications listSrc={userData.posts.map(item => item.file)}/>
					}
				</Container>
					: null}
			</main>
			<Footer/>
		</>
	)
}
