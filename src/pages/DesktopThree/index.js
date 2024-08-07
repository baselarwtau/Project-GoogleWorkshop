import { Helmet } from "react-helmet";
import Header from "../../components/Header"; // Fixed path
import DesktopthreeRow from "./DesktopthreeRow";
import React from "react";

export default function DesktopThreePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
                <DesktopthreeRow />
            </div>
        </>
    );
}
