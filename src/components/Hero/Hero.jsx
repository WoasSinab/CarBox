const Hero = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center my-8 gap-12'>
        <p className='md:text-lg text-gray-500'>پیشنهاد امروز</p>
        <h1 className='text-slate-800 md:text-5xl font-semibold'>KMC J7 2023</h1>
        <div className='flex flex-row gap-x-8'>
          <button href='#' className='group relative inline-block overflow-hidden rounded-sm border border-gray-100 bg-gray-200  px-6 p-4 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white'>
            <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
            <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full'></span>
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full'></span>
            مشخصات کلی
          </button>
          <button className='p-4 px-6 bg-violet-700 text-white rounded-sm hover:bg-violet-900  transition duration-300'>ویدیو بررسی</button>
        </div>
        <div className='flex items-center justify-center'>
          <img className='md:w-2/4' src='https://s6.uupload.ir/files/car-jac-kmc-j7_copy_t8yh.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
