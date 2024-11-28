import React from "react";
import { Meta } from "@storybook/react";
import FormComp from "./index";

export default { title: "Components/Form", component: FormComp } as Meta;


export const ProfileForm = () => (
    <FormComp
        avatar="https://images.unsplash.com/photo-1670918346745-248c1a10b79d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
