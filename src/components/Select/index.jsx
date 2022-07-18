import { CustomSelect } from "./styled";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const Select = ({ children, name, $width }) => {
  //   const [field, meta] = useField("name");
  const [rotate, setRotate] = useState(0);
  return (
    <CustomSelect
      onClick={() => setRotate(rotate + 180)}
      suffixIcon={<DownOutlined rotate={rotate} />}
      $width={$width}
    >
      {children}
    </CustomSelect>
  );
};

export default Select;
