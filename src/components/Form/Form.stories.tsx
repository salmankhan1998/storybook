import React from "react";
import { Meta } from "@storybook/react";
import FormComp, { FormProps } from "./index";

export default { title: "Components/Form", component: FormComp } as Meta;


export const ProfileForm = () => (
    <FormComp
        avatar="/images/accountAvatar.svg"
        username="Name"
        address="0x9a6n02i02jhada"
        name=""
        twitter=""
        bio=""
        setName={() => { }}
        setTwitter={() => { }}
        setBio={() => { }}
        handleChange={() => {
            console.log("Clicked")
        }
        }
    />
)
