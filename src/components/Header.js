import {Button, Img, Text} from "./index";
import {Heading} from './Heading';
import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Header({...props}) {
    const navigate = useNavigate();
    return (
        <header
            {...props}
            className={`${props.className} bg-white-a700 shadow-lg flex justify-center items-center py-[38px] px-[20px] sm:py-5`}
        >
            <div className="flex items-center w-full justify-between gap-5 md:flex-col self-stretch">
                <Img
                    src="images/img_header_logo.png"
                    alt="Headerlogo"
                    className="h-[86px] w-[306px] object-contain"
                />
                <div className="flex items-center gap-[22px] sm:flex-col">
                    <ul className="flex flex-wrap gap-[22px]">
                        <li>
                            <a href="#">
                                <Text as="p">Home</Text>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Text as="p">Products</Text>
                            </a>
                        </li>
                        <li>
                            <Link to="/seventeen">
                                <Text as="p">My Children</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <Text as="p">About</Text>
                            </Link>
                        </li>
                    </ul>
                    <Button
                        onClick={()=>{
                            navigate('/assest');
                        }}
                        shape="round"
                        rightIcon={
                            <Img
                                src="images/streamline_ai-technology-spark-solid.svg"
                                alt="Streamline:ai-technology-spark-solid"
                                className="h-[18px] w-[18px]"
                            />
                        }
                        className="min-w-[162px] gap-3 font-quicksand"
                    >
                        AI Assist
                    </Button>
                </div>
                <div className="flex items-center gap-3">
                    <Img
                        src="images/img_ellipse_3.png"
                        alt="Image"
                        className="h-[54px] w-[54px] rounded-[26px] object-cover"
                    />
                    <Heading size="headings" as="h6" className="!font-quicksand">
                        Jessica
                    </Heading>
                </div>
            </div>
        </header>
    );
}


