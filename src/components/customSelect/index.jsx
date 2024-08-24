import React from "react";
import { Box } from "@chakra-ui/react";
import "./style.css";

function CustomSelect({ data }) {
  return (
    <Box className="custom-select">
      <select multiple>
        {data?.map((item, index) => (
          <option key={index} value={item?.value}>
            {item.name}
          </option>
        ))}
      </select>
    </Box>
  );
}

export default CustomSelect;
