import React, { Component } from 'react';
import DesignPopUp from '../PopUp/DesignPopUp'; 
import './Card.css';

class Card extends Component {
    renderImgTag() {
        if (this.props.image) {
            return (
                <img src={this.props.image} alt=""/>
            )
        } else {
            return;
        }
    }

    renderModalButton() {
        if (this.props.cardType === "yourDesign") {
            return (
                <DesignPopUp/>
            )
        }
    }

    openModal() {
        return;
    }

    render() {
        console.log(this.props.image)
        return (
            <div className={'Card ' + this.props.cardType}>
                <div className={'card__image category-' + this.props.category}>
                    {this.renderImgTag()}
                </div>
                <p className='title'>{this.props.category}</p>
                {this.renderModalButton()}
            </div>
        );
    };
}

export default Card;