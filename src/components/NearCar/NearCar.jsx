import data from './Carsdata.js'

const NearCar = () => {
  return (
    <div className='flex flex-col gap-4 mb-8 '>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl'>جدیدترین ها در اطراف شما</h1>
        <div></div>
      </div>
      {/* Cars Sec  */}
      <div className='flex lg:flex-row max-md:flex-col text-slate-800 p-6 gap-5 '>
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

export default NearCar;
