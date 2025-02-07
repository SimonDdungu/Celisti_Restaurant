

const BreakfastCard = (props) => {
    return (
        <div className='w-75 max-w-full mx-auto md:w-75 md:max-w-75 shadow-md pt-5 pb-7 px-5 rounded-2xl pointer-events-none border-2 border-b-4 border-green-800'>
            <div className='w-50 h-35 mx-auto mb-1 md:mb-3 '>
                <img className="w-full h-full object-contain" src={props.image} alt={props.img_alt} />
            </div>

            <div >
                <h6 className='text-center font-bold'>{props.Meal}</h6>
                <p className="text-center">UGX {props.Price}</p>
            </div>
        </div>
    );
};

export default BreakfastCard;