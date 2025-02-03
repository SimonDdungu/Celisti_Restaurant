

const ReviewsCarousel = (props) => {
    return (
        <div className='w-73 md:w-150 h-100 lg:h-90 lg:w-200 mx-auto flex flex-col items-center gap-5 px-5 lg:px-20 pt-10 lg:py-13  bg-(--blue-green) text-white rounded-xl shadow-xs'>
            <div className='w-30 h-30 rounded-full overflow-hidden shadow-xl'>
                <img className='w-full h-full object-cover' src={props.image} alt={props.image_alt} />
            </div>

            <div className='text-center'>
                <h5 className='font-bold text-[#dddddd]'>{props.Name}</h5>
                <h6 className='mb-2 text-sm font-semibold text-[#9a9a9a]'>- {props.Title} -</h6>
                <p className="text-sm md:text-base relative md:pr-2 md:pl-2
                
                before:absolute before:-top-1 md:before:-top-3 before:-left-4  lg:before:-left-8 before:bg-[url(/images/icons/close_quote.svg)]  before:bg-cover before:block  before:bg-center before:bg-no-repeat before:w-4 md:before:w-6 md:before:h-6 before:h-4 
                
                after:absolute after:bottom-0 md:after:-bottom-2 lg:after:-bottom-1 after:-right-4  lg:after:-right-8 after:bg-[url(/images/icons/open_quote.svg)]  after:bg-cover after:block after:bg-center after:bg-no-repeat after:w-4 md:after:w-6 md:after:h-6 after:h-4 
                
                
                ">{props.Comment}</p>
            </div>
        </div>
    );
};

export default ReviewsCarousel;