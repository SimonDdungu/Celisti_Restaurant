import MenuCatCard from './Menu_cat_card';
import Cheese_sandwich from '../../images/Menu/Breakfast/Cheese sandwich.png';
import ItalianPastaCuisine from '../../images/Menu/Italian Pasta Cuisine.png';
import Shashlik_Barbecue from '../../images/Menu/Shashlik Barbecue with Fries and Sauce.png';
import Pepperoni_pizza from '../../images/Menu/Pepperoni pizza.png';
import Chocolate_cake from '../../images/Menu/Chocolate cake Frosting.png';
import Cocktail_Tequila_Sunrise_Caesar from '../../images/Menu/Cocktail Tequila Sunrise Caesar.png';


const MenuCategories = () => {
    return (
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 mt-10 mb-10 md:mb-20">
            <MenuCatCard image={Cheese_sandwich} img_alt="Cheese Sandwich" category="Breakfast" description="Start your morning with our delicious and satisfying breakfast classics." link="/menu/breakfast"/>
            <MenuCatCard image={ItalianPastaCuisine} img_alt="Italian Pasta Cuisine" category="Starters & Light Bites" description="Small dishes to enjoy before your main course or as a quick snack." link="/under-construction"/>
            <MenuCatCard image={Shashlik_Barbecue} img_alt="Shashlik Barbecue" category="Main Courses" description="Our most filling meals, from meats to veggies, designed to satisfy."link="/under-construction"/>
            <MenuCatCard image={Pepperoni_pizza} img_alt="Pepperoni pizza" category="Burgers & Pizzas " description="From classic burgers to mouth watering pizzas, these dishes you come back for."  link="/under-construction"/>
            <MenuCatCard image={Chocolate_cake} img_alt="Chocolate cake" category="Desserts" description="End your meal on a sweet note with our indulgent creamy treats and more." link="/under-construction"/>
            <MenuCatCard image={Cocktail_Tequila_Sunrise_Caesar} img_alt="Cocktail Tequila Sunrise Caesar" category="Beverages" description="Stay refreshed with our selection of soft drinks, fresh juices and cocktails"  link="/under-construction"/>
            
            </div>
       
    );
}

export default MenuCategories;