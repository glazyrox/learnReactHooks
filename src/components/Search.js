import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

export const Search = () => {
    const [value, setState] = useState('')

    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers();

        if (value.trim()) {
            alert.hide()
            github.search(value.trim());
        } else {
            alert.show("Введите данные пользователя!")
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