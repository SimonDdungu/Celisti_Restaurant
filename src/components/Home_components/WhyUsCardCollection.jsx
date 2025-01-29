import WhyUsCard from "./WhyUsCard";
import Chef from "../../images/icons/chef.png";
import Waitress from "../../images/icons/waitress.png";
import Burgers_chips from "../../images/icons/burgers chips.png";

const WhyUsCardCollection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
            <WhyUsCard image={Chef} image_alt="Chef icon" Title="World-Class Culinary Team" Description="Our kitchen is led by renowned chefs who bring experience from Michelin-starred restaurants and global fine-dining institutions." />
            <WhyUsCard image={Waitress} image_alt="Waitress icon" Title="Service with a Smile" Description="Great Service Isn't Extra—It's Expected. Our team is here to make sure you feel welcome, valued, and taken care of every step of the way. This is hospitality at its finest." />
            <WhyUsCard image={Burgers_chips} image_alt="Burgers and chips icon" Title="Food with Integrity" Description="We take pride in using only the freshest ingredients—no processed shortcuts, no artificial flavors, just real, high-quality food that speaks for itself."/>
        </div>
    );
};

export default WhyUsCardCollection;