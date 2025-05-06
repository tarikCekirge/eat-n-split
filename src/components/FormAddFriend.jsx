import React, { useState } from 'react'
import Button from './Button'

const initialValue = {
    name: "",
    image: ""
}

const FormAddFriend = ({ onAddNewFriend }) => {
    const [friend, setFriend] = useState(initialValue)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFriend(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!friend.name || !friend.image) {
            console.log("Please fill in all fields.")
            return
        }
        const id = crypto.randomUUID()
        const newFriend = { ...friend, image: `https://i.pravatar.cc/48?=${id}`, id, balance: 0 }
        onAddNewFriend(newFriend)
        setFriend(initialValue)
    }
    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label htmlFor="name">🏃‍➡️ Friend Name</label>
            <input
                id='name'
                name='name'
                type="text"
                value={friend.name}
                onChange={handleChange}
            />

            <label htmlFor="image">🎞️ Image Url</label>
            <input
                id='image'
                name='image'
                type="text"
                value={friend.image}
                onChange={handleChange}
            />

            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend
