import { useState } from 'react';
import Header from '../Components/Header.tsx'
import Hero from '../Components/Hero.tsx'
import Footer from '../Components/Footer.tsx'
import About from '../Components/About.tsx';
import Categories from '../Components/Categories.tsx';
import FeaturedProducts from '../Components/FeaturedProducts.tsx';
import GreatCreators from '../Components/GreatCreators.tsx';
import PaymentMethod from '../Components/PaymentMethod.tsx';
import SearchArea from '../Components/SearchArea.tsx'


const MarketPlace = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div>
            <Header />
            <Hero />
            <About />
            <SearchArea
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <Categories />
            <FeaturedProducts searchQuery={searchQuery} selectedCategory={selectedCategory} />
            <GreatCreators />
            <PaymentMethod />
            <Footer />
        </div>
    )
}

export default MarketPlace