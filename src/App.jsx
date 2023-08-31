// import Auctions from "./components/Auctions/Auctions"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import NearCar from "./components/NearCar/NearCar"
import SearchField from "./components/SearchField/SearchField"
import TopSeller from "./components/TopSeller/TopSeller"


function App() {

  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <SearchField />
      <NearCar />
      <TopSeller />
      {/* <Auctions /> */}
    </div>
  )
}

export default App
