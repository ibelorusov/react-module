import { useNavigate } from'react-router-dom';

function Btnback() {

    const navigation = useNavigate()
    const goBack = () => navigation(-1)

    return (
        <button onClick={goBack}>
        <img className="img1" src="../../images/Group64.svg" alt="back" />
        </button>
    );
  }
  
export default Btnback;