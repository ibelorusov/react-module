import ChBox from './chBox.js';
import './inputsEntrance.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {correctData} from "../../../store/reducers/entrance";
import {useNavigate} from "react-router-dom";

function InputsEntrance() {
    const dispatch = useDispatch();
    const textErrorLogin = useSelector(state => state.entrance.textErrorLogin);
    const textErrorPassword = useSelector(state => state.entrance.textErrorPassword);
    const textErrorSubmit = useSelector(state => state.entrance.textErrorSubmit);

    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const navigate = useNavigate();
    const isCorrectEnter = useSelector(state => state.entrance.isCorrectEnter);

    if (isCorrectEnter) {
        navigate("/");
    }

    const handleEnter = (e) => {

        let userData = {
            login: inputLogin,
            password: inputPassword
        };
        dispatch(correctData(userData));

        e.preventDefault();
        setInputPassword("");
    };

    return (
        <div className="inputs">
            <input
                onChange={(e) => setInputLogin(e.target.value)}
                type="text"
                className="inputEntrance-login"
                placeholder='Логин'/>
            <span className="inputError-login">{textErrorLogin}</span>

            <input
                onChange={(e) => setInputPassword(e.target.value)}
                type="password"
                className="inputEntrance-password"
                placeholder='Пароль'/>
            <span className="inputError-password">{textErrorPassword}</span>

            <ChBox />
            <span className="ChBoxError">{textErrorSubmit}</span>

            <input
                onClick={handleEnter}
                type="submit"
                className="enter-data"
                value="Войти" />
        </div>
    );
}

export default InputsEntrance;