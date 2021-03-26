import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <section>
                    <div className="section__header">
                        <h2>{item.title}</h2>
                        <Link to="/design">すべて表示</Link>
                    </div>
                    <Calousel swiperId={item.category} navigation={true}>
                    {
                        item.contents.map((contentItem, j) => {
                            return (
                                <Card 
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
                <Header>
                    <input type='text' placeholder='\"ポストカードを試す\"'/>
                </Header>

                <div className="top">
                    <h2>ようこそ...</h2>
                    <p>「失敗を通して人は本当の意味で成長できる」ポーラ・シャー</p>
                </div>
                <section>
                    <div className="section__header">
                        <h2>デザインを作成</h2>
                    </div>
                    <Calousel swiperId={'newCards'}>
                        <Card cardType='NewCard' category="instagram"/>
                        <Card cardType='NewCard' category="animation_sns" />
                        <Card cardType='NewCard' category="card" />
                        <Card cardType='NewCard' category="poster" />
                        <Card cardType='NewCard' category="instagram" />
                        <Card cardType='NewCard' category="animation_sns" />
                        <Card cardType='NewCard' category="card" />
                        <Card cardType='NewCard' category="poster" />
                        <Card cardType='NewCard' category="instagram" />
                        <Card cardType='NewCard' category="animation_sns" />
                        <Card cardType='NewCard' category="card" />
                        <Card cardType='NewCard' category="poster" />
                    </Calousel>
                </section>
                {this.loadSections(0, 0)}
            </div>
        )
    }
}

export default Home;