import React  from 'react';
import './Header.css';

const Header = (props) => {
    let height = '40px';
    if (props.height) height = props.height;
    const style = {
        height: height ,
    };

    return (
        <div className="header" style={style}>
            {props.children}
        </div>
    );
};

export default Header;