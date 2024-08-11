import {Button, Img, Text} from "./index";
import {Heading} from './Heading';
import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

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
                <Link to={userInfo?.uid ? '/children' : "/home"}>
                    <Img
                        src="images/img_header_logo.png"
                        alt="Headerlogo"
                        className="h-[86px] w-[306px] object-contain"
                    />
                </Link>
                {/*  <div className="flex items-center gap-[22px] sm:flex-col">
                    <ul className="flex flex-wrap gap-[22px]">
                        <li>
                            <NavLink to={userInfo?.uid? '/children': "/home"}>
                                <Text as="p">Home</Text>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">
                                <Text as="p">Products</Text>
                            </NavLink>
                        </li>
                       {userInfo?.uid? <li>
                            <NavLink to="/children">
                                <Text as="p">My Children</Text>
                            </NavLink>
                        </li> : null}
                        <li>
                            <NavLink to="/about">
                                <Text as="p">About</Text>
                            </NavLink>
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
                </div>*/}

                <div className="flex items-center gap-[22px] sm:flex-col">
                    <ul className="flex flex-wrap gap-[22px]">
                        {!userInfo?.uid ? <li>
                            <NavLink
                                to='/home'
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p">Home</Text>
                            </NavLink>
                        </li> : <li>
                            <NavLink
                                to="/children"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p">My Children</Text>
                            </NavLink>
                        </li>}
                        <li>
                            <NavLink
                                to="/product"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p">Products</Text>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({isActive}) =>
                                    `px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-gray-400'}`
                                }
                            >
                                <Text as="p">About</Text>
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink
                        to="/assest"
                        className={({isActive}) =>
                            `flex items-center min-w-[162px] gap-3 px-4 py-2 rounded ${isActive ? 'bg-amber-200 text-black' : 'text-black'}`
                        }
                    >
                        <Img
                            src="images/streamline_ai-technology-spark-solid.svg"
                            alt="Streamline:ai-technology-spark-solid"
                            className="h-[18px] w-[18px]"
                        />
                        <span>AI Assist</span>
                    </NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-blue-500 justify-center">
                        {userInfo?.uid ?
                            <div className="w-10 h-10 rounded-full bg-blue-500 justify-center">
                                <Text
                                    className="text-center text-white-a700 text-2xl">{userInfo?.email.charAt(0)} </Text>
                            </div>
                            : <Button onClick={() => {
                                navigate('/login');
                            }}
                                      color="black_900" shape="round" className="min-w-[130px] font-quicksand">
                                Sign Up
                            </Button>
                        }
                    </div>
                    {/*  <Heading size="headings" as="h6" className="!font-quicksand">
                        Jessica
                    </Heading>*/}


                </div>
            </div>
        </header>
    );
}


