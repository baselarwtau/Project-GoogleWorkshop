import React from "react";
import {Helmet} from "react-helmet";
import {Button, Heading, Input} from "../../components";
import DesktoptwentyColumnOne from "./DesktoptwentyColumnOne";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DesktopTwentyPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app"/>
            </Helmet>
            <Header className="bg-white-a700 shadow-lg"/>
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <div
                        className="mr-[46px] flex w-[90%] flex-col items-center gap-[66px] md:mr-0 md:w-full sm:gap-[33px]">
                        <Heading size="heading7xl" as="h1" className="!font-bold font-quicksand">
                            Add Child
                        </Heading>
                        <DesktoptwentyColumnOne/>
                    </div>
                </div>
            </div>

            <Footer className="self-stretch"/>
        </>
    );
}

