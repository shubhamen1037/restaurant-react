import React, { Component } from 'react'
import Header from './Component/Header/Header'
import FoodCard from './Component/FoodCard/FoodCard'
import AddedItem from './Component/AddedItem/AddedItem'
import Button from './Component/Button/Button'
import {FoodList} from './data.json'
import './App.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      foodList:[],
      addedItemList:[],
      totalPrice: 0,
    }
  }

  addToCart=(type, data)=> {
    const {addedItemList} = this.state;
    data.quantity = 1;
    this.setState({addedItemList: [...addedItemList, data]});
  }
    // console.log(data)
    // let index = addedItemList.findIndex(foodData => foodData.itemName === data.itemName);
    // let isItemAdded = addedItemList.some(foodData => foodData.itemName===data.itemName);
    // console.log(isItemAdded)
    // addedItemList.splice(index, 1, addedItemList[index]);
    // this.setState({addedItemList: addedItemList});
    // console.log(data, "appadd")

    // this.setState({addedItemList:[...this.state.addedItemList, data]})      
    
   
    // // let index = addedItemList.findIndex(foodData => foodData.itemName === data.itemName);
    // if(addedItemList.length > 0 ){

    //   const oldPrice = data.price ;
    //   const newPrice = oldPrice + data.originalPrice;
    //   // console.log(newPrice, "appadd");
    //   addedItemList[index].price = newPrice;
      
    //   addedItemList[index].quantity = oldQuantity+1;
    //   addedItemList.splice(index, 1, addedItemList[index]);

    //   // console.log(index, oldQuantity, "appadd")

    // }
    // addedItemList[index].quantity = updatedQuantity;

    // if(result==true){

    // }
  
    //  this.totalPriceCount();

    // console.log(data, "appchangequantity")
    
    
    // let originalPrice = data.data.originalPrice;
    // let updatedPrice = originalPrice*updatedQuantity;
    // console.log(updatedPrice, "app")
    // this.totalPriceCount();
    
    
    // this.totalPriceCount();
    
    incrementAndDecrement=(type, data)=>{
      const {addedItemList} = this.state;
      let isDataExist = addedItemList.some(foodData => foodData.id === data.id);
      if (type==="increment" && isDataExist){
        const quantity = data.quantity + 1
        this.changeQuantity({type, data, quantity})
      }
      if(type==="decrement" && isDataExist){
        const quantity = data.quantity > 0 ? data.quantity - 1 : 0   // here we can also use if condition but above method is better 
        this.changeQuantity({type, data, quantity})
      }     
    }


    
    changeQuantity = (data) => {
      let updatedQuantity = data.quantity;
      const {addedItemList} = this.state;
      let index = addedItemList.findIndex(foodData => foodData.id === data.data.id);
      addedItemList[index].quantity = updatedQuantity;
      addedItemList[index].price = data.data.originalPrice*updatedQuantity;
      addedItemList.splice(index, 1, addedItemList[index]);
      if(addedItemList[index].quantity === 0) {
        addedItemList.splice(index, 1); // to remove complete data on that perticular index
      }
      
      this.setState({addedItemList: addedItemList});
    }


    
    updatedItemAfterCancel=(data)=>{
      const {addedItemList} = this.state;
      let index = addedItemList.findIndex(foodData => foodData.itemName === data.data.itemName);
      addedItemList[index].quantity = 0;
      let oldPrice = addedItemList[index].originalPrice;
      addedItemList[index].price = oldPrice;
      let newAddedItemList = addedItemList.filter(foodData => foodData.itemName !== data.data.itemName);
      
      this.setState({addedItemList: newAddedItemList});
    }
    // this.setState({counter:newQuantity})
    
    // totalPriceCount = ()=>{
      
      //   const {addedItemList} = this.state;
      //   let {totalPrice} = this.state;
      //   addedItemList.map(i => {
        //     totalPrice += parseInt(i.price);
        //     this.setState({totalPrice: totalPrice})
        //   })
        // console.log(totalPrice)
        // }
        // alert=()=>{
          //     alert('ss');
          // }
          
  render(){
    const {addedItemList} =  this.state;
    let {totalPrice} = this.state;
    totalPrice = addedItemList.map(item => item.price).reduce((prev, next) => prev + next , 0);
    console.log(addedItemList)
    // this.setState({totalPrice: resultPrice})

      return <div>
        <div> 
          <Header/>
        </div>

        <div className="content">
            <div className="food-menu">
              {FoodList.map((item, idx) => <FoodCard key={idx} data={item} addToCart={this.addToCart} incrementAndDecrement={this.incrementAndDecrement}/> )}             
            </div>
            <div className="your-cart">
              <h1>Your Cart</h1>
              <div className='added-item-list'>
                {addedItemList.map((item, idx) => <AddedItem key={idx} item={item}  updatedItem={this.updatedItemAfterCancel} incrementAndDecrement={this.incrementAndDecrement}/>)}
              </div>
              <div className="total-price">Total Price:<span>{totalPrice}</span></div>
              <Button className="buyNow-button" text="Buy Now" />
            </div>               
        </div> 
      </div>
          
  }
}
 


export default App;

// Map, foreach, some, every, findindex, filter
