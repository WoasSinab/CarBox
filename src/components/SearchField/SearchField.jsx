const SearchField = () => {
  return (
    <div className='my-24 flex justify-center items-center flex-col gap-y-8 text-2xl'>
      <h1 className="text-xl text-slate-800 my-8 font-semibold">دنبال چ ماشینی میگردی؟</h1>
      <div className='flex gap-4 md:flex-row flex-col w-4/5 lg:justify-center lg:items-center'>
        <button className='p-4 px-6 bg-violet-700 font- text-white rounded-sm hover:bg-violet-900  transition duration-300 text-xs md:text-base'>جستجو</button>
        <input type='text' className='py-3 px-4 block rounded-md text-sm border border-gray-300 sm:p-5' placeholder='کشور سازنده' />
        <input type='text' className='py-3 px-4 block rounded-md text-sm border border-gray-300 sm:p-5' placeholder='سال تولید' />
        <input type='text' className='py-3 px-4 block rounded-md text-sm border border-gray-300 sm:p-5' placeholder='نام خودرو' />
      </div>
    </div>
  );
};

export default SearchField;
