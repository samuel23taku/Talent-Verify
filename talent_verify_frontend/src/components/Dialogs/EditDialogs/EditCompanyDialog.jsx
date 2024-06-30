import Modal from "react-modal";
import "../../../styles/DepartmentDialog.css"

const EditCompanyModalDialog = ({
  isOpen,
  onRequestClose,
  handleSubmitCompanyEdits,
  companyDataToEdit,
  setEditCompanyData,
  handleFileUpload,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Edit company</h2>
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitCompanyEdits();
        }}
      >
        <div className="form-label">
          <label className="label-text">Company Name:</label>
          <input
            type="text"
            value={companyDataToEdit.companyName}
            onChange={(e) =>
              setEditCompanyData({ ...companyDataToEdit, companyName: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Registration Number:</label>
          <input
            type="text"
            value={companyDataToEdit.registrationNumber}
            onChange={(e) =>
              setEditCompanyData({
                ...companyDataToEdit,
                registrationNumber: e.target.value,
              })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Date Registered:</label>
          <input
            type="date"
            value={companyDataToEdit.dateRegistered}
            onChange={(e) =>
              setEditCompanyData({ ...companyDataToEdit, dateRegistered: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Address:</label>
          <input
            type="text"
            value={companyDataToEdit.address}
            onChange={(e) =>
              setEditCompanyData({ ...companyDataToEdit, address: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Contact Person:</label>
          <input
            type="text"
            value={companyDataToEdit.contactPerson}
            onChange={(e) =>
              setEditCompanyData({ ...companyDataToEdit, contactPerson: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Contact Person Phone:</label>
          <input
            type="text"
            value={companyDataToEdit.contactPersonPhone}
            onChange={(e) =>
              setEditCompanyData({
                ...companyDataToEdit,
                contactPersonPhone: e.target.value,
              })
            }
            className="form-input"
            required
          />
        </div>
        <div className="form-label">
          <label className="label-text">Email Address:</label>
          <input
            type="email"
            value={companyDataToEdit.emailAddress}
            onChange={(e) =>
              setEditCompanyData({ ...companyDataToEdit, emailAddress: e.target.value })
            }
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-input">Submit</button>
      
      </form>
    </Modal>
  );
};

export default EditCompanyModalDialog;
