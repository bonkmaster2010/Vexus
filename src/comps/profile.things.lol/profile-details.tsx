import { useState } from "react";
import { useCreateUser } from "../../states/CreateUserState";
import "../../styles/ProfileDetails.css";

function ProfileDetails() {
  const { name, setName, email, password, setPassword } = useCreateUser();

  const [newName, setNewName] = useState(name);

  const [oldPassword, setOldPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const handleSaveDetails = () => {
    if (!newName.trim()) {
      alert("Name cannot be empty.");
      return;
    }
    if (newName === name) {
      alert("No changes detected.");
      return;
    }
    setName(newName);
    alert("Profile details updated successfully.");
  };

  const handleChangePassword = () => {
    if (oldPassword !== password) {
      alert("Old password is incorrect.");
      return;
    }
    if (newPass.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }
    if (newPass !== confirmNewPass) {
      alert("New passwords do not match.");
      return;
    }
    setPassword(newPass);
    setOldPassword("");
    setNewPass("");
    setConfirmNewPass("");
    alert("Password changed successfully.");
  };

  return (
    <>
      <div className="mm-my-profile-main-cont">

        <h3 className="generic-title">Profile Details</h3>

        <div className="mm-my-profile-content-wrapper">
          {/* Personal Information */}
          <div className="mm-info-wrapper">
            <h3 className="mm-info-header">Personal Information</h3>

            <div className="mm-my-profile-user-details-wrapper grid">
              <div className="input-with-label">
                <label>Full Name</label>
                <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                />
              </div>

              <div className="input-with-label">
                <label>Email</label>
                <input
                style={{ cursor: "not-allowed" }}
                readOnly
                placeholder={email}
                />
              </div>

              <div className="input-with-label">
                <label>Mobile Number</label>
                <input 
                style={{ cursor: "not-allowed" }}
                readOnly 
                placeholder="051 234 5678" />
              </div>
            </div>

            <button
              className="mm-my-profile-save-details-btn"
              onClick={handleSaveDetails}
            >
              SAVE DETAILS
            </button>
          </div>

          {/* Change Password */}
          <div className="mm-info-wrapper">
            <h3 className="mm-info-header">Change Password</h3>

            <div className="mm-my-profile-user-details-wrapper grid">
              <div className="input-with-label">
                <label>Old Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <div className="input-with-label">
                <label>New Password</label>
                <input
                  type="password"
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                />
              </div>

              <div className="input-with-label">
                <label>Retype New Password</label>
                <input
                  type="password"
                  value={confirmNewPass}
                  onChange={(e) => setConfirmNewPass(e.target.value)}
                />
              </div>
            </div>

            <button
              className="mm-my-profile-save-details-btn"
              onClick={handleChangePassword}
            >
              CHANGE PASSWORD
            </button>
          </div>

          {/* Delete Account */}
          <div className="mm-my-profile-delete-my-account">
            <p className="genric-label">Delete your account?</p>
            <p className="small-delete-text">Delete Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
