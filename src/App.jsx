import Hero from "./components/Hero/Hero"
import NearCar from "./components/NearCar/NearCar"
import SearchField from "./components/SearchField/SearchField"


function App() {

  return (
    <div className="container mx-auto">
      <Hero />
      <SearchField />
      <NearCar />
    </div>
  )
}

export default App
