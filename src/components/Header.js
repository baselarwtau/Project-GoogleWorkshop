import {Button, Img, Text} from "./index";
import {Heading} from './Heading';
import React from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Header({...props}) {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));

    console.log(userInfo);


    const navigate = useNavigate();
    return (
        <header
            {...props}
            className={`${props.className} bg-white-a700 shadow-lg shadow-black-900 flex justify-center items-center py-[38px] px-[20px] sm:py-5`}
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
                            <Link to="/home">
                                <Text as="p">Home</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product">
                                <Text as="p">Products</Text>
                            </Link>
                        </li>
                        <li>
                            <Link to="/children">
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
                   <div className="w-10 h-10 rounded-full bg-blue-500 justify-center" >
                       <Text className="text-center text-white-a700 text-2xl">{ userInfo?.uid? userInfo?.email.charAt(0) : 'A'} </Text>
                   </div>
                  {/*  <Heading size="headings" as="h6" className="!font-quicksand">
                        Jessica
                    </Heading>*/}
                </div>
            </div>
        </header>
    );
}


