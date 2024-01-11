import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { HiPencilSquare } from "react-icons/hi2";

const EditProfile = ({showHome}) => {
  return (
        <div className="w-50 mx-auto mt-2 py-5 ps-5 d-grid fw-bold">
            <h1 className="fw-bolder mt-5 pt-5">Edit Profile</h1>
            <Row className="py-4 border border-start-0 border-end-0 mb-5 fs-4">
                <Col sm={3}>
                <div className="card">
                    <img className="w-100" src="assets/avatar.png" alt="avatar" />
                    <div className="card-img-overlay">
                    <HiPencilSquare className="fs-1 rounded-circle bg-black py-1 px-2 border border-light border-2" />
                    </div>
                </div>
                </Col>
                <Col sm={9}>
                <p className="bg-body-secondary mb-5 w-75 p-3">Mario Rossi</p>
                <h3 className="text-white-50">Language:</h3>
                <Form.Select className="form-select form-select-sm bg-black w-25 fs-4" aria-label="Small select example">
                    <option defaultValue={0}>English</option>
                    <option value="1">Twi</option>
                    <option value="2">Ferrarese</option>
                    <option value="3">Romano</option>
                </Form.Select>
                <div className="border border-start-0 border-end-0 py-4 my-4">
                    <h3 className="text-white-50">Maturity settings:</h3>
                    <h4 className="py-3 text-center bg-body-tertiary my-4 w-50">ALL MATURITY RATINGS</h4>
                    <p>Show titles of all maturity ratings for this profile</p>
                    <Button variant="outline-secondary" className="py-2 px-4 fs-4 my-3">EDIT</Button>
                </div>
                <h3 className="text-white-50">Autoplay Controls</h3>
                <Form.Check readOnly className="d-flex align-items-center" type="checkbox" id="flexCheckChecked1" label="Autoplay next episode in a series on all devices." checked />
                <Form.Check readOnly className="d-flex align-items-center" type="checkbox" id="flexCheckChecked2" label="Autoplay previews while browsing on all devices." checked />
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                <Button variant="outline-secondary" onClick={()=>showHome()}className="py-3 px-5 me-5 bg-white fs-2">SAVE</Button>
                </Col>
                <Col sm={3}>
                <Button variant="outline-secondary" onClick={()=>showHome()}  className="py-3 px-5 mx-5 fs-2">CANCEL</Button>
                </Col>
                <Col sm={6}>
                <Button variant="outline-secondary" className="py-3 px-5 fs-2 ms-5">DELETE PROFILE</Button>
                </Col>
            </Row>
        </div>
  );
};

export default EditProfile;
