import {useNavigate} from "react-router-dom";

import {home} from "../../helpers/home";

import './styles.scss'

const BagGate = () => {
    const navigate = useNavigate()
        return (
            <section className='bad_gate_way'>
                <div className="container">
                    <h2>Bad Gate Way</h2>
                    <p className='after_h2'>This page does not exist</p>
                    <div className='bad_gate_way_img' onClick={()=>home(navigate)}>
                        <img src={require('../../assets/images/go_back/go_back.png')} alt="go_back"/>
                        <span> Go Home</span>
                    </div>

                </div>
            </section>)
    };
export default BagGate
