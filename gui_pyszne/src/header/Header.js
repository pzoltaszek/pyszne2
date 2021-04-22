import { useState, useContext } from 'react';
import Popup from '../common/Popup';
import './Header.css'
import CommonButton from '../common/CommonButton';
import LoginForm from '../login/LoginForm';
import { LoginContext } from '../context/LoginContext';

function Header({ text }) {

    const [state, dispatch] = useContext(LoginContext);
    const [popupOpen, setPopupOpen] = useState(false);

    const clickLoginButton = () => {
        setPopupOpen(true);
    }

    const logOut = () => {
        dispatch({
            type: 'LOGOUT'
        });
        renderLoginButtons()
    }

    const openClosePopup = () => {
        setPopupOpen(!popupOpen);
    }

    const submitLoginForm = ({ loginValue }) => {
        dispatch({
            type: 'LOGIN',
            login: loginValue
        });
        openClosePopup();
    }

    const renderLoginButtons = () => {
        if (state.login === '') {
            return (
                <div className="header-login">
                    <CommonButton clickButton={clickLoginButton} text={'Create'} />
                    <CommonButton clickButton={clickLoginButton} text={'Login'} />
                </div>
            );
        } else {
            return (
            <div className="header-login">
                <span className="header-login-span">Hello {state.login}</span>
                <CommonButton clickButton={logOut} text={'Log out'} />
            </div>
            );
        }
    }


    return (
        <>
            <div className="header">
                <div className="header-main">
                    {text}
                </div>
                {renderLoginButtons()}
            </div>
            <Popup open={popupOpen} changePopupStatus={openClosePopup}>
                <LoginForm submitCallback={submitLoginForm} />
            </Popup>
        </>
    );
}

export default Header;