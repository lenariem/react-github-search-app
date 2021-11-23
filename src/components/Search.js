import React, {useContext, useState} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export default function Search() {
    const [value, setValue] = useState('');
    const {show} = useContext(AlertContext);

    const onSubmit = (e) => {
        if(e.key !== 'Enter') {
            return;
        }
        if(value.trim()) {
            console.log('Make request with: ', value);
        } else {
            show('Enter user name to search please');
        }
    }

    return (
        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                placeholder="Enter a github name..."
                value={value}
                onKeyPress={onSubmit}
                onChange={e => setValue(e.target.value)}
            />
            
        </div>
    )
}
