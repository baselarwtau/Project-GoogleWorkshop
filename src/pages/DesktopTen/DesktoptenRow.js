import { Heading } from "../../components";
import React from "react";

export default function DesktoptenRow() {
    return (
        <div className="flex h-[362px] items-start justify-center self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
            <div className="container-xs mb-[52px] flex px-4 md:px-5">
                <Heading as="h1" className="w-[44%] leading-[68px] !text-white-a700">
                    Here's our suggestions based on your answers!
                </Heading>
            </div>
        </div>
    );
}
