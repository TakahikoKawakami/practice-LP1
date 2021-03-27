import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return(
            <MediaQuery query="(max-width: 767px)">
                <div className='Navbar'>
                    <Link to="/">
                        <div className='nav__item'>
                            <i className="fas fa-home"></i>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link to="/design">
                        <div className='nav__item'>
                            <i className="fas fa-th-large"></i>
                            <p>Design</p>
                        </div>
                    </Link>
                    {/* <Link to="/menu">
                        <div className='nav__item'>
                            <i className="fas fa-bars"></i>
                            <p>Menu</p>
                        </div>
                    </Link> */}
                </div>
            </MediaQuery>
        )
    }
}

export default Navbar;