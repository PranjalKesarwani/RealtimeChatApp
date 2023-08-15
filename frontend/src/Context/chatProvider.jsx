import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';



const ChatContext = createContext();

const ChatProvider = ({ children }) => {

    const [user,setUser] = useState();
    const [selectedChat,setSelectedChat] = useState();
    const [chats,setChats] = useState([]);
    const [notificaton,setNotification] = useState([]);

    const navigate = useNavigate()

    useEffect(()=>{
    const userInfo =    JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if(!userInfo){
        navigate('/')
    }
    },[navigate]);


    return (
        <ChatContext.Provider value={{user,setUser,selectedChat,setSelectedChat,chats,setChats,notificaton,setNotification}}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState = () => {

    return useContext(ChatContext);
}

export default ChatProvider