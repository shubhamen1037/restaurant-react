import React, {Component} from 'react';
import Button from '../Button/Button';
import IncrementDecrement from '../AddedItem/IncrementDecrement';
import './FoodCard.css';


class FoodCard extends Component{
    
    render(){
        const {data:{itemName, quantity, originalPrice}, data, addToCart, incrementAndDecrement} = this.props;

        return <div >
            <div className="foodCard">
                <div className="">{itemName}</div>
                <div className='price'>
                    Price(Rs): <span >{originalPrice}</span>
                </div>
                {/* <div className="item-quantity">Qty: {quantity-1==0? 0 : quantity }</div> */}
                {quantity >= 1 ? <IncrementDecrement className="increment-decrement" incrementAndDecrement={incrementAndDecrement} item={data}/> : <Button className="add-button" text="Add" onClick={addToCart} data={data} />}
            </div>            
        </div>
    }
}

export default FoodCard;
