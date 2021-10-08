import React, {Component} from 'react'
import './Header.css'

class Header extends Component{

    render(){

        return  <div className="header">
            <img src="./images.png" alt="test"/>
            <div className="header-heading">
                Zoop<span>Taste</span><sup>"The taste of india"</sup>
            </div>
        </div>
    }
}

export default Header;