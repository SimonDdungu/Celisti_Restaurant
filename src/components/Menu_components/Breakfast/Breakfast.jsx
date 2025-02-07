import BreakfastCard from "./Breakfast_cad";
import Belgian_waffle from '../../../images/Menu/Breakfast/Belgian waffle.png';
import Pancake_with_Syrup from '../../../images/Menu/Breakfast/Pancake with Syrup.png';
import Indian_Samosa from '../../../images/Menu/Breakfast/Indian Samosa.png';
import Pita_Small_bread from '../../../images/Menu/Breakfast/Pita Small bread.png';
import Potato_chips from '../../../images/Menu/Breakfast/Potato chips.png';
import Pumpernickel_Brown_bread from '../../../images/Menu/Breakfast/Pumpernickel Brown bread.png';
import Roti_Pancakes from '../../../images/Menu/Breakfast/Roti Pancakes.png';
import Chapati from '../../../images/Menu/Breakfast/Chapati.png';
import Rissole_Samosa from '../../../images/Menu/Breakfast/Rissole Samosa.png';
import Nachos_with_dip from '../../../images/Menu/Breakfast/Nachos with dip.png';
import Kebab_Burrito from '../../../images/Menu/Breakfast/Kebab Burrito.png';
import Potato_wedges from '../../../images/Menu/Breakfast/Potato wedges French fries.png';
import Ciambella_Doughnut from '../../../images/Menu/Breakfast/Ciambella Doughnut.png';
import Flavoured_doughnuts from '../../../images/Menu/Breakfast/Flavoured icing doughnuts.png';
import Breakfast_Scone from '../../../images/Menu/Breakfast/Breakfast Scone.png';
import Cheese_sandwich from '../../../images/Menu/Breakfast/Cheese sandwich.png';
import Toast_Croissant from '../../../images/Menu/Breakfast/Toast Croissant Fried egg.png';
import Mandu_Pelmeni  from '../../../images/Menu/Breakfast/Mandu Pelmeni .png';
import Stir_fry_noodles from '../../../images/Menu/Breakfast/Stir fry noodles.png';
import Honey_Cereals  from '../../../images/Menu/Breakfast/Honey Cereals.png';
import Açaí_palm_Bowl from '../../../images/Menu/Breakfast/Açaí palm Bowl.png';
import Chilaquiles from '../../../images/Menu/Breakfast/Chilaquiles.png';
import Muesli_cereal from '../../../images/Menu/Breakfast/Muesli cereal.png';
import Muesli_Oatmeal from '../../../images/Menu/Breakfast/Muesli Oatmeal.png';
import Coffee_Omelette  from '../../../images/Menu/Breakfast/Coffee Omelette .png';
import Black_Coffee from '../../../images/Menu/Breakfast/Black Coffee.png';
import Black_Tea from '../../../images/Menu/Breakfast/Black Tea.png';
import Cappuccino_Espresso from '../../../images/Menu/Breakfast/Cappuccino Espresso.png';
import Assam_Green_Tea from '../../../images/Menu/Breakfast/Assam Green Tea.png';
import Glass_of_milk from '../../../images/Menu/Breakfast/Glass of milk.png';
import Herbal_Green_tea from '../../../images/Menu/Breakfast/Herbal Green tea.png';
import Milk_Tea from '../../../images/Menu/Breakfast/Milk Tea.png';
import Kefir_Frozen_yogurt from '../../../images/Menu/Breakfast/Kefir Frozen yogurt.png';
import Lemon_Tea from '../../../images/Menu/Breakfast/Lemon Tea.png';
import JavaCoffee from '../../../images/Menu/Breakfast/JavaCoffee.png';


