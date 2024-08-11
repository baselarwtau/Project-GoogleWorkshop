import { Heading, Img } from "./index";
import React from "react";

export default function UserProfile1({
                                         userName = "Mike • 14",
                                         userBirthday = "04/10",
                                         obj,
                                         selected,

                                         ...props
                                     }) {

    let textColor = ''
    if(selected){
        textColor = '!text-white-a700'
    }
    let picture = 'images/img_ellipse_4_138x138.png' ;
    if(obj?.picture  ){
        picture = obj?.picture;
    }else if(obj?.gender === 'male' ){
        picture = 'images/img_ellipse_4_138x138.png';
    }else {
        picture = 'images/img_image_1.png';
    }

    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center justify-center gap-3.5 p-[42px] md:p-5 shadow-sm rounded-[26px]`}
        >
            <div className="relative h-[138px] w-[68%]">
                <Img
                    src={picture}
                    alt="Mikefourteen"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[138px] w-full rounded-[68px] object-cover"
                />
            </div>
            <div className="flex flex-col items-center">
                <Heading size="heading4xl" as="h3" className={`!font-semibold ${textColor}`} >
                    {obj?.name}
                </Heading>
                <Heading size="heading6xl" as="h6" className={`!font-semibold ${textColor}`} >
                    {obj?.dob}
                </Heading>
            </div>
        </div>
    );
}
