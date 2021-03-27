import React, { useState, useRef, useEffect } from 'react';
import MediaQuery from "react-responsive";
import useOutsideClick from "./Hooks/UseOutsideClick";
import './PcHelp.sass';

const PcHelp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const helpRef = useRef(null);

    useOutsideClick(helpRef, ()=>{
        isOpen && setIsOpen(false);
    });

    return (
        <MediaQuery query="(min-width: 768px)">
            <div className="PcHelp">
                <div className="help__button__container">
                    <button className="nav__button" onClick={() => {setIsOpen(true)}} />
                </div>
                {isOpen && 
                <div 
                    className="help__contents"
                    ref={helpRef}
                >
                    <div className="help__contents__header">
                        <input 
                            type='text' 
                            placeholder="ヘルプとアドバイス" 
                        />
                    </div>
                    <ul>
                        <li><a href='/'>test1</a></li>
                        <li>test2</li>
                        <li>test3</li>
                        <li>test4</li>
                    </ul>
                </div>
                }
            </div>
        </MediaQuery>
    );
}

export default PcHelp;