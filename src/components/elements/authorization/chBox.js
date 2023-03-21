import './chBox.css';

function ChBox() {
    return (
        <div className="ch-box">
            <input type="checkbox" className="check" id='check'/>

            <label htmlFor="check" className="check-box"></label>

            <p className="check__description">Я согласен получать обновления на почту</p>
        </div>
    );
}

export default ChBox;