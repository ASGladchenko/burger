import {useNavigate} from "react-router-dom";

import {home} from "../../../helpers/home";

import './styles.scss'

const Logo = () => {
const navigate = useNavigate()
    return (
        <div onClick={() => home(navigate)} className='logo' >
            <img src={require('../../../assets/images/logo/logo.png')} alt='logo_burger'  />
        </div>


    )
}

export default Logo;