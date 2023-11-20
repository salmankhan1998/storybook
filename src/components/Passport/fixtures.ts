import { PassportProps } from ".";

export const DefaultPassport: PassportProps = {
  user: "user",
  name: "",
  email: "",
  address: "9dx92x94bs73ld90qab8",
  isIterable: false,
  userManagement: false,
  onClick: () => {
    console.log("Clicked !");
  },
  handleUsername: () => {
    console.log("username !");
  },
  handleEmail: () => {
    console.log("email !");
  },
};
