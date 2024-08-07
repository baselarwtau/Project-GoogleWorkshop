import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import DesktopsixRowOne from "./DesktopsixRowOne";
import React from "react";

export default function DesktopSixPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow&#39;s Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">

                <DesktopsixRowOne />
            </div>
        </>
    );
}
