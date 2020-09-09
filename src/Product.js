import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';
import Subtotal from './Subtotal';


function Product( {id,title,image,price,rating}) {
    const[{basket},dispatch] =useStateValue();
    //console.log("this is the basket >>>",basket)

    const addToBasket = () => {
        //dispacth the itme into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id:id,
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