const Breakfast = () => {
    return (
        <section className="mt-19 px-5 lg:px-10 xl:px-70 pt-10 md:pt-20 pb-10">
            <div className="container mx-auto mb-5">
                <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Breakfast</h3>
                <p className="mb-5 text-center">Start your morning with our delicious and satisfying breakfast classics.</p>
                <hr />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10 mt-10 mb-10 md:mb-20">
                        <BreakfastCard image={Belgian_waffle} image_alt="Belgian Waffle" Meal="Belgian Waffles" Price="5,000"/>
                        <BreakfastCard image={Pancake_with_Syrup} image_alt="Pancake with Syrup" Meal="Pancake with Syrup" Price="10,000"/>
                        <BreakfastCard image={Indian_Samosa} image_alt="Indian Samosa" Meal="Indian Samosa" Price="3,500"/>
                        <BreakfastCard image={Pita_Small_bread} image_alt="Pita Small bread" Meal="Pita Small bread" Price="2,500"/>
                        <BreakfastCard image={Potato_chips} image_alt="Potato chips" Meal="Potato chips" Price="3,000"/>
                        <BreakfastCard image={Pumpernickel_Brown_bread} image_alt="Pumpernickel Brown bread" Meal="Pumpernickel Brown bread" Price="3,500"/>
                        <BreakfastCard image={Roti_Pancakes} image_alt="Roti Pancakes" Meal="Roti Pancakes" Price="5,000"/>
                        <BreakfastCard image={Chapati} image_alt="Chapati" Meal="Chapati" Price="3,000"/>
                        <BreakfastCard image={Rissole_Samosa} image_alt="Rissole Samosa" Meal="Rissole Samosa" Price="3,500"/>
                        <BreakfastCard image={Nachos_with_dip} image_alt="Nachos with dip" Meal="Nachos with dip" Price="4,000"/>
                        <BreakfastCard image={Kebab_Burrito} image_alt="Kebab Burrito" Meal="Kebab Burrito" Price="4,500"/>
                        <BreakfastCard image={Potato_wedges} image_alt="Potato wedges French fries" Meal="Potato wedges French fries" Price="5,000"/>
                        <BreakfastCard image={Ciambella_Doughnut} image_alt="Ciambella Doughnut" Meal="Ciambella Doughnut" Price="2,000"/>
                        <BreakfastCard image={Flavoured_doughnuts} image_alt="Flavoured doughnuts" Meal="Flavoured doughnuts" Price="3,000"/>
                        <BreakfastCard image={Breakfast_Scone} image_alt="Breakfast Scone" Meal="Breakfast Scone" Price="6,000"/>
                        <BreakfastCard image={Cheese_sandwich} image_alt="Cheese sandwich" Meal="Cheese sandwich" Price="5,000"/>
                        <BreakfastCard image={Toast_Croissant} image_alt="Toast Croissant" Meal="Toast Croissant" Price="10,000"/>
                        <BreakfastCard image={Mandu_Pelmeni} image_alt="Mandu Pelmeni" Meal="Mandu Pelmeni" Price="7,000"/>
                        <BreakfastCard image={Stir_fry_noodles} image_alt="Stir fry noodles" Meal="Stir fry noodles" Price="10,000"/>
                        <BreakfastCard image={Honey_Cereals} image_alt="Honey Cereals" Meal="Honey Cereals" Price="8,000"/>
                        <BreakfastCard image={Açaí_palm_Bowl} image_alt="Açaí palm Bowl" Meal="Açaí palm Bowl" Price="10,000"/>
                        <BreakfastCard image={Chilaquiles} image_alt="Chilaquiles" Meal="Chilaquiles" Price="7,500"/>
                        <BreakfastCard image={Muesli_cereal} image_alt="Muesli cereal" Meal="Muesli cereal" Price="8,000"/>
                        <BreakfastCard image={Muesli_Oatmeal} image_alt="Muesli Oatmeal" Meal="Muesli Oatmeal" Price="8,000"/>
                        <BreakfastCard image={Coffee_Omelette} image_alt="Coffee Omelette" Meal="Coffee Omelette" Price="12,000"/>
                        <BreakfastCard image={Black_Coffee} image_alt="Black Coffee" Meal="Black Coffee" Price="3,000"/>
                        <BreakfastCard image={Black_Tea} image_alt="Black Tea" Meal="Black Tea" Price="2,000"/>
                        <BreakfastCard image={JavaCoffee} image_alt="Java Coffee" Meal="Java Coffee" Price="4,000"/>
                        <BreakfastCard image={Milk_Tea} image_alt="Milk Tea" Meal="Milk Tea" Price="3,000"/>
                        <BreakfastCard image={Cappuccino_Espresso} image_alt="Cappuccino Espresso" Meal="Cappuccino Espresso" Price="5,000"/>
                        <BreakfastCard image={Lemon_Tea} image_alt="Lemon Tea" Meal="Lemon Tea" Price="3,000"/>
                        <BreakfastCard image={Herbal_Green_tea} image_alt="Herbal Green tea" Meal="Herbal Green tea" Price="3,000"/>
                        <BreakfastCard image={Kefir_Frozen_yogurt} image_alt="Kefir Frozen yogurt" Meal="Kefir Frozen yogurt" Price="6,000"/>

                    </div>
            </div>
        </section>
    );
};

export default Breakfast;