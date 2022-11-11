import {MainPage} from "../../pages";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Header} from "../../pages/Main-page/header/header";
import {fetchCities} from "../../ui";

export const App = () => {

    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(fetchCities())
    },[])

    return (
    <div className="App">
        <Header/>
        <MainPage/>
    </div>
    );
}
