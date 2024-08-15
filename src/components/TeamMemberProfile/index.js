import { Text, Heading, Img } from "../index";
import React from "react";

export default function TeamMemberProfile({
                                              teamMemberName = "Team Member",
                                              teamMemberEmail = "hello@gmail.com",
                                              myurl = "images/getAllByDisplayValue.jpg",
                                              ...props
                                          }) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-[24%] md:w-full`}>
            <div className="flex flex-col items-center self-stretch">
                <Img
                    src= {myurl} 
                    alt="Team Member"
                    className="relative z-[11] h-[136px] w-[136px] rounded-[68px] object-cover"
                />
                <div className="relative mt-[-92px] flex flex-col items-center gap-7 self-stretch rounded-[26px] bg-white-a700 p-[22px] shadow-sm sm:p-5">
                    <Heading
                        size="heading4xl"
                        as="h3"
                        className="self-stretch  mt-[98px] text-center pl-5 pr -5 font-quicksand font-semibold leading-[33px]"
                    >
                        {teamMemberName}
                    </Heading>
                    <Text as="p" className="font-quicksand">{teamMemberEmail}</Text>
                </div>
            </div>
        </div>
    );
}