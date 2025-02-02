import work_in_progress from '../../images/icons/work-in-progress.png';
const Underconstruction = () => {
    return (
        <section>
            <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-5 px-5 py-30 md:py-40'>
                <div className='w-full md:w-100'>
                    <img className="w-full" src={work_in_progress} alt="Work in progress" />
                </div>
                <div>
                    <h3 className='font-bold text-2xl md:text-4xl mb-5'>This Page is still under construction!</h3>
                    <p>Check back soon for updates</p>
                </div>
            </div>
        </section>
    );
}

export default Underconstruction;