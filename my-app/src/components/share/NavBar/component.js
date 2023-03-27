import {Link}  from 'react-scroll';

import './styles.scss'

const settings={
    spy: true,
    smooth: true,
    duration:600,
}

const NavBar = () => {
    return (
        <div className='d-flex nav-bar' >
            <Link to='ingredients'  {...settings} >ingredient</Link>
            <Link to='story' {...settings}  >story</Link>
            <Link to='burgers' {...settings}  >burgers</Link>
            <Link to='location' {...settings}  >location</Link>
        </div>


    )
}

export default NavBar;