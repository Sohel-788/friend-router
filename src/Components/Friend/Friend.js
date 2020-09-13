import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, phone, id } = props.friend;
    const friendStyle = {
        border: '1px solid gray',
        borderRadius: '10px',
        padding: '10px',
        margin: '15px 50px'
    }
    const btnStyle = {
        background: 'green', color: '#fff', padding: '5px', cursor: 'pointer', borderRadius: '5px', margin: '10px'
    }
    //Navigation process 2
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* Navigation process 1 */}
            <Link to={`/friend/${id}`}>
                <button style={btnStyle}>See more</button>
            </Link>
            {/* //Navigation process 2 */}
            <button style={btnStyle} onClick={() => handleClick(id)}>See more</button>
        </div>
    );
};

export default Friend;