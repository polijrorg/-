import React from "react";

type DropDownProps = {
  label: string;
  value: string | number;
  options: string[] | number[];
  onChange: React.Dispatch<React.SetStateAction<string | number>>;
  width?: number;
  disableSelectAll?: boolean;
  editable?: boolean;
};

// safada
// ...
// oi, bb

declare const DropDown: React.FC<DropDownProps>;

export default DropDown;
