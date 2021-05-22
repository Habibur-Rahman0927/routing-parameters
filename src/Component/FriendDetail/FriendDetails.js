import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    const {name, email, phone} = friend;
    return (
        <div>
            <h3>This is friend details{id}</h3>
            <h2>Friend :{name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            
        </div>
    );
};

export default FriendDetails;