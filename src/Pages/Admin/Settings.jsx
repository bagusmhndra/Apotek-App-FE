import { Breadcrumb, Form, Button, Container } from "react-bootstrap";
import HeaderDashboard from "../../Components/Admin/HeaderDashboard";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <HeaderDashboard />
      <Container className="justify-content-center mt-5">
        <Form className="p-5 flex-column gap-3 shadow">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Dashboard</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Settings</Breadcrumb.Item>
          </Breadcrumb>
          <h2
            className="title-profile fw-bold">
            Settings
          </h2>
          <div className="flex-column flex-sm-row gap-3 gap-sm-5 rounded-2 mb-3 mt-3">
            <div className="flex-column gap-2">
              <Form.Group controlId="formNewPassword" className="mb-3">
                <Form.Label className="fw-semibold">Change Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </Form.Group>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Settings;
