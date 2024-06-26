import Modal from "react-modal";
import "../../../styles/ModalDialog.css"

const EditEmployeeModalDialog = ({
  isOpen,
  onRequestClose,
  title,
  handleSubmit,
  employeeData,
  setEditEmployeeData,
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
              setEditEmployeeData({ ...employeeData, name: e.target.value })
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
              setEditEmployeeData({ ...employeeData, employeeId: e.target.value })
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
              setEditEmployeeData({ ...employeeData, role: e.target.value })
            }
            className="form-input"
            required
          />
          
        </div>

        <div className="form-label">
          <label className="label-text">DutiesInRole:</label>
          <input
            type="text"
            value={employeeData.dutiesInRole}
            onChange={(e) =>
              setEditEmployeeData({ ...employeeData, dutiesInRole: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Date Started:</label>
          <input
            type="date"
            value={employeeData.dateStartedRole}
            onChange={(e) =>
              setEditEmployeeData({ ...employeeData, dateStartedRole: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Date Left Role:</label>
          <input
            type="date"
            value={employeeData.dateLeftRole}
            onChange={(e) =>
              setEditEmployeeData({ ...employeeData, dateLeftRole: e.target.value })
            }
            className="form-input"
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

export default EditEmployeeModalDialog;
