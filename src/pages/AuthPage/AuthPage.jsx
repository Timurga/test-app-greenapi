import React, { useState } from 'react';
import '../../styles.sass'
import TextInput from '../../components/UI/TextInput/TextInput';
import Button from '../../components/UI/Button/Button';
import { useDispatch } from 'react-redux';
import { setApi, setId, setUser } from '../../reducers/loginReducer';

const AuthPage = () => {
    const [idInstance, setIdInstance] = useState('');
    const [apiTokenInstance, setApiTokenInstance] = useState('');
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(setUser())
        dispatch(setId(idInstance))
        dispatch(setApi(apiTokenInstance))
    }

    return (

        <div className='container'>
            <div className='card'>
                <div className='title'>Login</div>
                <TextInput placeholder='Id Instance' value={idInstance} onChange={(e) => setIdInstance(e.target.value)} />
                <TextInput placeholder='Api Token Instance' value={apiTokenInstance} onChange={(e) => setApiTokenInstance(e.target.value)} />
                <Button onClick={() => idInstance === '' || apiTokenInstance === '' ? (alert('Все поля должны быть заполненны')) : (onLogin())}>Log in</Button>
            </div>
        </div>


    );
}

export default AuthPage;
