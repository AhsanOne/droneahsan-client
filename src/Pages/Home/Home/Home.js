import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Reviews from '../Reviews/Reviews'
import ShopStoreBanner from '../ShopStoreBanner/ShopStoreBanner'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShopStoreBanner></ShopStoreBanner>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    )
}

export default Home
