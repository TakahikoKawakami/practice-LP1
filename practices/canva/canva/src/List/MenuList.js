import React, { useState } from 'react';

import './MenuList.sass';

function targetList(obj) {
    if (obj.floor) {
        return obj.floor;
    }
    let showList = Object.keys(obj);
    console.log(obj.floor)
    if (showList.includes('floor')) {
        console.log(showList)
    } else {
        showList = Object.keys(obj.showList[1])
    }
    
}

const MenuList = (props) => {
    const [showName, setShowName] = useState('list');

    const listObj = props.list;
    targetList(listObj);
    return (
        <ul>
            {showName === props.list.floor && Object.keys(listObj).map((label) => {
                return (
                    <li> 
                        <button onClick={() => { setShowName(label) }}>
                            {listObj[label].text}
                        </button>
                        {/* {showName==label && listObj[label].list && 
                            // <MenuList list={listObj[label].list} />
                        } */}
                    </li>
                )
            })}
            {/* <li>
                <button onClick={() => { setIsOpen(!isOpen) }}>
                    {props.list.text}
                </button>
            </li>
            {isOpen && props.list.list && 
            props.list.list.map((item) => {
                    return (
                        <li>
                            <MenuList list={item}/>
                        </li>
                    )
                })
            } */}
        </ul>
    )
}

export default MenuList;