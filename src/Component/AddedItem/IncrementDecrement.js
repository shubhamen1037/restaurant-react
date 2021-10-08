import React, {Component} from 'react'
import './AddedItem.css'
import Button from '../Button/Button'


class IncrementDecrement extends Component{

    constructor(props){
        super(props)
        this.state = {
            // counter: 1,
        }
    }


    render(){
        
        // const {counter} = this.state;
        const {item, incrementAndDecrement} = this.props;
        //  console.log(item.quantity, "addedItem");
        return <div className="set-quantity">
                       <Button className="plus-minus-button" onClick={incrementAndDecrement} type="decrement" text="-" data={item}/>
                       <span>{item.quantity}</span> 
                       <Button className="plus-minus-button" onClick={incrementAndDecrement} type="increment" text="+" data={item}/>
        </div>
    }
}

export default IncrementDecrement;