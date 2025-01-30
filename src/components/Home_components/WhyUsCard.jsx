import Chef from "../../images/icons/chef.png";

const WhyUsCard = (props) => {

    return(
        <div className="max-w-80 shadow-md py-10 px-5 bg-white rounded-2xl pointer-events-none">

            <div className="rounded-full w-30 mx-auto mb-5 border-5 border-(--lime-green) p-5 ">
                <img className="w-full" src={props.image} alt={props.image_alt} />
            </div>

            <div className="text-center">
                <h5 className="font-bold mb-3">{props.Title}</h5>
                <p className="text-sm">{props.Description}</p>
            </div>
        </div>
    );
}
export default WhyUsCard;