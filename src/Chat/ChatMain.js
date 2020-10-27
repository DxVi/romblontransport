import React, {useEffect} from 'react';
import './ChatMain.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useStateValue } from '../StateProvider';
import { actionTypes } from "../reducer";

function ChatMain() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        if (!user){
        const username = prompt("Please enter username");
        if (username) {
        dispatch({
              type: actionTypes.SET_USER,
              user: username,
            })
        }}
    }, [])
    

    return (
        <div className="chatMain">
            { !user ? (
                <h1>No logged in user!</h1>
             ) : (
                 <div className="chatMain__chat">
                    <Sidebar />
                    <Chat />
                </div>   
             )
            }
        </div>
    )
}

export default ChatMain
