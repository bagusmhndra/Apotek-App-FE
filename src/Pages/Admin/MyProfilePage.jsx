import React, { useState } from "react";
import { Button } from "react-bootstrap";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";

function MyProfilePage() {
  const [initialValues] = useState({
    firstName: "Bima",
    lastName: "Sakti",
    username: "bimsak",
    email: "bimasakti@gmail.com",
    phoneNumber: "082465478654",
    address: "Semarang",
  });

  const [formData, setFormData] = useState({ ...initialValues });

  const [editMode, setEditMode] = useState(false);

  const saveProfile = (event) => {
    event.preventDefault();
    console.log("Profile updated:", formData);
    setEditMode(false);
  };

  const cancelEdit = () => {
    setFormData({ ...initialValues });
    setEditMode(false);
  };

  return (
    <>
      <HeaderDashboard />
      <div className="container mt-5">
        <div
          className="card shadow"
          style={{ border: "none", borderRadius: "0" }}
        >
          <div className="card-body">
            <h2
              className="title-profile"
              style={{ fontSize: "24px", fontWeight: "bold", margin: "20px" }}
            >
              My Profile
            </h2>
            <form onSubmit={saveProfile}>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter first name"
                      autoFocus
                    />
                  ) : (
                    <div>{formData.firstName}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter last name"
                    />
                  ) : (
                    <div>{formData.lastName}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="username"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter username"
                    />
                  ) : (
                    <div>{formData.username}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  {editMode ? (
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter email address"
                    />
                  ) : (
                    <div>{formData.email}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="form-control"
                      placeholder="Enter phone number"
                    />
                  ) : (
                    <div>{formData.phoneNumber}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      className="form-control"
                      placeholder="Enter address"
                    />
                  ) : (
                    <div>{formData.address}</div>
                  )}
                </div>
              </div>
              {editMode ? (
                <div className="col-md-6 d-flex justify-content-left text-center">
                  <Button
                    type="submit"
                    className="btn-update"
                    style={{ marginRight: "25px" }}
                  >
                    Update
                  </Button>
                  <Button
                    type="button"
                    className="btn-cancel"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button
                  type="button"
                  className="btn-edit"
                  onClick={() => setEditMode(true)}
                >
                  Edit
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfilePage;
