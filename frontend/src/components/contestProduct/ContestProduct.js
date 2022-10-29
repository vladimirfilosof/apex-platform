import styles from './ContestProduct.module.scss'
import arrow from './arrow.svg'
import unlikeSVG from './unlike.svg'
import likeSVG from './like.svg'
import personSVG from './person.svg'
import {useState} from "react";

export default function ContestProduct({images, finish, likes, isLiked, userId}) {
	let imgs = []
	images.forEach((item, index) =>
		imgs.push(<div key={index} className={styles.slide}><img src={item} alt="" /></div>)
	)
	const [shift, setShift] = useState(0)
	const [currentPosition, setCurrentPosition] = useState(0)
	const imgWidth = 360
	const count = images.length

	const shiftLeft = () => {
		if (currentPosition === 0) return;
		setShift(-(currentPosition - 1) * imgWidth)

		setCurrentPosition(currentPosition - 1)
	}

	const shiftRight = () => {
		if (currentPosition === count - 1) return;
		setShift(-(currentPosition + 1) * imgWidth)
		setCurrentPosition(currentPosition + 1)
	}

	return (
		<div className={styles.contestProduct}>
			<div className={styles.contestProductContent}>
				<div style={{left: shift + 'px'}} className={styles.slidesWrapper}>
					{imgs}
				</div>
				<div onClick={shiftLeft} className={styles.arrowLeft}><img src={arrow} alt=""/></div>
				<div onClick={shiftRight} className={styles.arrowRight}><img src={arrow} alt=""/></div>
			</div>
			<div className={styles.bottomPane}>
				<a href={"/account/" + userId}><img src={personSVG} alt="" className={styles.iconPerson}/></a>
				{
					isLiked ?
						<img src={likeSVG} alt="" className={styles.iconLike}/>
						:
						<img src={unlikeSVG} alt="" className={styles.iconLike}/>
				}
				<div className={styles.countLikes}>{likes}</div>
			</div>

		</div>
	)
}

export function ContestProductWrapper({children}) {
	return (
		<div className={styles.contestProductWrapper}>
			{children}
		</div>
	)
}
