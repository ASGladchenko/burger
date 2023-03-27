import Btn from "../share/Btn";

import './styles.scss'

const MainBanner = () => (
    <section className='main-banner'>
        <div className='main-banner-bg'></div>
        <div className="container d-flex">
            <div className="main-banner-content">
                <h1> Burger Factory</h1>
                <p>Your dreamed burger close to your locations!</p>
                <Btn text='Discover the ingredients'  className='btn-main-banner' />
            </div>
            <div className="main-banner-img">
                <img src={require('../../assets/images/banner/mainBanner.png')} alt='logo'/>
            </div>
        </div>
    </section>

);

export default MainBanner
