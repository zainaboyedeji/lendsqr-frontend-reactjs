import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import CompanyLogo from "../logo/index";
import { Link } from "react-router-dom";
import Bell from "../../images/bell.png";
import Avatar from "../../images/avatar.png";
import Dropdown from "../../images/dropdown.png";
import hamburger from "../../images/hamburger.png";
import AppMenu from "../appmenu/appmenu.tsx";
import searchIcon from "../../images/search-icon.png";
import "./index.scss";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const AppNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-between w-full px-7 py-8 appNavbar">
        <CompanyLogo className="w-32" />
        <div className="navbarSearch w-1/2 ml-20">
          <Search
            className="w-3/5"
            placeholder="Search for anything"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="flex w-3/12 navbarLast justify-end mr-10 mt-2">
          <div className="hidden searchMobile">
            <img src={searchIcon} alt="SearchIcon" className="w-10 h-10"/>
          </div>
          <Link to="/" className="mr-12">
            Docs
          </Link>
          <div className="">
            <img src={Bell} alt="Bell" className="w-4 h-4 mr-8" />
          </div>
          <img
            src={Avatar}
            alt="Avatar"
            className="w-9 h-9 rounded-full mr-2"
            style={{ marginTop: "-0.5rem" }}
          />
          <div className="flex">
            <p>Adedeji</p>
            <img src={Dropdown} alt="Dropdown" className="w-2 h-2 mt-2 ml-2" />
          </div>
        </div>
      </div>
      <div className="hidden mobileNav">
        <Button type="primary" onClick={showModal}>
          <div>
            <img src={hamburger} alt="hamburger" className="w-9 h-9" />
          </div>
        </Button>
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <AppMenu />
        </Modal>
      </div>
    </>
  );
};

export default AppNavbar;
