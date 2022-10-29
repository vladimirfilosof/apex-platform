import styles from './avatar.module.scss'

export default function Avatar({src}) {
	return (
		<div className={styles.avatar}>
			{src !== null ?
				<img src={src} alt=""/>
				:
				<div style={{height: "75px", width: "75px"}}>
					<img src="/assets/pic.svg" alt=""/>
				</div>
			}
		</div>
	)
}

export function ChangeAvatar({onChange}) {
	return (
		<div className={styles.avatar}>
				<div style={{height: "131px", width: "143px"}}>
					<img src="/assets/no-photo.svg" alt=""/>
				</div>
		</div>
	)
}
