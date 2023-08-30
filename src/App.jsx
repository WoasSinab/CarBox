import Hero from "./components/Hero/Hero"
import NearCar from "./components/NearCar/NearCar"
import SearchField from "./components/SearchField/SearchField"
import TopSeller from "./components/TopSeller/TopSeller"


function App() {

  return (
    <div className="container mx-auto">
      <Hero />
      <SearchField />
      <NearCar />
      <TopSeller />
    </div>
  )
}

export default App
