import FeaturedMenu from "../components/Home_components/FeaturedMenu";
import Hero from "../components/Home_components/Hero";
import Home_WhyUs from "../components/Home_components/Home_WhyUs";
import NavigationBar from "../components/Home_components/NavigationBar";
import Reviews from "../components/Home_components/Reviews";
import ReviewsCarouselCollection from "../components/Home_components/ReviewsCarouselCollection";
const Home = () => {
    return (
        <>
            <Hero />
            <Home_WhyUs />
            <FeaturedMenu />
            <Reviews />
        </>
    );
};

export default Home;