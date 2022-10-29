import styles from "../MainForm.module.scss";
import React, {useState} from "react";
import axios from "axios";
import {serverHost} from "../../../consts/consts";
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from "../../../stores/userSlice";

export default function LoginForm() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(token)
		axios({
			method: "POST",
			url: serverHost + '/auth/token/login/',
			data: {
				email: email,
				password: password,
			}
		}).then((response) => {
			console.log(response.data.auth_token);
			dispatch(setToken(response.data.auth_token));
		}).catch((error) => {
			console.log(error);
		})
	}

	return (
		<form onSubmit={handleSubmit} className={styles.formBody} style={{borderTopLeftRadius: 0}}>
			<div className={styles.inputGrid}>
				<input onChange={e => setEmail(e.target.value)} value={email} placeholder={"Email"} name={"email"} type={"text"} className={styles.input}/>
				<input onChange={e => setPassword(e.target.value)} value={password} placeholder={"Пароль"} name={"password"} type={"password"} className={styles.input}/>
			</div>
			<div className={"d-flex justify-content-center mt-3"}>
				<input type={"submit"} className={styles.buttonSend} value={"Войти"}/>
			</div>
		</form>
	)
}
