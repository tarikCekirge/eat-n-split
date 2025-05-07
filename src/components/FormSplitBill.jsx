import React from 'react'
import Button from './Button'
import { useState } from 'react'
import { useEffect } from 'react'

const FormSplitBill = ({ selectedFriend }) => {
    const [bill, setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const [whoIsPaying, setWhoIsPaying] = useState('user')

    useEffect(() => {
        setBill('')
        setPaidByUser('')
        setWhoIsPaying('user')
    }, [selectedFriend])

    const paidByFriend = bill ? bill - paidByUser : ''


    return (
        <form className='form-split-bill'>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label htmlFor="bill">💴 Bill value</label>
            <input id='bill' name='bill' type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            <label htmlFor="your-expense">💵 Your expense</label>
            <input id='your-expense' name='your-expense' type="text" value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />
            <label htmlFor="x-expense">💶  {selectedFriend.name}'s expense</label>
            <input id='x-expense' name='x-expense' type="text" disabled value={paidByFriend} />
            <label htmlFor="select">💷 Who s paying the bill</label>
            <select name="" id="" value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split Bill</Button>

        </form>
    )
}

export default FormSplitBill