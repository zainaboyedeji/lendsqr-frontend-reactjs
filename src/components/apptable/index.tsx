import React from "react";
import filter from "../../images/filter.png";
import { InputField, SelectField } from "../input/input.tsx";
import { Popover } from "antd";
import { Formik } from "formik";
import "./index.scss";

const handleClick = () => {
  console.log("Button clicked!");
};

const content = (
  <Formik
    initialValues={{
      username: "",
      organization: "",
      email: "",
      date: "",
      phonenumber: "",
      status: "",
    }}
    onSubmit={handleClick}
  >
    <div className="whatsPoppin">
      <div className="mb-5">
        <h6>Organization</h6>
        <SelectField
          name="name"
          options={[
            { id: "1", name: "bn" },
            { id: "2", name: "ish" },
          ]}
        />
      </div>

      <div className="mb-5">
        <h6>Username</h6>
        <InputField
          type="text"
          name="username"
          placeholder={`User`}
          className="rounded-md"
        />
      </div>

      <div className="mb-5">
        <h6>Email</h6>
        <InputField
          type="email"
          name="email"
          placeholder={`Email`}
          className="rounded-md"
        />
      </div>
      <div className="mb-5">
        <h6>Date</h6>
        <InputField
          type="date"
          name="date"
          placeholder={`Date`}
          className="rounded-md"
        />
      </div>
      <div className="mb-5">
        <h6>Phone Number</h6>
        <InputField
          type="number"
          name="number"
          placeholder={`Phone Number`}
          className="rounded-md"
        />
      </div>

      <div className="mb-5">
        <h6>Status</h6>
        <SelectField
          name="status"
          options={[
            { id: "1", name: "Active" },
            { id: "2", name: "Inactive" },
          ]}
        />
      </div>
      <div className="popperButtons flex justify-between w-full">
        <button className="resetButton w-2/5">Reset </button>
        <button className="filterButton w-2/5">Filter </button>
      </div>
    </div>
  </Formik>
);

const AppTable = ({ columns, data }) => {
  return (
    <div className="w-full bg-white shadow-md p-5 tableDiv">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>
                <div className="flex tableTh">
                  <h6>{column.header}</h6>
                  {column.accessor === "action" ? (
                    ""
                  ) : (
                    <Popover
                      placement="bottom"
                      content={content}
                      trigger="click"
                      rootClassName="whatsPoppin"
                    >
                      <img
                        src={filter}
                        className="pl-2 w-6 h-3 mt-1 ml-2"
                        alt="filter"
                      />
                    </Popover>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="mt-5">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppTable;
