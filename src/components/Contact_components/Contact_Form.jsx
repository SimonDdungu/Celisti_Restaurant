

const ContactForm = () => {
    return (
        <section className="px-5 lg:px-60 pb-10 md:pb-20">

            <form className="container mx-auto bg-white shadow-md rounded-2xl py-10 px-5 md:px-20 flex flex-col gap-5 lg:gap-2">
            <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Send Us A Message</h3>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                    <div>
                        <label htmlFor="First_Name" className="block w-max text-gray-700 text-sm font-bold mb-2">First Name</label>
                        <input type="text" className="shadow rounded w-full md:w-100 md:max-w-100 py-1 md:py-2 px-3 outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                    <div>
                        <label htmlFor="Last_Name" className="block w-max text-gray-700 text-sm font-bold mb-2">Last Name</label>
                        <input type="text" className="shadow rounded w-full md:w-100 md:max-w-100 py-1 md:py-2 px-3 outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="Email" className="block w-max text-gray-700 font-bold text-sm mb-2">Email</label>
                    <input type="email" className="shadow py-1 md:py-2 px-3 rounded w-full md:w-100 md:max-w-100 outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                </div>
                <div>
                    <label htmlFor="Message" className="block w-max text-gray-700 font-bold text-sm mb-2">Message</label>
                    <textarea id="Message" className="shadow py-1 md:py-2 px-3 rounded w-full h-50 resize-none outline-1 focus:outline-2 focus:outline-(--lime-green)" required/>
                </div>

                <button className="rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out cursor-pointer">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;