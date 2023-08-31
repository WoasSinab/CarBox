

const TopSeller = () => {
  return (
    <div className="bg-white py-24 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-slate-800 ">
          محبوب ترین برند های خودرو از نظر شما
        </h2>
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.bable-smartcities.eu/fileadmin/user_upload/ext/nd_pages/img/company/image/629_Mercedes-Benz_Group_AG.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/BMW_1963-1997_Logo.svg/640px-BMW_1963-1997_Logo.svg.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://hips.hearstapps.com/hmg-prod/images/nissan-brand-logo-1200x938-1594842850.jpg?crop=1.00xw:0.856xh;0.00173xw,0.0730xh&resize=980:*"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://seeklogo.com/images/T/toyota-logo-3A02221675-seeklogo.com.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default TopSeller