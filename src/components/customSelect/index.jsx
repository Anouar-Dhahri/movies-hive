import React from "react";
import { Select } from "@chakra-ui/react";

function CustomSelect({ name, handleSelectedValue, data, placeholder }) {
  return (
    <Select
      name={name}
      placeholder={placeholder}
      onChange={handleSelectedValue}
      size="md"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
      }}
    >
      {data?.map((item, index) => (
        <option key={index} value={item?.value || item?.id}>
          {item.name || item.label}
        </option>
      ))}
    </Select>
  );
}

export default CustomSelect;
