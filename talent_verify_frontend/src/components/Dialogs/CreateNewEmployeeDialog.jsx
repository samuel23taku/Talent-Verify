import Modal from "react-modal";
import "../../styles/ModalDialog.css";

const CreateEmployeeModalDialog = ({
  isOpen,
  onRequestClose,
  title,
  handleSubmit,
  employeeData,
  setEmployeeData,
  handleFileUpload,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>{title}</h2>
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="form-label">
          <label className="label-text">Name:</label>
          <input
            type="text"
            value={employeeData.name}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, name: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Employee ID:</label>
          <input
            type="text"
            value={employeeData.employeeId}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, employeeId: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Role:</label>
          <input
            type="text"
            value={employeeData.role}
            onChange={(e) =>
              setEmployeeData({ ...employeeData, role: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-input">Submit</button>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="form-input"
        />
      </form>
    </Modal>
  );
};

export default CreateEmployeeModalDialog;
