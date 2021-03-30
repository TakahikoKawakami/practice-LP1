import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Calousel from './Carousel';
import Header from './Header';
import Card from './Card/Card';

import './Home.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            "view": [
                {
                    "category": "yourDesign",
                    "title": "あなたのデザイン",
                    "cardType": "yourDesign",
                    "contents": [
                        {
                            "category": "yourDesign",
                            "image": "https://placeimg.com/300/300/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/300/400/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/300/500/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/400/300/any",
                        },
                        {
                            "category": "yourDesign",
                            "image": "https://placeimg.com/500/300/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/400/400/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/400/500/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/400/600/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/500/400/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/600/400/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/500/500/any",
                        },
                        {
                            "category": 'yourDesign',
                            "image": "https://placeimg.com/500/600/any",
                        },
                    ]
                },
                {
                    "category": "InstagramTemplate",
                    "title": "Instagramの投稿",
                    "cardType": "InstagramTemplate",
                    "contents": [
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/300/300/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/300/400/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/300/500/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/400/300/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/500/300/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/400/400/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/400/500/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/400/600/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/500/400/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/600/400/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/500/500/any",
                        },
                        {
                            "category": 'InstagramTemplate',
                            "image": "https://placeimg.com/500/600/any",
                        },
                    ]
                },
            ]
        };
        // this.addTodo = this.addTodo.bind(this);
    }

    loadSections(start, end) {
        const result = this.state.view.map((item, id) => {
            return (
                <section key={"section" + id}>
                    <div key={'section__header' + id} className="section__header">
                        <h2>{item.title}</h2>
                        <Link to="/design">すべて表示</Link>
                    </div>
                    <Calousel key={'calousel' + id} swiperId={item.category} navigation={true}>
                    {
                        item.contents.map((contentItem, j) => {
                            return (
                                <Card 
                                    key={'card' + j}
                                    cardType={item.cardType}
                                    category={item.category}
                                    image={contentItem.image} 
                                />
                            )
                        })
                    }
                    </Calousel>
                </section>
            )
        })
        return result;
    }

    render(){
        return(
            <div>
                <MediaQuery query='(max-width: 767px)'>
                    <Header>
                        <input type='text' placeholder='\"ポストカードを試す\"'/>
                    </Header>
                </MediaQuery>

                <div className="top">
                    <h2>ようこそ...</h2>
                    <p>「失敗を通して人は本当の意味で成長できる」ポーラ・シャー</p>
                </div>
                <section>
                    <div className="section__header">
                        <h2>デザインを作成</h2>
                    </div>
                    <Calousel swiperId={'newCards'}>
                        <Card key='1' cardType='NewCard' category="instagram"/>
                        <Card key='2' cardType='NewCard' category="animation_sns" />
                        <Card key='3' cardType='NewCard' category="card" />
                        <Card key='4' cardType='NewCard' category="poster" />
                        <Card key='5' cardType='NewCard' category="instagram" />
                        <Card key='6' cardType='NewCard' category="animation_sns" />
                        <Card key='7' cardType='NewCard' category="card" />
                        <Card key='8' cardType='NewCard' category="poster" />
                        <Card key='9' cardType='NewCard' category="instagram" />
                        <Card key='10' cardType='NewCard' category="animation_sns" />
                        <Card key='11' cardType='NewCard' category="card" />
                        <Card key='12' cardType='NewCard' category="poster" />
                    </Calousel>
                </section>
                {this.loadSections(0, 0)}
            </div>
        )
    }
}

export default Home;