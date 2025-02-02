import Error_image from '../../images/icons/404.png';

const Error404 = () => {
    return (
        <section>
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 px-5 py-35 md:py-40'>
                <div className='w-70 md:w-100'>
                    <img className="w-full" src={Error_image} alt="404 Page Not Found" />
                </div>
                <div>
                    <h3 className='font-bold text-2xl md:text-4xl mb-5'>404! Page Not Found</h3>
                    <p>It's not your fault, it's the Government.</p>
                </div>
            </div>
        </section>
    );
};

export default Error404;