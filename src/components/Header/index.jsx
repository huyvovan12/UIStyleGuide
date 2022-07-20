import Button from "../Button";
import Input from "../Input";
import { HeaderCol } from "./styled";

const Header = () => {
  return (
    <HeaderCol span={24}>
      <HeaderCol span={7}>
        <Button $type="secondary" $width="90%">
          Create New Task
        </Button>
      </HeaderCol>
      <HeaderCol span={17} style={{ justifyContent: "flex-end" }}>
        <Input
          placeholder={"Type something to search"}
          $width="500px"
          $height="40px"
        />
        <Button
          $type="secondary"
          $width="100px"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        >
          Search
        </Button>
      </HeaderCol>
    </HeaderCol>
  );
};

export default Header;
