import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, DivWraper, H } from './apiElements';
import socketIo from 'socket.io-client';


export const Axios = () => {
    const [user, setUser] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:3000/view`)
        .then(res => {
            const users = res.data;
            setUser(users);
        })
    const socket = socketIo('http://localhost:3000/', {
        transports: ['websocket'],
    });

    socket.on('newUser', (user) => {
        setUser((prevState) => [user, ...prevState]);
    });
        

    }, [])

    return (
        <Container>
                {user.map(users => (
                    <DivWraper>
                    <H>Nome: {users.name}</H>
                    <H>Idade: {users.idade}</H>
                    </DivWraper>
                ))}
        </Container>
    )
}

