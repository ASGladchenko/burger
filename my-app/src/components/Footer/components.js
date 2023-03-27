import './styles.scss'
import Logo from "../share/Logo";

const Footer = () => (
    <footer>
        <div className="container d-flex">
            <Logo/>

            <div className='footer_contacts'>
                <span className="footer_company_name">Burger Factory</span>

                <span>Pl. de la Riponne 10</span>

                <span>1005 Lausanne</span>

                <span>021 800 00 00</span>
            </div>
        </div>
    </footer>
);
export default Footer
