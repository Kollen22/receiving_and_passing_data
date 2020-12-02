import React, { useState, useEffect } from 'react'
import socketIo from 'socket.io-client';
import { Container, DivWraper, H } from './indexElements';

export const Api = () => {

const [name, setName] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/view')
    .then((res) => res.json())
    .then(setName);

    const socket = socketIo('http://localhost:3000/', {
        transports: ['websocket'],
    });

    socket.on('newUser', (name) => {
        setName((prevState) => [name, ...prevState]);
    });

}, [])


    return (
        <Container>
            {name.map((names) => (
                <DivWraper key={names._id}>
                    <H>{names.name}</H>
                    <H>{names.idade} Anos</H>
                </DivWraper>
            ))}
        </Container>
    )
}
