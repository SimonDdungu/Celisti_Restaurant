
const FeaturedMenuCard = (props) => {
    return (
        <div className="max-w-80 shadow-md pt-5 pb-10 px-5 bg-[#F6F5F2] rounded-2xl cursor-pointer">

            <div className="w-35 h-35 md:w-70  mx-auto mb-2 md:mb-5 ">
                <img className="w-full h-full object-contain" src={props.image} alt={props.image_alt} />
            </div>

            <div className="text-center">
                <h5 className="font-bold mb-3">{props.Title}</h5>
                <p>UGX {props.Price}</p>
            </div>
        </div>
    );
};

export default FeaturedMenuCard;