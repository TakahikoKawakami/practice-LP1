import React, { Component } from 'react';
import MenuList from './List/MenuList';
import Header from './Header';

import './Home.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: { 
                floor: "list",
                template: {
                    "text": "テンプレート",
                    "list": { 
                        floor: "template",
                        sub1: {
                            "text": "sub1-1",
                            list: {
                                floor: "sub1",
                                sub11: {
                                    text: "sub1-1-1",
                                    list: ""
                                },
                                sub12: {
                                    text: "sub1-1-2",
                                    list: ""
                                }
                            }
                        },
                        sub2: {
                            "text": "sub1-2",
                            list: {
                                floor: "sub2",
                                sub11: {
                                    text: "sub1-2-1",
                                    list: ""
                                },
                                sub12: {
                                    text: "sub1-2-2",
                                    list: ""
                                }
                            }
                        }
                    },
                },
                functions: {
                    "text": "機能",
                    "list": [
                        {"text": "sub2-1", list: ""},
                        {"text": "sub2-2", list: ""},
                        {"text": "sub2-3", list: ""},
                        {"text": "sub2-4", list: ""},
                    ],
                },
            }
        };
    }

    render(){
        return(
            <div>
                <Header>
                    <h1>メニュー</h1>
                </Header>
                <MenuList list={this.state.list} />
            </div>
        )
    }
}

export default Menu;