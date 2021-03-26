import React, { Component } from 'react';
import './Header.css';

export default (props) => {
    return (
        <div className="header">
            {props.children}
        </div>
    );
};