import React, {useContext} from 'react';
import { AlertContext } from '../context/alert/alertContext';

export default function Search() {
    const {show} = useContext(AlertContext)

    const onSubmit = (e) => {
        if(e.key === 'Enter') {
            show('This is alert!');
        }
    }

    return (
        <div className="form-group mb-3">
            <input 
                type="text"
                className="form-control"
                placeholder="Enter a github name..."
                onKeyPress={onSubmit}
            />
            
        </div>
    )
}
