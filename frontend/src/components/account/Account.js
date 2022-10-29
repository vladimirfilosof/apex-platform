import styles from "./account.module.scss";
import {AddCard, CatalogCard} from "../cards/cards";
import Avatar from "../avatar/Avatar";
import {useState} from "react";

export function MyHeader({name}) {
	return (
		<div className="d-flex flex-column w-100 justify-content-between">
			<div>
				<div className={styles.lvl} style={{marginBottom: "6px"}}>
					<img style={{marginRight: "10px"}} src="/assets/star.svg" alt=""/>
					<div>LV <span>1</span></div>
				</div>
				<div className={styles.accountName}>
					{name}
				</div>
				<div className={"hr"} style={{marginTop: "7px"}}/>
			</div>
			<div className={""}>
				<div className={styles.accountHeaderTitle}>Последние события</div>
				<div className={styles.cardsWrapper}>
					<div className={styles.card}><AddCard link={"/"} title={"найти конкурс"}/></div>
					{/*<div className={styles.card}><AddCard link={"#"} title={"создать конкурс"} /></div>*/}
					{/*<div className={styles.card}><CatalogCard link={"#"} title={"созданные конкурсы"}/></div>*/}
					<div className={styles.card}><CatalogCard link={"project/1"} title={"участие в конкурсах"}/></div>
				</div>
			</div>
		</div>
	)
}

export function OtherHeader({name}) {
	return (
		<div className={styles.otherHeader}>
			<div className={styles.lvl}>
				<img style={{marginRight: "10px"}} src="/assets/star.svg" alt=""/>
				<div>LV <span>1</span></div>
			</div>
			<div className={styles.accountName}>
				{name}
			</div>
		</div>
	)
}

export function EmptyPublications({other}) {
	return (
		<div className={styles.emptyPublications}>
			<div className={styles.emptyPublicationsIcon}><img src="/assets/pic.svg" alt=""/></div>
			<div className={styles.emptyPublicationsText}>{other ? "Пользователь ещё не загрузил ни одной фотографии" : "Загрузите от одной до пяти фотографий в формате JPEG, PNG"}</div>
		</div>
	)
}

export function AddPublication({onSubmit}) {
	const [showAddFile, setShowAddFile] = useState(false)
	let formStyle = "none"
	if (showAddFile)
		formStyle = "flex"
	else
		formStyle = "none"

	return (
		<div style={{marginTop: "60px", display: "block"}}>
			<div className="d-flex justify-content-center">
				<div onClick={() => setShowAddFile(!showAddFile)} className={styles.addPublication}>
					<div>
						<img src="/assets/add.svg" alt=""/>
					</div>
					<div>ДОБАВИТЬ ПУБЛИКАЦИЮ</div>
				</div>
			</div>
			<div style={{marginTop: "11px"}} className={"hr"}/>
			<form onSubmit={onSubmit} className={styles.fileForm} style={{marginTop: "30px", display: formStyle}}>
				<input required id="image" name={"image"} type="file" accept="image/gif, image/jpeg, image/png"/>
				<input onClick={() => setShowAddFile(false)} className={styles.formButton} type="submit"/>
			</form>

		</div>
	)
}

export function Publications({listSrc}) {
	const listImg = []
	listSrc.forEach(
		(item, index) => listImg.push(<div className={styles.publicationCard} key={index}><Avatar src={item} /></div>)
	)
	return (
		<div style={{marginTop: "60px"}} className={styles.publications}>
			{listImg}
		</div>
	)
}
