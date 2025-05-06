import React from 'react'
import Button from './Button'

const FormAddFriend = () => {
    return (
        <form className='form-add-friend'>
            <label htmlFor="name">🏃‍➡️ Friend Name</label>
            <input id='name' name='name' type="text" />
            <label htmlFor="image">🎞️Image Url</label>
            <input id='image' name='image' type="text" />
            <Button>Add</Button>
        </form>
    )
}

export default FormAddFriend