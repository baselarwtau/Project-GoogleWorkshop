import { Text, Img } from "./index";
import React from "react";

export default function UserProfile({
                                        userName = "1",
                                        img="images/img_material_symbol.svg",
                                        userDescription = "Enter the child's information, including age, gender, and preferences.",
                                        ...props
                                    }) {
    return (
        <div {...props} className={`${props.className} flex items-center`}>
            <div className="flex w-full flex-col items-center gap-2">
                <Img src={img} alt="Image" className="h-[116px] w-[116px]" />
                <div className="flex items-center justify-center gap-[22px] self-stretch">
                    <Text size="text8xl" as="p" className="!font-casaygon">
                        {userName}
                    </Text>
                    <Text size="textsm" as="p" className="mb-1.5 w-[84%] self-end leading-6">
                        {userDescription}
                    </Text>
                </div>
            </div>
        </div>
    );
}
