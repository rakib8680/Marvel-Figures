import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Gallery = () => {

    const images = [
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2407/5538/CAP_AMERICA_SELECT_2__99284.1681745340.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2065/4568/RGB_0398__83311.1667256346.jpg?c=1?imbypass=on",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2329/5267/Marvel_MrFantastic_AF_02__06759.1673366096.jpg?c=1?imbypass=on",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2104/4636/Marvel_BlackPanther_Bust_01__11094.1680134577.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2102/4679/Marvel_ScarletWitch_Gallery_01__73202.1668535091.jpg?c=1",
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2268/5045/Marvel_CaptAmericaMjolnir_Bust_01__96904.1663299040.jpg?c=1",
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1643639144-spiderman-1643639136.jpg?crop=1xw:1xh;center,top&resize=980:*",     
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/1280x1280/products/2061/4550/RGB_9589__68568.1679318494.jpg?c=1?imbypass=on",    
        "https://cdn11.bigcommerce.com/s-csqcv5l47s/images/stencil/804x804/products/2270/5115/Marvel_Skrull_AF_01__53431.1678236916.jpg?c=1",
        
        "",
        "https://www.blacksbricks.de/images/product_images/original_images/shfnebula81.jpg",    
        "https://cf.shopee.ph/file/792e926aecbdd281477e6f90c4a787cc",

    ]
    return (
        <div className='md:w-4/6 mx-auto '>
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 4, 750: 4, 900: 4 }} >
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img
                            className=''
                            key={i}
                            src={image}
                            style={{ width: "auto", display: "block" }}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;