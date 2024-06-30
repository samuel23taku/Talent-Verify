import Modal from "react-modal";
import "../../../styles/DepartmentDialog.css"

const EditDepartmentModalDialog = ({
  isOpen,
  onRequestClose,
  handleSubmitDepartmentEdits,
  departmentDataToEdit,
  setEditDepartmentData,
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
          handleSubmitDepartmentEdits();
        }}
      >
        <div className="form-label">
          <label>
            Name:
            <input
              type="text"
              value={departmentData.departmentName}
              onChange={(e) =>
                setEditDepartmentData({ ...departmentData, departmentName: e.target.value })
              }
              required
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditCompanyModalDialog;
