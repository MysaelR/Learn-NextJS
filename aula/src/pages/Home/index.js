import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home(){

    return(
        <div>
            <Header/>
            <h1>Bem vindo a página Home</h1>

            <Link to={"/contato"}>Contato</Link>
        </div>
    )
}