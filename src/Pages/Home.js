import Button from 'react-bootstrap/Button';
import React from 'react';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import Categories from '../Components/Home/Categories';
import Collection from '../Components/Home/Collection';
import NewArrival from '../Components/Home/NewArrival';
import HomeTop from '../Components/Home/HomeTop';


const Home = () => {
    return (
        <div>
            <HomeTop/>
            <FeaturedProducts/>
            <NewArrival/>
            <Collection/>
            <Categories/>
        </div>
    );
};

export default Home;