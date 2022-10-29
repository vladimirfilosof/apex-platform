import {BrowserRouter, Route, Routes} from "react-router-dom";
import Entry from "./pages/Entry";
import {useSelector} from "react-redux";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Account from "./pages/Account";
import AccountOther from "./pages/AccountOther";

export default function RoutesWrapper() {
	const token = useSelector((state) => state.user.token)

	return (
		<BrowserRouter>
			{token === null ?
				<Routes>
					<Route exact path="/" element={<Entry/>}/>
				</Routes> :
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/project/:id" element={<Project/>}/>
					<Route exact path="/account" element={<Account/>}/>
					<Route exact path="/account/:id" element={<AccountOther/>}/>
				</Routes>
			}
		</BrowserRouter>
	)
}
