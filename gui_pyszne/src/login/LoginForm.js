import { useState } from 'react';
import './LoginForm.css';
import Constans from '../common/Constans';

export default function LoginForm({submitCallback}) {

    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const handleLoginChange = (e) => {
        setLoginValue(e.target.value);
    }

    const handlePassChange = (e) => {
        setPassValue(e.target.value);
    }

    const submitLoginForm = (e) => {
        e.preventDefault();
        submitCallback({loginValue, passValue})
        setLoginValue('');
        setPassValue('');
    }

    return (
        <div className='login-form'>
            <form onSubmit={submitLoginForm}>
                <label>
                    {Constans.LoginForm.loginLabel}
                    <input className='login-form-input' type="text" value={loginValue} onChange={handleLoginChange} />
                </label>
                <br></br>
                <label>
                    {Constans.LoginForm.passLabel}
                    <input className='login-form-input' type="text" value={passValue} onChange={handlePassChange} />
                </label>
                <br></br>
                <input className='login-form-submit' type="submit" value="Submit" />
            </form>
        </div>
    );
}