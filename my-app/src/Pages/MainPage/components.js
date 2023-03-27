import Story from "../../components/Story";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Burgers from "../../components/Burgers";
import Location from "../../components/Location";
import MainBanner from "../../components/MainBanner";
import Ingredients from "../../components/Ingredients";

import './styles.scss'

const MainPage = () => (
    <>
        <Header title='header' />
        <MainBanner/>
        <Ingredients title='ingredients'/>
        <Story title='story'/>
        <Burgers  title='burgers'/>
        <Location  title='location'/>
        <Footer/>
    </>
)
export default MainPage