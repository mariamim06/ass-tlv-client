import React, {useState} from 'react';
import './MakeAdmin.css';
import { Button, TextField, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        console.log(data);
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width: '50%'}}
            label="Email" 
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;


