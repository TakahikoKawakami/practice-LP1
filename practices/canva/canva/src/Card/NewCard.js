import React, { Component } from 'react';
import './NewCard.css';

class NewCard extends Component {
    render() {
        return (
            <div className='NewCard'>
                {/* <img src="https://placehold.jp/50x50.png" /> */}
                <div className={'card__image category-' + this.props.category}>
                    <img src="https://category-public.canva.com/icons/icon-instagram-color.svg"/>
                </div>
                <p className='title'>{this.props.category}</p>
            </div>
        );
    };
}

export default NewCard;