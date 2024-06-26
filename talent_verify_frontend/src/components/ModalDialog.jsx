import "../styles/ModalDialog.css"
const ModalDialog = ({ isOpen, onClose, onSave, title, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal-header">
            <h2>{title}</h2>
            <button className="close-button" onClick={onClose}>&times;</button>
          </div>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <button className="modal-button" onClick={onSave}>Save</button>
            <button className="modal-button" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  };

  export default ModalDialog;