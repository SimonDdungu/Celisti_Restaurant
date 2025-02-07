import MenuCategories from "./Menu_categories";


const MenuMain = () => {
    return (
        <section className="mt-19 px-5 lg:px-10 xl:px-70 pt-10 md:pt-20 pb-10">
            <div className="container mx-auto mb-5">
                <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Our Menu</h3>
                <p className="mb-5 text-center">From fresh appetizers to mouthwatering entrées and delicious desserts, our menu is crafted to satisfy every craving.</p>
                <hr />
                <MenuCategories />
            </div>
        </section>
    );
};

export default MenuMain;