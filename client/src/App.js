import NavBar from "./components/UI/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './styles/App.css';
import './styles/styles.css'
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'
import {useEffect, useState} from "react";
import {check} from "./http/userApi";
import {useDispatch} from "react-redux";
import {Spinner} from "react-bootstrap";
import actions from "./store/actions/actions";
import {Error} from "./components/UI/error/Error";

function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        check().then((data) => {
            dispatch(actions.authActions.setAuth())
            dispatch(actions.authActions.setUser(data))
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={'grow'}/>
    }
    return (
        <BrowserRouter>
            <NavBar/>
            <Error/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
