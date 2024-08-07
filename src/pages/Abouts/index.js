import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DesktoptwentyfourColumnOne from "./DesktoptwentyfourColumnOne";
import DesktoptwentyfourColumnTwo from "./DesktoptwentyfourColumnTwo";
import React from "react";

export default function About() {
    return (
        <>
            <Helmet>
                <title>GiftFlow&apos;5 Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header />
            <div className="flex w-full flex-col items-center gap-[98px] bg-white-a700 md:gap-[73px] sm:gap-[49px]">
                <div className="container-xs mt-[38px] md:px-5">

                </div>
                <div className="flex flex-col items-center gap-[148px] self-stretch md:gap-[111px] sm:gap-[74px]">
                    <div className="flex flex-col gap-[92px] self-stretch md:gap-[69px] sm:gap-[46px]">
                        <DesktoptwentyfourColumnOne />
                        <DesktoptwentyfourColumnTwo />
                    </div>
                    <div className="container-xs mb-10 md:px-5">
                    {/*    <footer className="mr-[22px] flex bg-amber-200 md:mr-0">
                            <div className="flex items-center justify-center md:flex-col">
                                <Img src="images/img_footer_logo.png" alt="Footer logo" className="h-[86px] w-[306px] object-contain" />
                                <Text as="p" className="ml-[736px] w-[22%] leading-[22px] md:ml-0 md:w-full">
                                    About
                                    <br />
                                    Privacy Policy
                                    <br />
                                    Terms of Use
                                </Text>
                                <ul className="!ml-[90px] flex flex-col items-start md:ml-0">
                                    <li>
                                        <a href="#">
                                            <Text as="p">Facebook</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text as="p">Instagram</Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text as="p">TikTok</Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </footer>*/}
                    </div>
                </div>
                <Footer className="self-stretch" />
            </div>
        </>
    );
}
