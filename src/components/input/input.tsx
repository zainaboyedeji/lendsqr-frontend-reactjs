import React from "react";
import clsx from "clsx";
import { ErrorMessage, useField } from "formik";
import humanize from "../../utils/humanize";
import "./input.scss";

export const InputField = (props) => {
  const { name, label } = props;
  const [field, meta] = useField(props);
  return (
    <div className="appInputWrap">
      {label ? <label>{label}</label> : ""}
      <input
        {...field}
        {...props}
        className={clsx(props.className, {
          "input-error": meta.touched && meta.error,
        })}
      />
      {name === "password" ? <span>SHOW</span> : ""}
      <ErrorMessage name={name}>
        {(message) => <div className="error-message">{humanize(message)}</div>}
      </ErrorMessage>
    </div>
  );
};

interface SelectFieldProps {
  name: string;
  label?: string;
  options: Array<{
    id: number | string;
    name: string;
  }>;
  defaultValue?: string;
  className?: string;
  required?: boolean;
}

export const SelectField = (props: SelectFieldProps) => {
  const [field, meta] = useField(props);
  const { name, label, options, defaultValue } = props;
  return (
    <div className="appInputWrap">
      {label ? <label>{label}</label> : ""}

      <select
        {...field}
        {...props}
        className={clsx(props.className, {
          "input-error": meta.touched && meta.error,
        })}
        defaultValue={""}
      >
        <option key={"0"} value="" selected disabled>
          {defaultValue}
        </option>
        {options.map((data) => {
          return (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          );
        })}
      </select>
      <ErrorMessage name={name}>
        {(message) => <div className="error-message">{humanize(message)}</div>}
      </ErrorMessage>
    </div>
  );
};
