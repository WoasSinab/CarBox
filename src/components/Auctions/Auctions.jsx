import data from "./AuctionData";

const Auctions = () => {
  return (
    <div className='mx-8'>
      <div className='flex flex-row-reverse justify-between my-8 mt-16'>
        <div className="flex flex-row gap-1">
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-violet-500'></span>
          </span>
          <h1 className='text-2xl text-slate-800'>مزایده های فعال امروز</h1>
        </div>
        <a href='#' className='flex flex-row-reverse gap-2'>
          <span className='text-violet-600'>مشاهده همه</span>
          <span className="">
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 text-violet-600'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18' />
            </svg>
          </span>
        </a>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {data.map((item) => (
          <div className='flex flex-col shadow-md rounded-md text-right' key={item.id}>
            <img src={item.img} className='w-full px-4 mt-8 mb-4' />
            <div className='px-4'>
              <h1 className='text-xl font-bold mb-2'>{item.Name}</h1>
              <p className='text-gray-700 mb-4'>{item.Miles} کیلومتر</p>
              <h1 className='text-base font-bold mb-2'>{item.Brand}</h1>
              <div className='flex justify-between my-6 font-semibold '>
                <button className='py-2 px-4 bg-gray-200 text-gray-500 rounded-md'>{item.Discount}</button>
                <button className='py-2 px-4 bg-violet-400/30 rounded-md text-violet-900'>{item.Price}</button>
                {/* End  */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;
