import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import DesktoptwelveRow from "./DesktoptwelveRow";
import React from "react";

export default function Registration() {
    return (
        <>
            <Helmet>
                <title>GiftFlow&#39;s Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
                <div className="container-xs mt-[38px] md:px-5">
                    <Header />
                </div>
                <div className="self-stretch bg-amber-200_01 py-[42px] md:py-5">
                    <DesktoptwelveRow />
                </div>
            </div>
        </>
    );
}
