import {Link} from 'react-router-dom';
import waitress from '../../images/Pictures/waitress.jpg'

const HomeReservations = () => {
    return (
        <section>

        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between gap-5 py-20 px-5 md:px-20 ">
            <div className='max-w-100 md:w-550 md:max-w-550 rounded-lg overflow-hidden shadow-2xl'>
                <img className="w-full object-cover" src={waitress} alt="Our loved Waitress image" />
            </div>

            <div>
                <h5 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-7">Your Table Awaits</h5>
                <p className="mb-5">Great food deserves great company and we'd love to have you! Whether you're planning a romantic dinner, a family gathering or a casual night out, booking your table ensures you have the perfect spot waiting for you. Skip the wait, relax and enjoy a seamless dining experience at Celesti Restaurant.</p>
                <p className='mb-5 md:mb-10'>We recommend making a reservation in advance, especially during weekends and peak hours. </p>
                <Link to ="/under-construction" className="block w-max mx-auto rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out">Book a Table</Link>
            </div>
        </div>

        </section>
    );
};

export default HomeReservations;