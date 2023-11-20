import { NavbarProps } from ".";

export const NavbarDefault: NavbarProps = {
  loggedIn: false,
  handleLogin: () => {
    console.log("get started onClick !");
  },
  handleWallet: () => {
    console.log("wallet clicked !");
  },
};
