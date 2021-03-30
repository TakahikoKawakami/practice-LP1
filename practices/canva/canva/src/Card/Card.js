import Ract, { useContext, useRef } from 'react';
import { PopUpContext } from '../App';
import DesignPopUp from '../PopUp/DesignPopUp'; 
import './Card.css';

function renderImgTag(props) {
    if (props.image) {
        return (
            <img src={props.image} alt=""/>
        )
    } else {
        return;
    }
}

const Card = (props) => {
    const [ popUpProps, setPopUpProps ] = useContext(PopUpContext);
    const cardModalButtonRef = useRef(null);
    const handleClick = () => {
        const rect = cardModalButtonRef.current.getBoundingClientRect();
        const x = rect.left;
        const y = rect.top;
        const popUpButtonWidth = 30;
        const popUpButtonHeight = 30;

        setPopUpProps({
            isOpen: true,
            x: x,
            y: y,
            offsetX: popUpButtonWidth + 10,
            offsetY: popUpButtonHeight + 10,
        });
    }
    return (
        <div className={'Card ' + props.cardType}>
            <div className={'card__image category-' + props.category}>
                {renderImgTag(props)}
            </div>
            <p className='title'>{props.category}</p>
            {props.cardType==="yourDesign" &&
                <button 
                    className='popup-button'
                    ref={cardModalButtonRef}
                    onClick={handleClick}
                >
                    <i className="fas fa-ellipsis-h"></i>
                </button>
            }
        </div>
    );
}

export default Card;