import React from "react";
import bag1 from '../assets/bag_1.png'
import bag2 from '../assets/bag_2.png';
import bag3 from '../assets/bag_3.png';
import bag4 from '../assets/bag_4.png';

function Products({label, image, name, price}) {
    let imageName = null;
    switch (image) {
        case "bag1":
            imageName = bag1;
            break
        case "bag2":
            imageName = bag2;
            break
        case "bag3":
            imageName = bag3;
            break
        case "bag4":
            imageName = bag4;
            break
    }
    return (
        <article>
            <span>{label}</span>
            <img src={imageName} alt="bag" />
            <p>{name}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Products;