import {MainPage} from "../../pages";
import "./index.css"
import { useDispatch } from "react-redux";
import {useEffect} from "react";
import {Header} from "../../pages/Main-page/header/header";


export const App = () => {

    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch({type:"FETCH_CITIES"})
    },[])

    return (
    <div className="App">
        <Header/>
        <MainPage/>
    </div>
    );
}
