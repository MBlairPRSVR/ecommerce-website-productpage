import React, { Suspense, lazy } from 'react';

const Banner = lazy(() => import('./Banner'));
const HomeCategory = lazy(() => import('./HomeCategory'));
const CategoryShowCase = lazy(() => import('./CategoryShowCase'));
const Register = lazy(() => import('./Register'));
const LocationSpread = lazy(() => import('./LocationSpread'));
const AboutUs = lazy(() => import('./AboutUs'));
const AppSection = lazy(() => import('./AppSection'));
const Sponsor = lazy(() => import('./Sponsor'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <HomeCategory />
        <CategoryShowCase />
        <Register />
        <LocationSpread />
        <AboutUs />
        <AppSection />
        <Sponsor />
      </Suspense>
    </div>
  );
};

export default Home;
