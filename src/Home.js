import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className="homeimage"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""/>
                <div className="home__row">
                    <Product 
                    id="49538094"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                    price={548.42}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    rating={4}
                    />
                    <Product
                    id="11199956"
                    title="Tablet Stand Adjustable, Lamicall Tablet Stand : Desktop Stand Holder Dock Compatible with Tablet Such as iPad Pro 9.7, 10.5,12.9 Air Mini 4 3 2, Kindle, Nexus, Tab, E-Reader (4-13'') - Silver"
                    price={22}
                    image="https://images-na.ssl-images-amazon.com/images/I/61pTU2C19DL._AC_SL1300_.jpg"
                    rating={3}
                    />

                </div>
                <div className="home__row">
                    <Product
                    id="12321341"
                    title="Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR"
                    price={7.99}
                   image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
                   rating={2}
                   />
                    <Product
                        id="456789"
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                        rating={5}
                    />
                    <Product
                    id="56744489"
                    title="Plugable USB 3.0 Universal Laptop Docking Station Dual Monitor for Windows (Dual Video: HDMI and DVI/VGA/HDMI, Gigabit Ethernet, Audio, 6 USB Ports)"
                    price={94}
                    image="https://images-na.ssl-images-amazon.com/images/I/71YmvB%2BhVJL._AC_SL1500_.jpg"
                    rating={5}
                    />

                </div>
                <div className="home__row">
                <Product 
                id="1234566"
                title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA.."
                price="359.67"
                image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                rating={4}

                />
                <Product
               id="12311213"
                title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
                price={56.63}
                image="https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
                rating={4}
                  />

                 </div>
            </div>
            
        </div>
    )
}

export default Home
