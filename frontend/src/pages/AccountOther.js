import Header from "../components/header/Header";
import {Container} from "react-bootstrap";
import Avatar, {ChangeAvatar} from "../components/avatar/Avatar";
import Footer from "../components/footer/Footer";
import {AddPublication, EmptyPublications, MyHeader, OtherHeader, Publications} from "../components/account/Account";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import {serverHost} from "../consts/consts";
import {useParams} from "react-router-dom";

export default function AccountOther() {
	const {id} = useParams()
	const token = useSelector((state) => state.user.token)
	const [userData, setUserData] = useState(null)
	const getUserData = () => {
		axios({
			method: 'get',
			url: serverHost + '/api/v1/account/' + id +'/',
			headers: {Authorization: `Token ${token}`}
		}).then((response) => {
			setUserData(response.data)
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
							<Avatar src={userData.avatar}/>
						</div>
						<OtherHeader name={userData.full_name}/>
					</div>
					{userData.posts.length === 0 ?
						<EmptyPublications other={true}/>
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
