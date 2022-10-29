import styles from './cards.module.scss'

export function BorderCard({link, children}) {
	return (
		<a href={link} className={styles.borderCard}>
			{children}
		</a>
	)
}

export function AddCard({title, link}) {
	return (
		<BorderCard link={link}>
			<div className={styles.cardIcon}>
				<img src="/assets/add.svg" alt=""/>
			</div>
			<div className={styles.cardTitle}>{title}</div>
		</BorderCard>
	)
}

export function CatalogCard({title, link}) {
	return (
		<BorderCard link={link}>
			<div className={styles.cardIcon}>
				<img src="/assets/catalog.svg" alt=""/>
			</div>
			<div className={styles.cardTitle}>{title}</div>
		</BorderCard>
	)
}
