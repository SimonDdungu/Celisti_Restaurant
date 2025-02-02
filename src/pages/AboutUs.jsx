import AboutUs_Banner from "../components/AboutUs_components/AboutUs_Banner";
import AboutUs_Main from "../components/AboutUs_components/AboutUs_Main";
import JoinUs from "../components/AboutUs_components/Join_Us";
import Our_Team from "../components/AboutUs_components/Our_Team";
import OurMission from "../components/AboutUs_components/OurMission";

const AboutUs = () => {
    return (
        <>
        <AboutUs_Banner />
        <AboutUs_Main />
        <OurMission />
        <Our_Team />
        <JoinUs />
        </>
    );
};

export default AboutUs;