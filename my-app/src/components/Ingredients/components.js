import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import IngredientsCard from "../ingredients-card";

import './styles.scss'
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import {ingredients} from "../../assets/images/ingredients";

const breakpoints = {
    900: {
        width: 899,
        slidesPerView: 3.5,
    },
    600: {
        width: 600,
        slidesPerView: 2,
    },
    320: {
        width: 319,
        slidesPerView: 1.5,
    },
    270: {
        width: 270,
        slidesPerView: 1,
    }

}

const Ingredients = () => (
    <section className='ingredients'>
        <div className='container '>
            <h2>Ingredients</h2>
            <p className='after_h2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.
            </p>
            <div className="ingredients-carousel">
                <div>
                    <Swiper
                        grabCursor
                        spaceBetween={50}
                        slidesPerView={4.5}
                        className='mySwiper'
                        breakpoints={breakpoints}
                    >
                        {ingredients.map(ingredient => (
                            <SwiperSlide key={ingredient.name + '_' + ingredient.ingredients_id}
                                         virtualIndex={ingredient.ingredients_id}>
                                <IngredientsCard {...ingredient}/>
                            </SwiperSlide>)
                        )}

                    </Swiper>

                    <div className="slider_blur_end"></div>

                    <div className="slider_blur_start"></div>
                </div>
            </div>
            <p className='description_p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat
                purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed,
                dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et,
                efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus
                leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac,
                ultricies eu dolor.
            </p>
        </div>
    </section>

)

export default Ingredients