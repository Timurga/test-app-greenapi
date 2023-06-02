import React, { useState } from 'react';
import ChatsSideBar from './ChatsSideBar';
import '../../styles.sass'
import axios from 'axios';
import Input from '../../components/UI/TextInput/TextInput';
import Button from '../../components/UI/Button/Button';
import { useSelector } from 'react-redux';
import Chat from './Chat';

const ChatsPage = () => {
    const [text, setText] = useState('')
    const [selectedChat, setSelectedChat] = useState('');
    const [sendedMessage, setSendedMessage] = useState('')
    const id = useSelector(state => state.user.idInstance)
    const api = useSelector(state => state.user.apiTokenInstance)

    const handleSelectChat = (chat) => {
        setSelectedChat(chat);
    };

    const sendMessage = async (text) => {
        return await axios.post(`https://api.green-api.com/waInstance${id}/sendMessage/${api}`, { chatId: `${selectedChat.phone}@c.us`, message: text })
            .then((response) => console.log(response.data))
            .then(() => setSendedMessage(text))
            .catch(err => console.log(err))
    }
    return (
        <>
            <ChatsSideBar onSelectChat={handleSelectChat} />
            <div className='chat'>
                <Chat chat={selectedChat} message={sendedMessage}/>
                <div className="chatInput">
                    <Input placeholder="Введите сообщение" value={text} onChange={(e) => setText(e.target.value)} />
                    <Button onClick={() => sendMessage(text)}>Send</Button>
                </div>
            </div>

        </>
    );
}

export default ChatsPage;
