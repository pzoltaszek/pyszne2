import './CommonButton.css';

export default function CommonButton({clickButton, text}) {
    return (
        <>
            <button className="common-button" onClick={clickButton}>{text}</button>
        </>
    )
}