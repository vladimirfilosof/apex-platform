import styles from './HeaderTitle.module.scss'

export default function HeaderTitle({title, src}) {
	return (
		<a className={styles.headerTitle} href={src}>{title}</a>
	)
}
