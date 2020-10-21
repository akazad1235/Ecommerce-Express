import Button from 'react-bootstrap/Button';
import React from 'react';
import FeaturedProducts from '../Components/Home/FeaturedProducts';
import Categories from '../Components/Home/Categories';


const Home = () => {
    return (
        <div>
            <FeaturedProducts></FeaturedProducts>
            <Categories></Categories>/
        </div>
    );
};

export default Home;