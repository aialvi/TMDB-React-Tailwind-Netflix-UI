import React from "react";
import { HeaderContainer } from "./Header.styles";

function Header() {
  return (
    <HeaderContainer>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </HeaderContainer>
  );
}

export default Header;
