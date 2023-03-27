import * as React from "react";

import {Link} from "react-router-dom";

import './styles.scss'

const Btn = ({path, className, text, notLink}) => {
    return (
        !notLink ?
            <div className={className ? className + ' btn' : 'btn'}>
                <Link to={path} className=''>{text}</Link>
            </div> :
            <div className={className ? className + ' btn' : 'btn'}>
                <button className=''>{text}</button>
            </div>
    )
}

export default Btn;