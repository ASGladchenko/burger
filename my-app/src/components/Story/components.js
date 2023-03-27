import {useWindowSize} from "../../hooks/widowSize";

import './styles.scss'

const Story = () => {
    const [width] = useWindowSize()
    const less_1400 = width < 1400
    return (
        <section className='story'>
            <div className="container d-flex">
                {less_1400 &&
                    <div className="story-content-title">
                    <h2>The story</h2>
                    <p className='after_h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id
                        arcu vel maximus.
                    </p>
                </div>
                }
                <div className="story-content">
                    {!less_1400 &&
                        <div className="story-content-title">
                        <h2>The story</h2>
                        <p className='after_h2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id
                            arcu vel maximus.
                        </p>
                    </div>
                    }
                    <p className='description_p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
                        consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer
                        risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec
                        id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis
                        nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper
                        turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.
                    </p>
                </div>
                <div className="story-img">
                    <img src={require('../../assets/images/story/story-img.png')} alt="story burger"/>
                </div>
            </div>
        </section>
    )
}
export default Story