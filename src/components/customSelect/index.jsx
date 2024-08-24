import React from "react";
import { Box, Select } from "@chakra-ui/react";
// import "./style.css";

function CustomSelect({ name, handleSelectedValue, data, placeholder }) {
  return (
    <Select
      name={name}
      placeholder={placeholder}
      onChange={handleSelectedValue}
      size="md"
    >
      {data?.map((item, index) => (
        <option
          key={index}
          value={item?.value || item?.id}
          className="custom-select-option"
        >
          {item.name || item.label}
        </option>
      ))}
    </Select>
  );
}

export default CustomSelect;
