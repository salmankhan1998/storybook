import { DialogProps } from ".";
import ConnectMetaMask from "../MetaMask/ConnectMetaMask";

export const metaMask: DialogProps = {
  children: typeof ConnectMetaMask,
};

export const passport: DialogProps = {
  user: "Alpha user",
  pillTitle: "Bookworm Valley",
  name: "Natalia",
  onClick: () => {
    console.log("Btn onClick !");
  },
};
