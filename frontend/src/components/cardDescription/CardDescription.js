import styles from './cardDescription.module.scss'

export default function CardDescription({text}) {
	return (
		<div className={styles.cardDescription} >
			<div dangerouslySetInnerHTML={{__html:text}}/>
		</div>
	)
}
