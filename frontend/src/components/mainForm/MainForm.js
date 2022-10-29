import styles from './MainForm.module.scss'
import classNames from "classnames";
import React, {useState} from 'react';
import RegisterForm from "./registerForm/RegisterForm";
import LoginForm from "./loginForm/LoginForm";

export default function MainForm() {
	const [activeTab, setActiveTab] = useState(0)

	const forms = [
		<LoginForm />,
		// <RegisterForm />
	]

	return (
		<div className={styles.formWrapper}>
			<div className={styles.formBlock}>
				<div className={styles.formHeader}>
					<div
						className={activeTab === 0 ? styles.formTabWrapper : classNames(styles.formTabWrapper, styles.formTabActive)}>
						<div onClick={() => {
							setActiveTab(0)
						}} className={styles.formTab}>Авторизация
						</div>
					</div>
					<div
						className={activeTab === 1 ? styles.formTabWrapper : classNames(styles.formTabWrapper, styles.formTabActive)}>
						<div onClick={() => {
							setActiveTab(1)
						}} className={styles.formTab}>Регистрация
						</div>
					</div>
				</div>
				<div className={styles.formBodyWrapper}>
					{forms[activeTab]}
				</div>
			</div>
		</div>
	)
}
