import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
const FriendDetail = () => {
    const { friendId } = useParams();
    const [friendData, setFriendData] = useState({});
    const { name, username, email, phone, website } = friendData;
    //data loading
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriendData(data))
    }, [])
    const friendStyle = {
        border: '1px solid green',
        borderRadius: '10%',
        padding: '10px',
        margin: '15px 50px'
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>This is detail of {friendId} id.</h2>
            <div style={friendStyle}>
                <h1>Name: {name}</h1>
                <h3>User name: {username}</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    );
};

export default FriendDetail;