import styles from './PageTitle.module.scss'
import way from './way.svg'

export default function PageTitle ({title, subtitle, picSide}) {
	let side = {left: 0}
	if (picSide === "right") {
		side = {right: 0}
	}

	return (
		<div className="container">
			<div className={styles.pageTitleBlock}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subtitle}>{subtitle}</p>
				<img className={styles.wayImage} style={side} src={way} alt=""/>
			</div>
		</div>
	)
}
