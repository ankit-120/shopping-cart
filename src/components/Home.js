import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import { CartContext } from './Context';

const Home = () => {

    // const arr=[
    //     {id: '8a4668d2-0212-4a3d-b72d-91e938281034', name: 'Unbranded Soft Keyboard', price: '172.00', image: 'https://loremflickr.com/640/480?lock=7351898971570176'},
    //     {id: '44a6bfad-e542-4952-9084-ac2099796176', name: 'Small Cotton Salad', price: '31.00', image: 'https://picsum.photos/seed/3yTnzwKXD/640/480'},
    //     {id: '2910d318-dcd4-4140-bd0f-5ea50915e5c2', name: 'Gorgeous Rubber Car', price: '625.00', image: 'https://picsum.photos/seed/nzA4D/640/480'},
    //     {id: '523e8f69-f625-4b3c-94b3-d28f0fe95b85', name: 'Electronic Frozen Shoes', price: '35.00', image: 'https://picsum.photos/seed/5rwYZtoek/640/480'},
    //     {id: 'ec2c258a-0844-4e16-8577-9a145a53ea4c', name: 'Oriental Soft Soap', price: '59.00', image: 'https://loremflickr.com/640/480?lock=6576637372006400'},
    //     {id: 'b0d9a0fd-f728-40d2-a1eb-f63050864f71', name: 'Bespoke Granite Tuna', price: '717.00', image: 'https://loremflickr.com/640/480?lock=4737389870186496'},
    //     {id: 'c0b6b776-b5d8-487a-a154-9f707034c97f', name: 'Tasty Soft Chips', price: '372.00', image: 'https://loremflickr.com/640/480?lock=8579574700965888'},
    //     {id: 'af8627fa-33f8-49f2-a069-31679bb5784f', name: 'Electronic Cotton Chips', price: '360.00', image: 'https://picsum.photos/seed/QcJrgu/640/480'},
    //     {id: 'fe4bfca6-c57a-41bf-a162-7732ef7d3893', name: 'Rustic Plastic Chips', price: '324.00', image: 'https://picsum.photos/seed/Roorffiz/640/480'},
    //     {id: 'df79a4c1-4813-4b9f-92f6-75a8b3e42c6e', name: 'Refined Metal Table', price: '425.00', image: 'https://loremflickr.com/640/480?lock=7729205781463040'},
    //     {id: 'cd21945f-c087-45f6-bc34-1936b9eee857', name: 'Elegant Plastic Ball', price: '35.00', image: 'https://picsum.photos/seed/5uD1NTXZGh/640/480'}
    //     ]

    faker.seed(100);

    // const {state} = useContext(CartContext)
    // console.log(cart)

    const productsArray = [...Array(20)].map(()=>({
        id : faker.string.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.image.url()
    }));

    // console.log(productsArray)

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