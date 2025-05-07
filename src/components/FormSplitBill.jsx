import React from 'react'
import Button from './Button'

const FormSplitBill = ({ selectedFriend }) => {
    return (
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label htmlFor="image">💴 Bill value</label>
            <input id='image' name='image' type="text" />
            <label htmlFor="your-expense">💵 Your expense</label>
            <input id='your-expense' name='your-expense' type="text" />
            <label htmlFor="x-expense">💶  {selectedFriend.name}'s expense</label>
            <input id='x-expense' name='x-expense' type="text" disabled />
            <label htmlFor="select">💷 Who s paying the bill</label>
            <select name="" id="">
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>
            <Button>Split Bill</Button>

        </form>
    )
}

export default FormSplitBill