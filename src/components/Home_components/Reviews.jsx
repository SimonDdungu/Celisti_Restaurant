import ReviewsCarouselCollection from "./ReviewsCarouselCollection";
import Blue_Background from "../../images/Pictures/Blue Background.jpg";

const Reviews = () => {
    return (
        <section className="py-20 md:pt-30 bg-gray-200">
            <div className="container mx-auto  px-5 md:px-20  ">
            <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">What Our Customers Say!</h3>
            <h5 className="text-center lora-Font text-base mb-10 md:mb-15">We've served countless happy customers, and their words speak for themselves.</h5>
            </div>
            <ReviewsCarouselCollection />

        </section>
    );
};

export default Reviews;