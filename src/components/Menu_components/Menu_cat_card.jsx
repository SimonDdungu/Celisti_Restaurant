import { Link } from "react-router-dom";

const MenuCatCard = (props) => {
    return (
        <div className='w-75 max-w-full mx-auto md:w-75 md:max-w-75 shadow-md pt-5 pb-7 px-5 rounded-2xl cursor-pointer border-2 border-b-4 border-green-800'>
            <div className='w-50 h-35 mx-auto mb-1 md:mb-3 '>
                <img className="w-full h-full object-contain" src={props.image} alt={props.img_alt} />
            </div>

            <div>
                <h5 className='text-center font-bold'>{props.category}</h5>
                <p className="text-sm mb-7">{props.description}</p>
                <Link to ={props.link} className="block w-max mx-auto rounded-full bg-[#153B44] px-5 py-2 text-white hover:bg-(--dark-green) transition-all ease-in-out">Explore</Link>
            </div>
        </div>
    );
};

export default MenuCatCard;