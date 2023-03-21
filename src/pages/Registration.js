/* import "../components/elements/authorization/Authorization.css"; */
import { Link } from 'react-router-dom';
import InputsRegistration from "../components/elements/registration/inputsRegistration.js";

function Registration() {

    return (
        <div className="author">
            <div className="entrance">
                <div className="entrance-registration">
                    <Link to="/Authorization">Авторизоваться
                    </Link>
                </div>
                <h1 className="entrance__title" >Регистрация</h1>
                <InputsRegistration />
            </div>
        </div>
    )
}

export default Registration;