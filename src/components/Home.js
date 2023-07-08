import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './Home.css'
import Filter from './Filter';
import { CartContext } from './Context';


const Home = () => {

    faker.seed(100);
    const { filterState: { byStock, byFastDelivery, byRating, searchQuerry, sort } } = useContext(CartContext);

    const productsArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }));

    const [product] = useState(productsArray)

    const manipulateProduct = () => {
        let sortedProd = product;

        if (sort) {
            sortedProd = sortedProd.sort((a, b) => {
                return sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
            })
        }

        if (!byStock) {
            sortedProd = sortedProd.filter((prod) => prod.inStock)
        }

        if (byFastDelivery) {
            sortedProd = sortedProd.filter((prod) => prod.fastDelivery)
        }

        if (byRating) {
            sortedProd = sortedProd.filter((prod) => prod.ratings > byRating)
        }

        if (searchQuerry) {
            sortedProd = sortedProd.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuerry)
                || prod.name.includes(searchQuerry)
            )
        }

        return sortedProd;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row home-main-div">
                    <div className="col-sm-3 col-4 left-div p-sm-2 p-0 py-1">
                        <div className='filter-div bg-dark'>
                            <Filter prod={product} />
                        </div>
                    </div>
                    <div className="col-sm-9 col-8 right-div">
                        <div className="row mb-3 ">
                            {
                                manipulateProduct().map((prod, i) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={prod.id + i}>
                                        <SingleProduct prod={prod} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home