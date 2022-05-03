import React from "react";

function Tiles({title, paragraph, image, description, children}) {
    if (image) {
        return (
            <section>
                <img src={image} alt={description}/>
            </section>
        )
    }
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Tiles;