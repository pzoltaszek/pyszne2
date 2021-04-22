import './Popup.css';

function Popup(props) {

    const content = props.children

    const closePopup = () => {
        props.changePopupStatus(true);
    }

    if (props.open === true) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <div className="closingSquare">
                        <span
                            onClick={closePopup}>
                            &times;
                            </span>
                    </div>
                    <div>{content}</div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Popup;