import React from 'react';
import './PcNavi.sass';

const PcNavi = () => {
    return (
        <div className="PcNavi">
            <div className="pcnavi__logo">
                <i class="fab fa-wordpress"></i>
            </div>
            <div className="pcnavi__searchbox">
                <input type='text' placeholder='\"ポストカードを試す\"'/>
            </div>
            <div className="pcnavi__setting"/>
            <button className="pcnavi__newDesign__button">デザインを作成</button>
            <div className="pcnavi__yourIcon">
                <img src="https://placehold.jp/300x300/png"/>
            </div>
        </div>
    )

}

export default PcNavi;