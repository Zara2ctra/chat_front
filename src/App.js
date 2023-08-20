import React from 'react';
import socketIO from 'socket.io-client';
import ChatPage from './components/ChatPage';
import {Container} from 'react-bootstrap'
import {observer} from "mobx-react-lite";

const socket = socketIO.connect('http://localhost:4000');

const App = observer(() => {
    return (
        <Container style={{ maxWidth: '800px' }}>
            <ChatPage socket={socket}/>
        </Container>
    );
})

export default App;
