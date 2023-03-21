import './BtnExit.css';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../store/reducers/entrance";
import {clearBasket} from "../../../store/reducers/basket";

function BtnExit() {
    const isCorrectEnter = useSelector(state => state.entrance.isCorrectEnter);
    const dispatch = useDispatch();

    const handleExit = () => {
        dispatch(clearBasket());
        dispatch(logout());
    }
    if (isCorrectEnter) {
        return (
            <button onClick={handleExit} className="btn-exit">Выйти</button>
        );
    }
}

export default BtnExit;