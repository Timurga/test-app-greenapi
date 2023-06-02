import React, { useState } from 'react';
import '../../styles.sass'
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/TextInput/TextInput'

const ChatsSideBar = ({ onSelectChat }) => {
    const [chats, setChats] = useState([]);
    const [phone, setPhone] = useState('');

    return (
        <div className='sidebar'>
            <div className='chats'>
                <h2>Список чатов</h2>
                <ul>
                    {chats.map((chat) => (
                        <li key={chat.phone} onClick={() => onSelectChat(chat)}>
                            Пользователь с номером: {chat.phone}
                        </li>
                    ))}
                </ul>
            </div>


            <div className='newChat'>
                <h2>Новый чат</h2>

                <Input type="text" name="phone" placeholder="Введите телефон собеседника" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <Button onClick={() => setChats([...chats, {phone: phone}])}>Начать чат</Button>

            </div>

        </div>
    );
}

export default ChatsSideBar;
