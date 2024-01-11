import React from 'react';
import {DropdownButton, Dropdown } from 'react-bootstrap';
import { IoGrid } from "react-icons/io5";
import { LuText } from "react-icons/lu";

const FranchisesHeader = () => {
  return (
    <div className="px-5 d-flex justify-content-between align-items-center">
        <div className="d-flex">
            <h2 className="me-2 fw-bold">Famous Franchises</h2>
            <DropdownButton className=" border border-3 rounded-3 d-none d-md-block " variant='bg-body' title="Genres" id="dropdownMenuButton" >
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </DropdownButton>
        </div>
        <div className='d-none d-lg-block'>
            <LuText className='fs-2 px-1 border border-2 text-white-50' />
            <IoGrid className='fs-2 px-1 border border-2 text-white-50' />
        </div>
    </div>
  );
};

export default FranchisesHeader;
