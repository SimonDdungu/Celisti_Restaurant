import Chefs_Team from "../../images/Pictures/Chefs Team.jpg";

const Our_Team = () => {
    return (
        <section>
            <div className="container mx-auto px-5 py-20 lg:py-30 flex flex-col-reverse lg:flex-row lg:items-center xl:items-start gap-5">
                <div className="max-w-full lg:w-600 lg:max-w-600">
                    <img className="w-full h-full object-cover" src={Chefs_Team} alt="Our Chef Team" />
                </div>

                <div>
                    <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 ">Meet Our Chefs</h3>
                    <p className="mb-5">
                        Our kitchen is the heart of Celesti Restaurant, powered by a passionate team of chefs, cooks and kitchen staff who take pride in every dish they create. Led by Chef Ninsiima Costance, our team works together to bring fresh, flavorful meals to your table every day.
                    </p>
                    <p className="mb-5">
                        From grilling the perfect steak to carefully plating each dessert, every team member plays a key role in making sure your meal is delicious and beautifully served. We believe that great food comes from teamwork, attention to detail, and a love for cooking.
                    </p>
                    <p>
                        Whether it's a classic favorite or a new special, we prepare each dish with fresh ingredients and a commitment to quality. Our goal is simple: to make every bite enjoyable and every visit memorable.

                        We can't wait to serve you!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Our_Team;