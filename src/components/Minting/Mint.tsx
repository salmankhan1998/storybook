import React, { useState } from "react";
import Image from "next/image";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Passport from "../Passport";
import Typography from "../Typography";

import "./Mint.module.css";

export interface MintingProps {
  username: string;
  email: string;
  setUsername?: Function;
  setEmail?: Function;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Mint: React.FC<MintingProps> = ({
  handleClick,
  username,
  email,
  setUsername,
  setEmail,
}) => {
  // const mintingStart = useAppSelector((state) => state.eth.startMinting);
  // const dispatch = useAppDispatch();
  const [togglebio, setToggleBio] = useState(false);
  const [bio, setBio] = useState("");
  // const eth = useAppSelector((state) => state.eth);
  // const handleUsername = (e: any) => {
  //   const value = e.target.value;
  //   dispatch(UpdateuserName(value));
  // };
  // const handleEmail = (e: any) => {
  //   dispatch(UpdateuserEmail(e.target.value));
  // };
  // const handleMinting = async () => {
  //   dispatch(MintPassport());
  // };
  // const handleChangebio = (e: any) => {
  //   const value = e.target.value;
  //   dispatch(UpdateBio(value));
  // };
  // const handleSave = (e: any) => {
  //   dispatch(SavePassportDetails());
  //   setToggleBio(!togglebio);
  // };
  return (
    <div data-testid="Mint" className="flex flex-col items-center ">
      <div className="my-6">
        {/* <Typography variant="H5" title="Create your passport" /> */}
        <Typography
          className="mb-10"
          fontWeight="bold"
          title="Create your t2 pass"
          variant="H3"
        />
      </div>
      <div className="relative">
        <Passport
          address={'Islamabad'}
          user={"Username"}
          email={"Email"}
          isIterable={true}
          handleUsername={() => { }}
          handleEmail={() => { }}
        />
      </div>
      <div>
        <form className="w-[604px] py-4 flex flex-col items-end">
          <div className="mt-5 mb-5 ">
            {!togglebio && (
              <div
                className="flex items-end text-lg underline cursor-pointer text-black-800 decoration-1"
                onClick={() => setToggleBio(!togglebio)}
              >
                <div className="mr-4 cursor-pointer">
                  <Image src="/images/plus-icon.svg" alt="" width={24} height={24} />
                </div>
                Add bio
              </div>
            )}
            {!togglebio && (
              <div className="mr-3">
                <Image
                  src="/images/edit-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                  onClick={() => setToggleBio(!togglebio)}
                />
              </div>
            )}
          </div>
          {togglebio && (
            <div className="relative flex flex-col w-full mb-3 bg-white-900 border-2 h-90 rounded-xl">
              <div className="self-end h-10 pt-2 pr-10 ">
                <Image
                  src="/cross.svg"
                  alt=""
                  width={24}
                  height={24}
                  onClick={() => setToggleBio(!togglebio)}
                />
              </div>

              <div className="flex flex-col px-10 pt-0 pb-10">
                <div>
                  <label className="block mb-2 text-base font-semibold">
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    value=''
                    onChange={() => { }}
                    className="font-mukta text-base font-normal text-black-900 leading-[24px] border-2 rounded focus:border-white-900 w-full py-4 px-5 "
                  />
                </div>
                <div className="self-end mt-3">
                  <Button
                    size="small"
                    variant="contained"
                    title="save"
                    round="half"
                    // disabled={mintingStart}
                    handleClick={() => { }}
                  />
                </div>
              </div>
            </div>
          )}
          {!togglebio && (
            <p className="w-full align-left text-base leading-[24px] font-normal text-black-900 mb-8">
              Bio
            </p>
          )}

          <Button
            round="half"
            size="small"
            variant="contained"
            title="Mint Passport"
            disabled={false}
            handleClick={() => { }}
          />
        </form>
      </div>
    </div>
  );
};

export default Mint;
