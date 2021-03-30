import React, { useEffect, useLayoutEffect, useState, useRef, useContext } from 'react';
import {PopUpContext} from '../App';
import useOutsideClick from "../Hooks/UseOutsideClick";
import './PopUp.sass';

const PopUp = () => {
    const popUpWidth = 200;
    const popUpHeight = 230;

    const [ popUpProps, setPopUpProps ] = useContext(PopUpContext);
    const [ isShown, setIsShown ] = useState(false);
    const popUpRef = useRef(null);
    const [ popUpPosition, setPopUpPosition ] = useState({
        top: 0,
        left: 0,
        width: popUpWidth + 'px',
        height: popUpHeight + 'px',
    });
    
    useOutsideClick(popUpRef, ()=>{
        setPopUpProps(
            {
                isOpen: false,
                x: 0,
                y: 0,
                offsetX: 0,
                offsetY: 0,
                width: popUpWidth + 'px',
                height: popUpHeight + 'px',
            }
        );
        setIsShown(false);
    });

    useEffect(
        () => {
            let positionX = popUpProps.x + window.pageXOffset;
            let positionY = popUpProps.y + popUpProps.offsetY + window.pageYOffset;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            let changedPosition = {
                top: positionY + 'px',
                left: positionX + 'px',
                width: popUpWidth + 'px',
                height: popUpHeight + 'px',
            }

            if ((popUpWidth + positionX) > windowWidth) {
                delete changedPosition.left;
                changedPosition.right = 10;
            }

            if ((popUpProps.y + popUpProps.offsetY + popUpHeight) > windowHeight) {
                changedPosition.top = popUpProps.y - 10 + window.pageYOffset;
                changedPosition.transform = "translate(0, -100%)"
            }

            setPopUpPosition(changedPosition);
            setIsShown(popUpProps.isOpen);
        }, [popUpProps]
    );

        return (
            <div>
                {isShown &&
                <div
                    className="PopUp" 
                    ref={popUpRef}
                    style={popUpPosition}
                >
                    <h3>yourDesign</h3>
                    <p>test1</p>
                    <p>test2</p>
                    <p>test3</p>
                    <p>test4</p>
                </div>
                }
            </div>
        );
}

export default PopUp;