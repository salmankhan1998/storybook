import React, { useEffect, useRef, useState } from "react";
import { Typography, Button } from "@mui/material";
import IPFSForm from "./ipfs";
import { utils, BigNumber } from "ethers";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Profile = ({ contract, account }) => {
  const [passportNumber, setPassportNumber] = useState();
  const [passportId, setPassportId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState("");
  const [isActive, setIsActive] = useState();
  const [isActiveParent, setIsActiveParent] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const selectedBoxRef = useRef();

  const mintPassport = async () => {
    try {
      const res = await contract.mint(account, userName, email, {
        from: account,
        gasLimit: 210000,
      });

      const Transaction = await res.wait();
      console.log("Transaction=", Transaction);
      setPassportNumber(res);
      getUserPassport();
    } catch (error) {
      console.log("mint passport error", error.message);
    }
  };
  const deselectArticle = async () => {
    setSelectedArticle("");
    setIsActive(null);
    setIsActiveParent(null);
    console.log("deselected");
  };
  const selectParent = async () => {
    setIsActiveParent(isActive);
    setIsActive(null);
  };
  const getPassportId = async (num: any) => {
    console.log("num, =>>", num);
    const res = await contract.tokenOfOwnerByIndex(account, num);
    console.log("res", res);
    const passport_id = res.toNumber();
    console.log("passport_id", res);
    setPassportId(passport_id);

    const user = await contract.usernameOf(passport_id);
    setUserName(user);
    console.log("username", user);

    const email = await contract.emailOf(passport_id);
    setEmail(email);
    console.log("email", email);

    await getArticles(passport_id);
  };
  const getArticles = async (passport_id: any) => {
    const articles = await contract.articlesOf(passport_id);
    setArticles(articles);
    console.log("articles", articles);
  };
  const getUserPassport = async () => {
    try {
      const res = await contract.balanceOf(account);
      const number = res.toNumber();
      setPassportNumber(number);
      await getPassportId(number - 1);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("get passport erorr = ", error.message);
    }
  };

  useEffect(() => {
    getUserPassport();
  }, []);

  useEffect(() => {
    if (passportNumber) {
      getUserPassport();
    }
  }, [passportNumber]);

  return (
    <div data-testid="Dashboard">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {passportNumber > 0 ? (
        <div>
          <div className="mx-10 my-6 border-2 rounded-md w-96">
            <div className="flex justify-center py-2 bg-slate-200">
              <Typography className="font-extrabold text-gray-500">
                User Profile
              </Typography>
            </div>
            <div className="m-4">
              {passportId && (
                <div className="flex">
                  <div className="font-light"> PASSPORT ID:</div>
                  <Typography className="ml-5 font-light">
                    {passportId}
                  </Typography>
                </div>
              )}
              {userName && (
                <div className="flex">
                  <div className="font-light"> USER NAME:</div>
                  <Typography className="ml-5 font-light">
                    {userName}
                  </Typography>
                </div>
              )}
              {email && (
                <div className="flex">
                  <div className="font-light"> EMAIL:</div>
                  <Typography className="ml-5 font-light">{email}</Typography>
                </div>
              )}
            </div>
          </div>

          {articles && (
            <div className="mx-10 my-6 border-2 rounded-md">
              <div className="flex justify-center py-2 mb-3 bg-slate-200">
                <p className="font-extrabold text-gray-500">Your Articles</p>
              </div>
              <div className={"px-4 py-2"}>
                {articles.map((article, index) => {
                  // @ts-ignore
                  return (
                    <p
                      onClick={() => {
                        setSelectedArticle({ article, id: index });
                        setIsActive(index);
                        setIsActiveParent(null);
                      }}
                      key={index}
                      className={
                        isActive === index
                          ? "bg-gray-500 text-blue-300 mt-2"
                          : isActiveParent === index
                          ? "bg-gray-500 text-red-300 mt-2"
                          : "mt-2"
                      }
                    >
                      {article}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          <IPFSForm
            passportId={passportId}
            account={account}
            contract={contract}
            selectedArticle={selectedArticle}
            getArticles={getArticles}
            deselectArticle={deselectArticle}
            selectParent={selectParent}
          />
        </div>
      ) : (
        <div className="flex flex-col min-h-96 min-w-96">
          <Typography variant="body2">Mint New User Passport</Typography>
          <p>username:</p>
          <input
            className="h-10 p-3 border-2 rounded-md w-96 focus:outline-none"
            onChange={(e) => {
              // @ts-ignore
              setUserName(e.target.value);
            }}
            value={userName}
          />
          <p>email:</p>
          <input
            className="h-10 p-3 border-2 rounded-md w-96 focus:outline-none"
            onChange={(e) => {
              // @ts-ignore
              setEmail(e.target.value);
            }}
            value={email}
          />
          {
            <Button
              variant="text"
              disabled={!email || !userName}
              onClick={mintPassport}
              className="inline-block mt-5 px-6 py-2.5 mb-10 bg-blue-600 text-white-900 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create New Passport
            </Button>
          }
        </div>
      )}
    </div>
  );
};

export default Profile;
