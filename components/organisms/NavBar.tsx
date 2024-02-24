import React from "react";
import {
  PiBellBold,
  PiClockBold,
  PiGearBold,
  PiHouseSimpleBold,
  PiUsersBold,
  PiWalletBold,
} from "react-icons/pi";

import NavBarMenu from "../molecules/NavBarMenu";
import NavBarHeader from "../molecules/NavBarHeader";
import NavBarFooter from "../molecules/NavBarFooter";
import NavBarTemplate from "../templates/NavBarTemplate";

const NavBar: React.FC = () => {
  return (
    <NavBarTemplate header={<NavBarHeader />} footer={<NavBarFooter />}>
      <NavBarMenu
        items={[
          {
            icon: <PiHouseSimpleBold />,
            key: "home",
          },
          {
            icon: <PiBellBold />,
            key: "notifications",
          },
          {
            icon: <PiClockBold />,
            key: "history",
          },
          {
            icon: <PiUsersBold />,
            key: "profile",
          },
          {
            icon: <PiWalletBold />,
            key: "wallet",
          },
          {
            icon: <PiGearBold />,
            key: "settings",
          },
        ]}
        current='home'
      />
    </NavBarTemplate>
  );
};

export default NavBar;
