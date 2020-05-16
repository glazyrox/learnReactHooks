import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Search = () => {
    const [value, setState] = useState('')

    const {show} = useContext(AlertContext);
    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        if (value.trim()) {
            console.log('Make request width:', value)
        } else {
            alert("Введите данные пользователя!")
        }
    }

    return (
        <div className='form-group'>
            <input
                type="text"
                className="form-control"
                placeholder="Введите никнейм пользователя..."
                value={value}
                onChange={event => setState(event.target.value)}
                onKeyPress={onSubmit}
            >
            </input>
        </div>
    )
}