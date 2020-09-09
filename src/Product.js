import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';


function Product( {title,image,price,rating}) {
    const[state,dispatch] =useStateValue();

    const addToBasket = () => {
        //dispacth the itme into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            itme: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                </div>
            </div>
            <img
                src={image}
                alt={title}
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
