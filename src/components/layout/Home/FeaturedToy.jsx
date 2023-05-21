import React from 'react';

const FeaturedToy = () => {
    return (
        <div>
            <div className="carousel md:w-2/5 mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://toystorepakistan.pk/wp-content/uploads/2022/03/71HNOfmyryL._AC_SL1500_.jpg" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://media.gamestop.com/i/gamestop/11154394_ALT05/Hasbro-Marvel-Legends-Heist-Nebula-6-in-Action-Figure?$pdp$" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2F0B1272F1210C42DDB7AC6372BEF69605%2F824749576620c54acb998f62e94a0b4033de1bd1.jpg&w=828&q=75" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.pinimg.com/564x/0f/ac/62/0fac62f0c2e4fa7a244c2e3d6bc078d5.jpg" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2104/4636/Marvel_BlackPanther_Bust_01__11094.1680134577.jpg?c=1" className="w-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedToy;