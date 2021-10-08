import React, {Component} from 'react'
import './AddedItem.css'
import Button from '../Button/Button'
import IncrementDecrement from './IncrementDecrement'


class AddedItem extends Component{

    constructor(props){
        super(props)
        this.state = {
        }
    }
            // counter: 1,


    cancelItem=(type, data)=> {
        const {updatedItem}= this.props;
        updatedItem({data:data})
    }
        // console.log(data, "cancel addedItem");
                
    
    render(){
        
        // const {counter} = this.state;
        const {item, incrementAndDecrement} = this.props;

        //  console.log(item.quantity, "addedItem");
        return <div className="added-item">
                   <div className="item-detail">{item.itemName}<div>  Price:{item.price}</div></div>
                   <IncrementDecrement incrementAndDecrement={incrementAndDecrement} item={item}/>
                   <Button className="cancel-button" text="x" onClick={this.cancelItem} data={item}/>
                   
               </div>
    }
}

export default AddedItem;