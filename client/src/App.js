import NavBar from "./components/UI/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'
import { useEffect, useState } from "react";
import { check } from "./http/userApi";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";
import actions from "./store/actions/actions";
import {QueryClient} from "@tanstack/react-query";
import {QueryClientProvider} from "@tanstack/react-query";
import {Error} from "./components/UI/error/Error";

function App() {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)
	const queryClient = new QueryClient()
	useEffect(() => {
		check().then((data) => {
			dispatch(actions.authActions.setAuth())
			dispatch(actions.authActions.setUser(data))
		}).finally(() => setLoading(false))
  	},[])

	if (loading) {
		return <Spinner animation={'grow'}/>
	}
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<NavBar/>
				<Error/>
				<AppRouter/>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
