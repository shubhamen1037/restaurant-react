import React, {Component} from 'react'


class Button extends Component{

    constructor(props){
        super()
    }

    render(){

        const { text, className, onClick, type, data }= this.props
        // console.log(onClick)
        return <div>
            <button className={className} onClick={()=>onClick(type, data)}>{text}</button>
        </div>
    }
}

export default Button;