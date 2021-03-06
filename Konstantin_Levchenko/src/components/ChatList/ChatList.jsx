import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Clear from '@material-ui/icons/Clear'
// import {Link} from "react-router-dom";

import './ChatList.css';
import {ChatForm} from "../ChatForm";

export class ChatList extends React.Component {

    render() {

        // const listItems = Object.entries(value.chats).map((chat) =>
        //     <Link key={chat['0']} to={'/chats/' + chat['0']}>
        //         <ListItem button>
        //             <ListItemIcon>
        //                 <SendIcon/>
        //             </ListItemIcon>
        //             <ListItemText primary={chat['1'].name}/>
        //         </ListItem>
        //     </Link>
        // );

        // const {addChat, chats} = this.props;
        // const listItems = chats.map((chat, index) =>
        //     <Link key={index} to={chat.link}>
        //         <ListItem button>
        //             <ListItemIcon>
        //                 <SendIcon/>
        //             </ListItemIcon>
        //             <ListItemText className={(chat.fire) ? 'fire' : 'notFire'} primary={chat.name}/>
        //         </ListItem>
        //     </Link>

        const {addChat, chats, redirect, deleteChat} = this.props;
        const listItems = chats.map((chat, index) =>
            <div className='chatList-wrap' key={index}>
                <ListItem button data-id={chat.key} data-fire={chat.fire} onClick={redirect}>
                    <ListItemIcon>
                        <SendIcon/>
                    </ListItemIcon>
                    <ListItemText className={(chat.fire) ? 'fire' : 'notFire'} primary={chat.name}/>
                </ListItem>
                <ListItem button data-id={chat.key} onClick={deleteChat}>
                    <ListItemIcon>
                        <Clear/>
                    </ListItemIcon>
                </ListItem>
            </div>
        );

        return (
            <div className='chatList'>
                <List>
                    {listItems}
                </List>
                <ChatForm onSend={addChat}/>
            </div>
        );
    }
}