import { Helmet } from "react-helmet";
import { Img, Text } from "../../components";
import DesktopelevenRowOne from "./DesktopelevenRowOne";
import Header from "../../components/Header";
import React from "react";

export default function Login() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
                <div className="self-stretch bg-amber-200_01 py-[50px] md:py-5">
                    <DesktopelevenRowOne />
                </div>
            </div>
        </>
    );
}
