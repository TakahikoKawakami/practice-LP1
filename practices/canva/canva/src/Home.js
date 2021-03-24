import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calousel from './Carousel';
import Header from './Header';

import './Home.css';

class Home extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className="top">
                    <h2>ようこそ...</h2>
                    <p>「失敗を通して人は本当の意味で成長できる」ポーラ・シャー</p>
                </div>
                <section>
                    <div className="section__header">
                        <h2>デザインを作成</h2>
                    </div>
                    <Calousel>
                        <p>slide1</p>
                        <p>slide2</p>
                        <p>slide3</p>
                        <p>slide4</p>
                    </Calousel>
                </section>

                <section>
                    <div className="section__header">
                        <h2>あなたのデザイン</h2>
                        <Link to="/design">すべて表示</Link>
                    </div>
                    {/* <Calousel/> */}
                </section>

            </div>
        )
    }
}

export default Home;