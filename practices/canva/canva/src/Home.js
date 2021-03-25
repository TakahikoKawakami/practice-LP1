import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Calousel from './Carousel';
import Header from './Header';
import NewCard from './Card/NewCard';

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
                    <Calousel swiperId={'newCards'}>
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                    </Calousel>
                </section>

                <section>
                    <div className="section__header">
                        <h2>あなたのデザイン</h2>
                        <Link to="/design">すべて表示</Link>
                    </div>
                    <Calousel swiperId={'yourDesign'} navigation={true}>
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                        <NewCard category="instagram" />
                        <NewCard category="animation_sns" />
                        <NewCard category="card" />
                        <NewCard category="presentation" />
                    </Calousel>
                </section>

            </div>
        )
    }
}

export default Home;