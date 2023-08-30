const Hero = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-8 sm:gap-12 gap-8'>
        {/* Text */}
        <p className='md:text-lg text-gray-500'>پیشنهاد امروز</p>
        {/* Heading */}
        <h1 className='text-slate-800 lg:text-5xl sm:text-3xl md:text-4xl text-2xl font-semibold'>KMC J7 2023</h1>
        {/* Buttons */}
        <div className='flex flex-row sm:gap-x-8 gap-x-2 mb-8'>
          <button href='#' className='group relative inline-block overflow-hidden rounded-sm border border-gray-100 bg-gray-200  px-6 p-4 text-xs md:text-base font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white'>
            {/* Button border animation */}
            <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
            <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
            مشخصات کلی
          </button>
          <button className='p-4 px-6 bg-violet-700 font- text-white rounded-sm hover:bg-violet-900  transition duration-300 text-xs md:text-base'>ویدیو بررسی</button>
        </div>
        {/* Image */}
        <div className='flex items-center justify-center mx-4'>
          <img className='lg:w-2/4 md:w-3/4' src='https://s6.uupload.ir/files/car-jac-kmc-j7_copy_t8yh.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
