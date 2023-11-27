import './App.css'
import LandingCarousel from './Components/LandingCarousel';
import LandingContent from './Components/LandingContent';
import NavBar from './Components/Layouts/NavBar'

function App() {

  return (
    <>
      {/* NavBar */}
      <NavBar/>
      {/* Carousel */}
      <LandingCarousel/>
      {/* Content */}
      <LandingContent/>
    </>
  )
}

export default App;
