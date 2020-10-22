import Button from 'react-bootstrap/Button';
import React from 'react';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import Categories from '../Components/Home/Categories';
import Collection from '../Components/Home/Collection';
import NewArrival from '../Components/Home/NewArrival';


const Home = () => {
    return (
        <div>
            <FeaturedProducts/>
            <NewArrival/>
            <Collection/>
            <Categories/>
        </div>
    );
};

export default Home;