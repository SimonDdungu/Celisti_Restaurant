import React, { useEffect, useState } from 'react';

const ReservationForm = () => {

    const [PhoneValidation, setPhoneValidation] = useState("");
    const [error, setError] = useState("");

    const preventSubmission = (e) => {
        e.preventDefault();

        if(PhoneValidation.length < 10){
            setError("Please Enter a Valid Phone Number");
        }else{
            setError("");
            setPhoneValidation("");
            e.target.reset();
        }

    }



    return (
        <section className="px-5 lg:px-10 xl:px-70 pt-3 md:pt-10 pb-10">

        <div className='container mx-auto'>
            <form onSubmit={preventSubmission} className="border-2 border-t-7 border-[#153B44] container mx-auto bg-white shadow-md rounded-2xl py-10 px-5 md:px-10 flex flex-col gap-5">
            <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Reservation Form</h3>


                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <div className='flex flex-col basis-full'>
                        <label htmlFor="First_Name" className="block w-max text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input type="text" className="shadow rounded w-full py-1 md:py-2 px-3 outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                    <div className='flex flex-col basis-full relative'>
                        {error && <span style={{ color: "red" }} className='absolute text-xs lg:text-sm -top-4 lg:-top-7 left-0'>{error}!</span>}
                        <label htmlFor="Last_Name" className="block w-max text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                        <input type="tel" value={PhoneValidation} onChange={(e) => {setPhoneValidation(e.target.value); setError("")}} maxLength={16} onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9+]/g, '')}} className="shadow rounded w-full py-1 md:py-2 px-3 outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <div className='flex flex-col basis-full'>
                        <label htmlFor="Email" className="block w-max text-gray-700 font-bold text-sm mb-2">Email</label>
                        <input type="email" className="shadow py-1 md:py-2 px-3 rounded w-full outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                    <div className='flex flex-col basis-full'>
                        <label htmlFor="date" className="block w-max text-gray-700 font-bold text-sm mb-2">Booking Date</label>
                        <input type="date" className="shadow py-1 md:py-2 px-3 rounded w-full outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <div className='flex flex-col basis-full'>
                        <label htmlFor="time" className="block w-max text-gray-700 font-bold text-sm mb-2">Booking Time</label>
                        <input type="time" className="shadow py-1 md:py-2 px-3 rounded w-full outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                    <div className='flex flex-col basis-full'>
                        <label htmlFor="guests" className="block w-max text-gray-700 font-bold text-sm mb-2">Number of Guests</label>
                        <input type="text" maxLength={3} inputMode='numeric' onInput={(e) => {e.target.value = e.target.value.replace(/[^0-9]/g, '')}} className="shadow py-1 md:py-2 px-3 rounded w-full  outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                </div>

                <div>
                    <label htmlFor="Message" className="block w-max text-gray-700 font-bold text-sm mb-2">Any Special Requests</label>
                    <textarea id="Message" className="shadow py-1 md:py-2 px-3 rounded w-full h-30 resize-none outline-1 focus:outline-2 focus:outline-(--lime-green)"/>
                </div>

                <button className=" mt-7 rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out cursor-pointer">Submit</button>
                
                </form>
        </div>

        </section>
    );
};

export default ReservationForm;