import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const SERVER_URL = 'http://localhost:4000'

const useChat = (sharedRoom) => {
    const [messages, setMessages] = useState([]);
    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_URL, {
            query: { sharedRoom }
        })
        socketRef.current.emit('message:get')
        socketRef.current.on('messages', (messages) => {
            setMessages(messages)
        })
        return () => {
            socketRef.current.disconnect()
        }
    }, [sharedRoom])

    const sendMessage = ({ messageText, tagList }) => {
        socketRef.current.emit('message:add', {
            messageText,
            tagList
        })
    }

    return {messages, sendMessage}
}

export default useChat