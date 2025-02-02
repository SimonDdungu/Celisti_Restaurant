import mission from "../../images/icons/mission.png";
import diamond_2 from "../../images/icons/diamond 2.png";


const OurMission = () => {
    return (
        <section className="bg-gray-200">
            <div className="container mx-auto py-10 px-5 md:px-40 md:py-20 flex flex-col md:flex-row justify-center gap-20">

                <div className="w-full md:w-100 rounded-lg shadow-lg px-7 pt-10 pb-15 bg-gray-100 pointer-events-none border-t-7 border-[#6d3b8d]">

                    <div className="w-20 mx-auto mb-4">
                        <img className="w-full mx-auto object-contain" src={mission} alt="Mission Icon" />
                    </div>

                    <h3 className="text-center playfair-display-Font text-2xl mb-3">Our Mission</h3>
                    <p className="mb-2">
                    At Celesti Restaurant, we believe food should be fresh flavorful and made with heart.
                    </p>
                    <p>
                    Our mission is to create a space where every guest feels welcome and every meal is a moment to enjoy.
                    </p>

                </div>


                <div className="w-full md:w-100 rounded-lg shadow-lg px-3 md:px-7 pt-10 pb-10 bg-gray-100 pointer-events-none border-t-7 border-[#8ac9fe]">

                    <div className="w-20 mx-auto mb-4">
                        <img className="w-full mx-auto object-contain" src={diamond_2} alt="Mission Icon" />
                    </div>

                    <h3 className="text-center playfair-display-Font text-2xl mb-3">Our Values</h3>
                    <ul className="text-sm">

                        <li className="py-2 pl-6 md:pl-7 relative before:absolute before:top-1/4 before:left-0 before:bg-[url(/images/icons/checked.png)]  before:bg-cover before:bg-center before:bg-no-repeat before:w-4 md:before:w-5 md:before:h-5 before:h-4">To Serve Quality – We use only the freshest ingredients.
                        </li>

                        <li className="py-2 pl-6 md:pl-7 relative before:absolute before:top-1/4 before:left-0 before:bg-[url(/images/icons/checked.png)]  before:bg-cover before:bg-center before:bg-no-repeat before:w-4 md:before:w-5 md:before:h-5 before:h-4">To Prioritize Hospitality – Every guest is treated like family.
                        </li>

                        <li className="py-2 pl-6 md:pl-7 relative before:absolute before:top-1/4 before:left-0 before:bg-[url(/images/icons/checked.png)]  before:bg-cover before:bg-center before:bg-no-repeat before:w-4 md:before:w-5 md:before:h-5 before:h-4">To Support the Community – We source locally and give back.
                        </li>
                        
                        <li className="py-2 pl-6 md:pl-7 relative before:absolute before:top-1/4 before:left-0 before:bg-[url(/images/icons/checked.png)]  before:bg-cover before:bg-center before:bg-no-repeat before:w-4 md:before:w-5 md:before:h-5 before:h-4">To Celebrate Flavor – Every dish is crafted with passion.
                        </li>
                    </ul>

                </div>
               
            </div>
        </section>
    );
};

export default OurMission;