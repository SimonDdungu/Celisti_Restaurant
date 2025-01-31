import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import ReviewsCarousel from './ReviewsCarousel';

import Jessica_ketwaroo from '../../images/Customers/Jessica_Ketwaroo.png';
import Keith_Daniel from '../../images/Customers/Obua Junior.jpeg';
import Jessica_Margret from '../../images/Customers/Jessica Margret.jpg';
import Simon_Chainbers from '../../images/Customers/Simon Chainbers.jpg';
import Monique_Namusoke from '../../images/Customers/Monique Namusoke.jpg';
import Damon_Tweedy from '../../images/Customers/Damon Tweedy.jpg';


const ReviewsCarouselCollection = () => {
    return (
        <div className='md:w-250 h-90 mb-10 mx-auto'>
      <Swiper navigation={true} loop={true} autoplay={{ 
        delay: 5000 }} speed={1000} modules={[Navigation, Autoplay]} className='mySwiper'>
        <SwiperSlide><ReviewsCarousel image={Jessica_ketwaroo} image_alt="Jessica Ketwaroo image" Name="Jessica Ketwaroo" Title="Customer" Comment="Best meal I've had in a long time! Every dish was packed with flavor, and the portions were just right. The Fattoush Salad Cuisine was my absolute favorite. Highly recommend this place to anyone looking for a top-notch dining experience."/></SwiperSlide>
        <SwiperSlide><ReviewsCarousel image={Keith_Daniel} image_alt="Keith Daniel image" Name="Keith Daniel" Title="Student" Comment="From the moment we walked in, we were greeted with warmth. The place was cozy, the service was outstanding, and the food? Simply perfection. Can't wait to come back."/></SwiperSlide>
        <SwiperSlide><ReviewsCarousel image={Jessica_Margret} image_alt="Jessica Margret image" Name="Jessica Margret" Title="Student" Comment="The food came out quickly and tasted amazing. The restaurant had a nice, welcoming vibe. Highly recommend!"/></SwiperSlide>
        <SwiperSlide><ReviewsCarousel image={Simon_Chainbers} image_alt="Simon Chainbers image" Name="Simon Chainbers" Title="Software Engineer" Comment="The menu had so many great options, and I was blown away by how everything was cooked. From the drinks to the dessert, everything was spot on."/></SwiperSlide>
        <SwiperSlide><ReviewsCarousel image={Monique_Namusoke} image_alt="Monique Namusoke image" Name="Monique Namusoke" Title="Influencer" Comment="The restaurant was perfect for our date night and the food was outstanding. The Shish Kebab Barbecue was my favourite. 100% recommend this restaurant to anyone looking for a great meal and a date night."/></SwiperSlide>
        <SwiperSlide><ReviewsCarousel image={Damon_Tweedy} image_alt="Damon Tweedy image" Name="Damon Tweedy" Title="Bank Manager" Comment="The food was so flavorful and cooked perfectly. The service was friendly, and everything came out quickly. I will definetly be having my Lunch breaks from Celesti Restaurant,"/></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default ReviewsCarouselCollection;