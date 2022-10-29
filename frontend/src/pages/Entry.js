import HeaderEntry from "../components/header/HeaderEntry";
import Footer from "../components/footer/Footer";
import PageTitle from "../components/pageTitle/PageTitle";
import MainForm from "../components/mainForm/MainForm";

export default function Entry() {
	return (
		<div>
			<HeaderEntry/>
			<main>
				<div className="lineLeft" style={{marginTop: "80px"}}/>
				<PageTitle title={"Здесь выбирают тебя!"} subtitle={"Регистрируйся, чтобы стать одним из лучших"}
									 picSide={"left"}/>
				<div className="lineRight"/>
				<PageTitle title={"Все выбирают для тебя!"} subtitle={"Присоединяйся к нам, чтобы найти самых лучших"}
									 picSide={"right"}/>
				<div style={{marginTop: "100px"}} id={"form"}>
					<MainForm />
				</div>
			</main>
			<Footer/>
		</div>
	)
}
