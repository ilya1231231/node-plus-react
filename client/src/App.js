import NavBar from "./components/UI/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css'
import { useEffect, useState } from "react";
import { check } from "./http/userApi";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";

function App() {
	const dispatch = useDispatch()
	const user = useSelector(state => state.userReducer.user)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		check().then((data) => {
			dispatch({type: 'MAKE_AUTH', payload: true})
			dispatch({type: 'SET_USER', payload: data})
		}).finally(() => setLoading(false))
  	},[])

	if (loading) {
		return <Spinner animation={'grow'}/>
	}
	return (
		<BrowserRouter>
			<NavBar/>
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
