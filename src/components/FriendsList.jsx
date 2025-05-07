import React from 'react'
import Friend from './Friend'

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
    return (
        <ul>
            {friends.map(friend => (
                <Friend selectedFriend={selectedFriend} key={friend.id} friend={friend} onSelection={onSelection} />
            ))}
        </ul>
    )
}

export default FriendsList