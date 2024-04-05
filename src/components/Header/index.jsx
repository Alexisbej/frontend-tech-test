import { Alignment, FlexBox } from "@lumx/react";
import marvel_logo from "../../marvel_logo.png";
import Search from "../Search";

const Header = ({ onSearch }) => (
  <header className="lumx-spacing-padding-big header">
    <FlexBox vAlign={Alignment.spaceBetween} hAlign={Alignment.center}>
      <img width={150} src={marvel_logo} />
      <Search onSearch={onSearch} />
    </FlexBox>
  </header>
);

export default Header;
