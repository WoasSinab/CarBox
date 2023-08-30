import data from "./Sellersdata"

const TopSeller = () => {
  return (
    <div className="bg-gray-100">
      <h1></h1>
      <p></p>
      <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 grid-rows-1">
      {data.map((item) => (
        <div key={item.id} className="flex flex-row justify-between mx-8 items-center text-right p-8 rounded-md my-4 bg-white shadow-sm">
          <img src={item.img} className=""/>
          <div className="flex flex-col gap-4 mx-2">
            <h1 className="sm:text-xl text-base font-medium text-slate-800">{item.Name}</h1>
            <p className="sm:text-sm text-sm text-gray-500">قیمت از {item.Price}</p>
          </div>
          <button className="text-violet-800 lg:block hidden">مشاهده خودرو ها</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default TopSeller