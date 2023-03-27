import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import Btn from "../share/Btn";
import {burgers} from "../../assets/images/burgers";
import {useWindowSize} from "../../hooks/widowSize";

import './styles.scss'
import BurgerCard from "./burger-card"
import BurgerCardTurn from "./burger-card-turning-over";

const breakpoints = {
    900: {
        width: 899,
        slidesPerView: 1.8,
    },
    600: {
        width: 600,
        slidesPerView: 1.2,
    },
    320: {
        width: 319,
        slidesPerView: 1,
    },

}

const Burgers = () => {
    const [windowWidth] = useWindowSize();
    return (
        <section className='burgers' >
            <div className="container">
                <h2>Burgers</h2>
                {
                    windowWidth > 1400 ?
                    <div className="slider_container">
                        {burgers.map(burger => <BurgerCard key={burger.burgers_id + burger.name} burger={burger}/>)}
                    </div> :
                        <div>
                            <Swiper
                                grabCursor
                                spaceBetween={50}
                                className='mySwiper'
                                breakpoints={breakpoints}
                            >
                                {burgers.map(burger => {
                                        return (
                                            <SwiperSlide key={burger.name + '_' + burger.ingredients_id}
                                                         virtualIndex={burger.ingredients_id}>
                                                <BurgerCardTurn burger={burger}/>
                                            </SwiperSlide>)
                                    }
                                )}

                            </Swiper>
                        </div>
                }


                <Btn notLink className='order-now' text='Order now'/>

            </div>
        </section>
    )
}
export default Burgers