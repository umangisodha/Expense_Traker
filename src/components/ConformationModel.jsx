

import "../styles/ConformationModel.css"
function ConformationModel(
   { title = "Confirm Action",
    message,
    confirmText = "confirm",
    cancelText = "Cancel",
    onConfirm,
    
    onCancel,}

) {
    return (
        <div className="confirmation-overlay" onClick={onCancel}>
            <div
                className="confirmation-model"
                role="dialog"
                aria-model="true"
                aria-labelledby="confirmation-title"
                onClick={(event) => event.stopPropagation()}
            >
                <h2 id="confirmation-title">{title}</h2>
                <p>{message}</p>

                <div className="confirmation-buttons">
                    <button type="button" className="confirmation-cancel" onclick={onclick}>
                        {cancelText}
                    </button>
                    <button type="button" className="confirmation-delete" onclick={onConfirm}>
                        {confirmText}
                    </button>
                </div>
            </div>

        </div>
    )
}


export default ConformationModel;
