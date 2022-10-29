import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="lineLeft"/>
			<div className="lineRight" style={{marginTop: '40px'}}/>
		</footer>
	)
}
