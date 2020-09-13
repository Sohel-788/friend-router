import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
const Home = () => {
    const [friends, setFriend] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>Friend React Router</h1>
                <h2>Friend: {friends.length}</h2>
            </div>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;