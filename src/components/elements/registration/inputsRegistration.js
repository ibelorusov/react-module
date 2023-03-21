import ChBox from "../authorization/chBox";
import "../authorization/inputsEntrance.css";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addRegistrationData} from "../../../store/reducers/entrance";


function InputsRegistration() {
    const textErrorLoginRegistration = useSelector(state => state.entrance.textErrorLoginRegistration);
    const textErrorPasswordRegistration = useSelector(state => state.entrance.textErrorPasswordRegistration);
    const dispatch = useDispatch();
    const [inputLoginRegistration, setInputLoginRegistration] = useState('');
    const [inputPasswordRegistration, setInputPasswordRegistration] = useState('');

    const handleGetUserData = (e) => {
        let userData = {
            login: inputLoginRegistration,
            password: inputPasswordRegistration
        };
        dispatch(addRegistrationData(userData));
        e.preventDefault();
        setInputPasswordRegistration("");
    };


    return (
        <div className="inputs">
            <input
                onChange={(e) => setInputLoginRegistration(e.target.value)}
                type="text"
                value={inputLoginRegistration}
                className="inputRegistration-login"
                placeholder='Логин'/>
            <span className="inputError-login" >{textErrorLoginRegistration}</span>

            <input
                onChange={(e) => setInputPasswordRegistration(e.target.value)}
                type="password"
                value={inputPasswordRegistration}
                className="inputRegistration-password"
                placeholder='Пароль'/>
            <span className="inputError-password" >{textErrorPasswordRegistration}</span>

            <ChBox />
            <span className="ChBox"></span>
            <input
                onClick={handleGetUserData}
                type="submit"
                className="enter-data"
                value="Зарегистрироваться" />
        </div>
    );
}

export default InputsRegistration;