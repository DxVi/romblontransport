import React, { useEffect, useState } from 'react';
import "./Booking.css";
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from "../firebase";

function Booking() {
    const [{user, userid}] = useStateValue();
    const [input, setInput] = useState();
    const [bookingChats, setBookingChats] = useState([]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("userid", userid)
        db.collection("Bookings").add({
          owner: user,
          message: input,
          username: user,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    
        setInput("");
      };

     useEffect(() => {
        if (user) {
            console.log("user>>>", user)

           db.collection('Bookings')
            .where("owner", "==", user)
            .get()
            .then(function(querySnapshot) {
                console.log("size>>>>",querySnapshot.size)
                setBookingChats(querySnapshot.docs.map((doc) => doc.data()));
               })
            };
    }, [user,userid,bookingChats])
  
    return (
        <div className="booking">
            <h2>Booking Chat</h2>
            <div className="booking__chats">
                {
                        bookingChats.map((chat) => (
                            <p key={chat.message}>
                                <strong>{chat.username}</strong> {chat.message}
                            </p>
                        ))
                    }
            </div>
            <div className="booking__inputs">
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
            </div>
            
        </div>
    )
}

export default Booking
