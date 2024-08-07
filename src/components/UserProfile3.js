import { Text, Radio } from "./index";
import React from "react";

export default function UserProfile3({
                                         userDescription = "Outdoor activities and sports",
                                         ...props
                                     }) {
    return (
        <div
            {...props}
            className={`${props.className} flex items-center gap-5 px-[18px] py-4 bg-white-a700 flex-1 rounded-[18px]`}
        >
            <Radio value="group11471" name="group1147"/>
            <Text as="p">{userDescription}</Text>
        </div>
    );
};