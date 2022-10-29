import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Entry from "./pages/Entry";
import {Provider, useSelector} from "react-redux";
import {store} from "./stores/store";
import RoutesWrapper from "./RoutesWrapper";

function App() {
	return (
		<Provider store={store()}>
			<RoutesWrapper/>
		</Provider>
	);
}

export default App;
