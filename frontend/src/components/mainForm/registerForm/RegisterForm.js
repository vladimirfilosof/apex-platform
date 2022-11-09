import styles from "../MainForm.module.scss";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {serverHost} from "../../../consts/consts";
import {setToken} from "../../../stores/userSlice";

export default function RegisterForm() {
	const [email, setEmail] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [phone, setPhone] = useState("")
	const [password, setPassword] = useState("")
	const [rePassword, setRePassword] = useState("")
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token)

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(token)
		axios({
			method: "POST",
			url: serverHost + '/auth/users/',
			data: {
				email: email,
				first_name: firstName,
				last_name: lastName,
				phone: phone,
				password: password,
				re_password: rePassword,
			}
		}).then((response) => {
			console.log(response.data.auth_token);
			// dispatch(setToken(response.data.auth_token));
			alert("Аккаунт создан")
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
		}).catch((error) => {
			console.log(JSON.stringify(error.response.data));
			alert(JSON.stringify(error.response.data))
		})
	}

	return (
		<form onSubmit={handleSubmit} className={styles.formBody} style={{borderTopRightRadius: 0}}>
			<div className={styles.inputGrid} style={{gridTemplateColumns: "1fr 1fr"}}>
				<input onChange={e => setFirstName(e.target.value)} placeholder={"Имя"} type={"text"} name={"name"} className={styles.input}/>
				<input onChange={e => setLastName(e.target.value)} placeholder={"Фамилия"} type={"text"} name={"last_name"} className={styles.input}/>
				<input onChange={e => setEmail(e.target.value)} placeholder={"Email"} type={"text"} name={"email"} className={styles.input}/>
				<input onChange={e => setPhone(e.target.value)} placeholder={"Телефон"} type={"text"} name={"phone"} className={styles.input}/>
				<input onChange={e => setPassword(e.target.value)} placeholder={"Пароль"} type={"password"} name={"password"} className={styles.input}/>
				<input onChange={e => setRePassword(e.target.value)} placeholder={"Повторите пароль"} type={"password"} name={"re_password"} className={styles.input}/>
			</div>

			<div className={"d-flex justify-content-center mt-3"}>
				<input type={"submit"} className={styles.buttonSend} value={"Зарегистрироваться"}/>
			</div>
		</form>
	)
}
