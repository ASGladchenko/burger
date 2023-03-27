import './styles.scss'
import Btn from "../share/Btn";
import Logo from "../share/Logo";
import NavBar from "../share/NavBar";

const Header = () => (
    <header>
        <div className="container d-flex">
            <Logo/>
            <NavBar />
            <Btn notLink={true} className='order-now' text='Order now' />
        </div>
    </header>
);
export default Header
