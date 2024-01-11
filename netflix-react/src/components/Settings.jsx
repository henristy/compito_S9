import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { HiPencilSquare } from "react-icons/hi2";
import { BsBadge8K } from "react-icons/bs";

const Settings = () => {
    return (
        <div className="container d-grid">
            <h1 className="my-5 pt-3">Account</h1>

            <div className="row border border-start-0 border-end-0">
                <Col sm={4}>
                    <h4 className=" my-3 opacity-25">MEMBERSHIP & BILLING</h4>
                    <Button type="button" variant="secondary" className="px-5 py-2 border-bottom">
                        Cancel Membership
                    </Button>
                </Col>

                <Col sm={8} className=''>
                    <div className="py-3">
                        <p className="fw-bold d-flex justify-content-between"> student@strive.school
                            <span variant='primary'className="fw-bold text-decoration-none text-primary" >Change account email</span>
                        </p>
                        <p className="text-white-50 d-flex justify-content-between">Password: *************
                            <span variant='primary'className="fw-bold text-decoration-none text-primary" >Change password</span>
                        </p>
                        <p className="text-white-50 d-flex justify-content-between ">Phone: 321 044 1279
                            <span variant='primary'className="fw-bold text-decoration-none text-primary" >Change phone number</span>
                        </p>
                    </div>

                    <div className="py-3 border-top border-bottom">
                        <p className="fw-bold d-flex justify-content-between">
                            <span><HiPencilSquare className="me-2 fs-1" /> Paypal admin@strive.school</span>
                            <span variant='primary'className="fw-bold text-decoration-none text-primary" >Update payment info</span>
                        </p>
                        <span variant='primary'className="text-end d-block fw-bold text-decoration-none text-primary" >Billing details</span>
                    </div>

                    <p variant='primary'className="text-end d-block fw-bold text-decoration-none text-primary mt-3" >Redeem gift card or promo code</p>
                    <p variant='primary'className="text-end d-block fw-bold text-decoration-none text-primary mb-3" >Where to buy gift cards</p>
                </Col>
            </div>

            <div className="row">
                <Col sm={4}><h4 className="h3 opacity-25">PLAN DETAILS</h4></Col>

                <Col className=''>
                    <p className="fw-bold d-flex justify-content-between align-items-center">
                        <span>Premium <BsBadge8K className="fs-3 me-2" /></span>
                        <span variant='primary'className="fw-bold text-decoration-none text-primary" >Change plan</span>
                    </p>
                </Col>
            </div>

            <div className="row border-top py-3">
                <Col sm={4}><h4 className="h3 opacity-25 align-content-center">MY PROFILE</h4></Col>

                <Col>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Parental controls</p>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Test participation</p>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Manage download devices</p>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" > Activate a device</p>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Recent device streaming activity</p>
                    <p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Sign out of all devices</p>
                </Col>
            </div>

            <div className="row border-top py-3">
                <Col sm={4}><h4 className="h3 opacity-25">SETTINGS</h4></Col>

                <Col className='pe-0'>
                    <p className="fw-bold d-flex justify-content-between">
                        <span>
                            <img style={{ width: '50px', height: '50px', marginRight: '10px' }} src="assets/avatar.png" alt="pfp" />
                            Strive Student
                        </span>
                        <span>
                            <span variant='primary'className="fw-bold text-decoration-none text-primary" >Manage profiles</span>
                            <span variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Add profile email</span>
                        </span>
                    </p>

                    <Row>
                        <Col sm={6}><p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Language</p></Col>
                        <Col sm={6}><p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Viewing activity</p></Col>
                        <Col sm={6}><p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Playback settings</p></Col>
                        <Col sm={6}><p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Ratings</p></Col>
                        <Col sm={6}><p variant='primary'className="fw-bold text-decoration-none text-primary d-block" >Subtitle apppearance</p></Col>
                    </Row>
                </Col>
            </div>
        </div>
    );
};

export default Settings;
