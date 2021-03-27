import React, { useState } from 'react';
import MediaQuery from "react-responsive";
import './MobileNavi.sass';


const MobileNavi = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MediaQuery query="(max-width: 767px)">
            <div className="MobileNavi">
                <div className="nav__button__container">
                    <button className="nav__button" onClick={() => {setIsOpen(true)}} />
                </div>
                {isOpen && 
                <div className="menu__contents">
                    <div className="menu__contents__header">
                        <input type='text' placeholder="検索" />
                        <a onClick={() => {setIsOpen(false)}}>キャンセル</a>
                    </div>
                    <div className="menu__contents__item custom">カスタムサイズ</div>
                    <div className="menu__contents__item editPhoto">写真を編集</div>
                    <div className="menu__contents__recommends">
                        <p>推奨</p>
                        <ul>
                            <li className="menu__contents__item presentation">プレゼンテーション</li>
                            <li className="menu__contents__item card">カード</li>
                            <li className="menu__contents__item instagram">Instagramの投稿</li>
                            <li className="menu__contents__item poster">ポスター</li>
                            <li className="menu__contents__item a4">A4文書</li>
                            <li className="menu__contents__item logo">ロゴ</li>
                        </ul>
                    </div>
                </div>
                }
            </div>
        </MediaQuery>
    );
}

export default MobileNavi;