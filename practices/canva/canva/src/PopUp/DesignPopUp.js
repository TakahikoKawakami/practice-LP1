import React, { Component } from 'react';
import './DesignPopUp.scss';

class DesignPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
        };
        this.handleOpenButtonClick = this.handleOpenButtonClick.bind(this);
        this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    }

    handleOpenButtonClick() {
        this.setState({
            isShown: true
        })
    }

    handleCloseButtonClick() {
        this.setState({
            isShown: false
        })
    }

    render() {
        return (
            <div className="popup-menu-container">
                <button className='popup-button' onClick={this.handleOpenButtonClick}>
                    <i className="fas fa-ellipsis-h"></i>
                </button>
                <div className={`popup-menu ${this.state.isShown ? 'shown' : ''}`}>
                    <div>menu</div>
                    <button onClick={this.handleCloseButtonClick}>
                    Close Menu
                    </button>
                </div>
            </div> 
        )
    } 
}

export default DesignPopUp;