import FeaturedMenu from "../components/Home_components/FeaturedMenu";
import Hero from "../components/Home_components/Hero";
import HomeReservations from "../components/Home_components/Home_Reservations";
import Home_WhyUs from "../components/Home_components/Home_WhyUs";
import NavigationBar from "../components/Home_components/NavigationBar";
import Reviews from "../components/Home_components/Reviews";
import ReviewsCarouselCollection from "../components/Home_components/ReviewsCarouselCollection";
import Footer from "../components/Home_components/Footer";
const Home = () => {
    return (
        <>
            <Hero />
            <Home_WhyUs />
            <FeaturedMenu />
            <Reviews />
            <HomeReservations />
            <Footer />
        </>
    );
};

export default Home;