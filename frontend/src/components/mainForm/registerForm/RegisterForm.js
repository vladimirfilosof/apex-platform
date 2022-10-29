import styles from "../MainForm.module.scss";
import React from "react";

export default function RegisterForm() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}
	return (
		<form onSubmit={handleSubmit} className={styles.formBody} style={{borderTopRightRadius: 0}}>
			<div className={styles.inputGrid} style={{gridTemplateColumns: "1fr 1fr"}}>
				<input placeholder={"Имя"} type={"text"} name={"name"} className={styles.input}/>
				<input placeholder={"Фамилия"} type={"text"} name={"last_name"} className={styles.input}/>
				<input placeholder={"Email"} type={"text"} name={"email"} className={styles.input}/>
				<input placeholder={"Телефон"} type={"text"} name={"phone"} className={styles.input}/>
				<input placeholder={"Пароль"} type={"password"} name={"password"} className={styles.input}/>
				<input placeholder={"Повторите пароль"} type={"password"} name={"re_password"} className={styles.input}/>
			</div>

			<div className={"d-flex justify-content-center mt-3"}>
				<input type={"submit"} className={styles.buttonSend} value={"Зарегистрироваться"}/>
			</div>
		</form>
	)
}
