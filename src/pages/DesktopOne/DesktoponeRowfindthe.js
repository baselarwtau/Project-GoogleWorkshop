import {Img, Button, Heading, Text} from "../../components";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function DesktoponeRowfindthe() {
    const navigate = useNavigate();
    return (
        <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 items-center justify-center bg-amber-200_01 md:relative md:flex-col">
            <div className="mb-[30px] flex w-[54%] flex-col items-start gap-[225px] self-end md:w-full md:gap-[142px] md:self-auto md:px-5 sm:gap-[95px]">
                <Heading as="h1" className="w-[92%] leading-[68px] md:w-full">
                    Find the Perfect Gift for Every Child, Every Time
                </Heading>
                <Button
                    onClick={()=>{
                        navigate('/login');
                    }}
                    color="black_900"
                    shape="round"
                    rightIcon={
                        <div className="flex h-[18px] w-[18px] items-center justify-center bg-black-900">
                            {/* <Img src="images/img_profile.svg" alt="Profile" className="h-[18px] w-[18px]" /> */}
                        </div>
                    }
                    className="min-w-[246px] gap-2 font-quicksand"
                >
                    Find the Perfect Gift
                </Button>
            </div>
            <Img
                src="images/img_image_1.png"
                alt="Imageone"
                className="h-[496px] w-[42%] object-contain md:w-full"
            />
        </div>
    );
}
