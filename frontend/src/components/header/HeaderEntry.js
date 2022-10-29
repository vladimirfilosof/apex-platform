import styles from './Header.module.scss'
import logo from './logo.svg'
import HeaderTitle from "./headerTitle/HeaderTitle";

export default function HeaderEntry () {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<div><img src={logo} className={styles.logo} alt=""/></div>
					<div className="d-flex justify-content-center align-items-center">
						<HeaderTitle title={"регистрация"} src={"#form"} />
						<HeaderTitle title={"авторизация"} src={"#form"} />
					</div>
				</div>
			</div>
		</header>
	)
}
