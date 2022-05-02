import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => {
    //     //    setCategories([...categories,'nuevo']);
    //     setCategories(cats => [...categories, 'nuevo'] );
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>

        </Fragment>
    );
}

export default GifExpertApp;

