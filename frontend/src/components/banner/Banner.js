import styles from './Banner.module.scss'
import cash from './cash.svg'
import classNames from "classnames";

export function Banner({backgroundImage, link, title, price}) {
	return (
		<a href={link ?? "#"} className={styles.banner} style={{backgroundImage: "url(" + backgroundImage + ")"}}>
			<div className={styles.bannerContent}>
				<h2 className={styles.bannerTitle}>{title}</h2>
				<div className={styles.bannerDate}>1-28 ОКТЯБРЯ</div>
				<div className={styles.bannerPrice}>
					<img src={cash} alt=""/>
					<div>{price}</div>
				</div>
			</div>
		</a>
	)
}

export function FutureBanner({title, date, backgroundImage, disable, link}) {
	return (
		<>
			{disable === true ?
				<div className={classNames(styles.banner, styles.long)}
						 style={{backgroundImage: "url(" + backgroundImage + ")"}}>
					<div className={styles.disabled}></div>
					<div className={styles.futureBanner}>
						<h2 className={styles.futureTitle}>{title}</h2>
						<div className={styles.futureDate}>{date}</div>
					</div>
				</div>
				:
				<a href={link ?? "#"} className={classNames(styles.banner, styles.long)}
					 style={{backgroundImage: "url(" + backgroundImage + ")"}}>
					<div className={styles.futureBanner}>
						<h2 className={styles.futureTitle}>{title}</h2>
						<div className={styles.futureDate}>{date}</div>
					</div>
				</a>
			}
		</>
	)
}

export function FutureWrapper({children}) {
	return (
		<div className={styles.futureWrapper}>
			{children}
		</div>
	)
}

export function MiniBanner({backgroundImage, title, price}) {
	return (
		<div className={classNames(styles.banner, styles.miniBanner)} style={{backgroundImage: "url(" + backgroundImage + ")"}}>
			<div className={styles.bannerContent}>
				<h2 className={styles.bannerTitle}>{title}</h2>
				<div className={styles.bannerDate}>1-28 ОКТЯБРЯ</div>
				<div className={styles.bannerPrice}>
					<img src={cash} alt=""/>
					<div>{price}</div>
				</div>
			</div>
		</div>
	)
}
