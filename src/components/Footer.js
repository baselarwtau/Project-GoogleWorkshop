import { Text, Img } from "./index";
import React from "react";
import {Link} from "react-router-dom";

export default function Footer({ ...props }) {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));

    console.log(userInfo);
    return (
        <footer
            {...props}
            className={`${props.className} flex justify-center items-center py-[38px] sm:py-5 bg-amber-200`}
        >
            <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                <Link to={userInfo?.uid? '/children': "/home"}>
                <Img
                    src="images/img_footer_logo.png"
                    alt="Footer logo"
                    className="h-[86px] w-[306px] object-contain"
                />
                </Link>
             {/*   <div className="mr-[22px] flex w-[22%] justify-between gap-5 md:mr-0 md:w-full">
                    <ul className="flex w-[70%] flex-col items-start">
                        <li>
                            <a href="About" target="_blank" rel="noreferrer">
                                <Text as="p">About</Text>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Text as="p">Privacy Policy</Text>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Text as="p">Terms of Use</Text>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col items-start">
                        <li>
                            <a href="Facebook" target="_blank" rel="noreferrer">
                                <Text as="p">Facebook</Text>
                            </a>
                        </li>
                        <li>
                            <a href="Instagram" target="_blank" rel="noreferrer">
                                <Text as="p">Instagram</Text>
                            </a>
                        </li>
                        <li>
                            <a href="TikTok" target="_blank" rel="noreferrer">
                                <Text as="p">TikTok</Text>
                            </a>
                        </li>
                    </ul>
                </div>*/}
            </div>
        </footer>
    );
}
