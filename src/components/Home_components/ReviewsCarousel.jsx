import Jessica_ketwaroo from '../../images/Customers/Jessica_Ketwaroo.png';
const ReviewsCarousel = (props) => {
    return (
        <div className='w-73 h-100 md:h-90 md:w-200 mx-auto flex flex-col items-center gap-5 px-5 md:px-20 pt-10 md:py-13  bg-(--blue-green) text-white rounded-xl'>
            <div className='w-30 h-30 rounded-full overflow-hidden shadow-xl'>
                <img className='w-full h-full object-cover' src={props.image} alt={props.image_alt} />
            </div>

            <div className='text-center'>
                <h5 className='font-bold text-[#dddddd]'>{props.Name}</h5>
                <h6 className='mb-2 text-sm font-semibold text-[#9a9a9a]'>- {props.Title} -</h6>
                <p className='text-sm md:text-base'>"{props.Comment}"</p>
            </div>
        </div>
    );
};

export default ReviewsCarousel;