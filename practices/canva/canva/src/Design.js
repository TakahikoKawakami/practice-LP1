import React, { Component } from 'react';
import Card from './Card/Card';
import './Design.css';

class Design extends Component {
    constructor(props){
        super(props);
        this.state = {
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
        }
    }

    renderYourDesigns() {
        const result = this.state.contents.map((content, i) => {
            console.log(content)
            return (
                <Card
                    cardType='yourDesign'
                    category={content.category}
                    image={content.image}
                />
            )
        })
        return result;
    }

    render(){
        return(
            <div>
                <h1>全てのデザイン</h1>
                <div className='design__container'>
                    {this.renderYourDesigns()}
                </div>
            </div>
        )
    }
}

export default Design;