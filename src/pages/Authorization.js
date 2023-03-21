import "../components/elements/authorization/authorization.css";
import InputsEntrance from "../components/elements/authorization/inputsEntrance.js";
import { Link } from 'react-router-dom';

function Authorization() {
    return (
        <div className="author">
            <div className="entrance">
                <div className="entrance-registration">
                    <Link to="/Registration">
                        Зарегистрироваться
                    </Link>
                </div>
                <h1 className="entrance__title" >вход</h1>
                <InputsEntrance />
            </div>
        </div>
    )
}

export default Authorization;