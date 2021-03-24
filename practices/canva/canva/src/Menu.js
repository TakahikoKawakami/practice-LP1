
import React, { Component } from 'react';
import Calousel from './Carousel';
import Header from './Header';

import './Home.css';

class Menu extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Calousel></Calousel>
                <div className="top">
                    <h2>ようこそ...</h2>
                    <p>「失敗を通して人は本当の意味で成長できる」ポーラ・シャー</p>

                </div>
            </div>
        )
    }
}

export default Menu;