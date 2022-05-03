import React from 'react';
import './App.css';
import Buttons from "./components/Buttons";
import Products from "./components/Product";
import Tiles from "./components/Tile";
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Buttons
                    buttonText="to the collection"
                />
                <Buttons
                    buttonText="shop all bags"
                />
                <Buttons
                    buttonText="pre-orders"
                    disabled="true"
                />
            </nav>
            <main>
                <Products
                    label="Best seller"
                    image="bag1"
                    name="The handy bag"
                    price="€400,-"
                />
                <Products
                    label="Best seller"
                    image="bag2"
                    name="The stylish bag"
                    price="€250,-"
                />
                <Products
                    label="New collection"
                    image="bag3"
                    name="The simple bag"
                    price="€300,-"
                />
                <Products
                    label="New collection"
                    image="bag4"
                    name="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tiles
                    title="The brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consectetur ex id
                        ipsum, necessitatibus perferendis qui quibusdam temporibus. Ab assumenda at atque doloremque
                        doloribus inventore mollitia officiis perferendis, repudiandae tempore! Alias autem eligendi
                        enim fugit incidunt maxime modi non numquam omnis qui quidem reiciendis tenetur, unde. Facere
                        temporibus, voluptatum?</p>
                </Tiles>
                <Tiles
                    image={brand}
                    description="brand"
                />
                <Tiles
                    image={ourStory}
                    description="our-story"
                />
                <Tiles
                    title="brand"
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facilis ratione rem
                        repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur cum error esse
                        excepturi magnam magni modi non, omnis voluptate!</p>
                </Tiles>
            </footer>
        </>
    );
}

export default App;