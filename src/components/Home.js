import React, { useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';

const Home = () => {

    faker.seed(100);

    const productsArray = [...Array(20)].map(()=>({
        id : faker.string.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.image.url()
    }));

    const [product] = useState(productsArray)

    return (
        <div>
            <div className="container">
                <div className="row mb-3 ">
                    {
                        product.map((prod)=>(
                            <div className="col-lg-3 col-md-4 col-12" key={prod.id}>
                                <SingleProduct prod={prod}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home