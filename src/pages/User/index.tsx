import React from "react";
import AppCard from "../../components/appcard/index";
import AppTable from "../../components/apptable/index.tsx";
import Icon from "../../images/usersIcon/icon.png";
import Icon1 from "../../images/usersIcon/icon1.png";
import Icon2 from "../../images/usersIcon/icon2.png";
import Icon3 from "../../images/usersIcon/icon3.png";
import ellipsis from "../../images/ellipsis.png";
import viewuser from "../../images/view-user.png";
import activateuser from "../../images/activate-user.png";
import blacklistuser from "../../images/blacklist-user.png";
import { SelectField } from "../../components/input/input.tsx";
import clsx from "clsx";
import { Pagination } from "antd";
import "./index.scss";
import { Popover } from "antd";
import { Formik } from "formik";

const content = (
  <div className="p-2 viewPopper">
    <div>
      <img src={viewuser} className="inline mr-2" alt="View User" />
      <p className="inline">View Details</p>
    </div>
    <div className="mt-2">
      <img src={blacklistuser} className="inline mr-2" alt="Blacklist User" />
      <p className="inline">Blacklist User</p>
    </div>
    <div className="mt-2">
      <img src={activateuser} className="inline mr-2" alt="Activate User" />
      <p className="inline">Activate User</p>
    </div>
  </div>
);

const columns = [
  { header: "ORGANIZATION", accessor: "organization" },
  { header: "USERNAME", accessor: "username" },
  { header: "EMAIL", accessor: "email" },
  { header: "PHONE NUMBER", accessor: "phonenumber" },
  { header: "DATE JOINED", accessor: "datejoined" },
  { header: "STATUS", accessor: "status" },
  { header: "", accessor: "action" },
];

const data = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: (
      <Popover placement="bottom" content={content} trigger="click">
        <img src={ellipsis} alt="ellipsis" className="mr-3" />
      </Popover>
    ),
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Pending",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Blacklisted",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Active",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji@lendsqr.com",
    phonenumber: "09098878909",
    datejoined: "May 15,2020 10:00 AM",
    status: "Inactive",
    action: <img src={ellipsis} alt="ellipsis" />,
  },
];

let transformData = data.map((item) => {
  const status = (
    <button
      className={clsx({
        "status-inactive": item.status === "Inactive",
        "status-pending": item.status === "Pending",
        "status-blacklisted": item.status === "Blacklisted",
        "status-active": item.status === "Active",
      })}
    >
      {item.status}
    </button>
  );
  return { ...item, status };
});

const User = () => {
  return (
    <div className="userMain">
      <h6 className="pb-6">Users</h6>
      <div className="w-full flex justify-between flex-wrap">
        <AppCard title="USERS" number="2,453" icon={Icon} />
        <AppCard title="ACTIVE USERS" number="2,453" icon={Icon3} />
        <AppCard title="USERS WITH LOANS" number="12,453" icon={Icon2} />
        <AppCard title="USERS WITH SAVINGS" number="102,45334" icon={Icon1} />
      </div>
      <div className="mt-12 tableSection">
        <AppTable columns={columns} data={transformData} />

        <div className="flex justify-between mt-6">
          <div className="showSelect flex">
            <p >Showing</p>
            <div >
              <Formik
                initialValues={{
                  name: "",
                }}
                onSubmit={() => {}}
              >
                <SelectField
                  name="name"
                  options={[
                    { id: "1", name: "bn" },
                    { id: "2", name: "ish" },
                  ]}
                  className="bg-gray-100 mr-2 ml-2"
                />
              </Formik>
            </div>
            <p>out of 100</p>
          </div>
          <Pagination
            defaultCurrent={1}
            total={50}
            className="paginationStyle"
          />
        </div>
      </div>
    </div>
  );
};

export default User;
