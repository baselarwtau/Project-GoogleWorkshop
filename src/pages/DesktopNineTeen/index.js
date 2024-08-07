import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DesktopnineteenColumn from "./DesktopnineteenColumn";
import GiftTabs from "../../components/GiftTabs";
import React from "react";

export default function DesktopNineteenPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-[98px] bg-white-a700 md:gap-[73px] sm:gap-[49px]">
                <div className="container-xs mt-[38px] md:px-5">

                </div>

                <div className="self-stretch">
                    <div className="flex flex-col items-center">
                        <DesktopnineteenColumn />
                        <GiftTabs />
{/*

                        <div className="flex flex-col items-center self-stretch">
                        <div style={{ }} className="w-full mt-[50px] ">
                            <div className="flex justify-center md:flex-col">
                                <div className="relative ml-[-2px] flex flex-1 md:ml-0 md:flex-col md:self-stretch md:px-5">
                                    <Button
                                        color="white_A700"
                                        size="6xl"
                                        shape="square"
                                        className="min-w-[360px] border border-solid border-black-900 font-bold"
                                    >
                                        About
                                    </Button>
                                </div>
                                <div className="relative ml-[-2px] flex flex-1 md:ml-0 md:flex-col md:self-stretch md:px-5">
                                    <Button
                                        color="white_A700"
                                        size="6xl"
                                        shape="square"
                                        className="w-full border border-solid border-black-900 font-bold"
                                    >
                                        Gift List (31)
                                    </Button>

                                </div>
                                <div className="relative ml-[-2px] flex flex-1 w-full items-center justify-center gap-[11px] border border-solid border-black-900 bg-white-a700 p-[22px] md:ml-0 sm:p-5">
                                    <Heading size="headingmd" as="h2" className="self-end">
                                        Suggestions
                                    </Heading>
                                    <Img
                                        src="images/streamline_ai-technology-spark-solid.svg"
                                        alt="Streamlineait"
                                        className="h-[22px] w-[22px]"
                                    />
                                </div>
                                <div className="relative ml-[-2px] flex flex-1 md:ml-0 md:flex-col md:self-stretch md:px-5">
                                    <Button
                                        color="black_900"
                                        size="6xl"
                                        shape="square"
                                        className="relative ml-[-4px] min-w-[364px] border border-solid border-black-900 font-bold md:ml-0"
                                    >
                                        Child will like
                                    </Button>
                                </div>

                            </div>
                        </div>
                        </div>
*/}

                        <div className="container-xs mt-[42px] px-14 md:px-5">
                            <Text
                                size="text3xl"
                                as="p"
                                className="text-justify leading-[43px]"
                            >
                                Mike would love gifts that fuel his adventurous spirit and
                                imaginative mind. Consider outdoor gear like a new bike or
                                camping equipment, strategy board games to challenge his mind,
                                action-themed movie merchandise, and fantasy books that
                                transport him to magical worlds. These gifts will keep him
                                engaged, active, and excited.
                            </Text>
                        </div>
                    </div>
                </div>
                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
