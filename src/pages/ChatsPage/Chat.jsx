import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Chat = ({ chat, message }) => {
    const [messages, setMessages] = useState([])
    const id = useSelector(state => state.user.idInstance)
    const api = useSelector(state => state.user.apiTokenInstance)

    const recieveMessage = () => {
        axios.get(`https://api.green-api.com/waInstance${id}/receiveNotification/${api}`)
          .then(response => {
            if (response.data.body.typeWebhook !== 'incomingMessageReceived') {
              return axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${api}/${response.data.receiptId}`);
            } else if (response.data.body.senderData.sender !== `${chat.phone}@c.us`) {
              return axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${api}/${response.data.receiptId}`);
            } else {
              return axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${api}/${response.data.receiptId}`)
                .then(() => {
                  setMessages(arr => [...arr, { message: response.data.body.messageData.textMessageData.textMessage }]);
                });
            }
          })
          .catch(error => {
            console.log(error);
          });
      };
      

    useEffect(() => {
        setMessages(arr => [...arr, { message: message, id: 'sender' }])

    }, [message])

    useEffect(() => {
        const timer = setTimeout(() => {
            const getMessages = async () => {
                return await recieveMessage()
            }
            getMessages();
        },1000)
        return () => clearTimeout(timer);
    });


    return (
        <div className='chatField'>
            <h2>Chat with {chat.phone}</h2>
            {messages.length === [] ?
                (
                    <div></div>
                )
                : (messages.map((message, index) => (
                    <div key={index} className={message.id === 'sender' ? 'senderMessage' : 'recieverMessage'}>
                        <p >{message.id === 'sender' ? 'Вы:' : 'Собеседник:'} {message.message}</p>
                    </div>

                )))
            }
        </div>
    );
}

export default Chat;
