import FeaturedMenuCard from "./FeaturedMenuCard";
import Shish_kebab_Barbecue from '../../images/Menu/Shish kebab Barbecue Mediterranean cuisine.png'
import Ramen_Chinese_noodles from '../../images/Menu/Ramen Chinese noodles.png'
import Fattoush_Salad_Vegetarian_Cuisine from '../../images/Menu/Fattoush Salad Vegetarian Cuisine.png'
import Flavored_Milkshakes from '../../images/Menu/Flavored Milkshakes.png'
import Chicken_nugget_French_fries from '../../images/Menu/Chicken nugget French fries.png'
import Cheeseburger_Frenchfries from '../../images/Menu/Cheeseburger with French fries and a Drink.png'

const FeaturedMenuCardCollection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10 mb-10 md:mb-20">
            <FeaturedMenuCard Title="Shish Kebab Barbecue" image={Shish_kebab_Barbecue} image_alt="Shish Kebab Barbecue image" Price="80,000"/>
            <FeaturedMenuCard Title="Chicken Nugget French Fries" image={Chicken_nugget_French_fries} image_alt="Chicken nugget French fries image" Price="60,000"/>
            <FeaturedMenuCard Title="Fattoush Salad Vegetarian Cuisine" image={Fattoush_Salad_Vegetarian_Cuisine} image_alt="Fattoush Salad Vegetarian Cuisine image" Price="50,000"/>
            <FeaturedMenuCard Title="Ramen Chinese Noodles" image={Ramen_Chinese_noodles} image_alt="Ramen Chinese noodles image" Price="30,000"/>
            <FeaturedMenuCard Title="Cheeseburger with French fries" image={Cheeseburger_Frenchfries} image_alt="Cheeseburger with French fries and a Drink image" Price="55,000"/>
            <FeaturedMenuCard Title="Flavored Milkshakes" image={Flavored_Milkshakes} image_alt="Flavored Milkshakes image" Price="15,000"/>
        </div>
    );
};

export default FeaturedMenuCardCollection;