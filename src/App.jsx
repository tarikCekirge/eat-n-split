import React from 'react'
import { useState } from 'react';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)


  const handleToggle = () => {
    setShowAddFriend(show => {
      if (!show) setSelectedFriend(null);
      return !show;
    });
  }

  const handleAddNewFriend = (e) => {
    setFriends(friends => [...friends, e])
    setShowAddFriend(false)

  }

  const handleSelection = (friend) => {
    setSelectedFriend(cur => cur?.id === friend.id ? null : friend)
    setShowAddFriend(false)
  }
  return (
    <div className='app'>
      <div className='sidebar'>

        <FriendsList selectedFriend={selectedFriend} friends={friends} onSelection={handleSelection} />
        {showAddFriend && <FormAddFriend onAddNewFriend={handleAddNewFriend} />}
        <Button onClick={handleToggle}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  )
}

export default App