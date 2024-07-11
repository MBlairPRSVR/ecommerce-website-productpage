import React from 'react'
import Banner from './Banner' // Assuming the Banner component is in the same directory as Home.jsx
import HomeCategory from './HomeCategory' // Assuming the HomeCategory component is in the same directory as Home.jsx
import CategoryShowCase from './CategoryShowCase' // Assuming the CategoryShowCase component is in the same directory as Home.jsx
import Register from './Register' // Assuming the Register component is in the same directory as Home.jsx
import LocationSpread from './LocationSpread' 
import AboutUs from "./AboutUs"// Assuming the LocationSpread component is in the same directory as Home.jsx
import AppSection from './AppSection'
import Sponsor from './Sponsor' // Assuming the AppSection component is in the same directory as Home.jsx

const Home = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShowCase />
        <Register />
        <LocationSpread />
        <AboutUs />
        <AppSection />
        <Sponsor />
    </div>
  )
}

export default Home