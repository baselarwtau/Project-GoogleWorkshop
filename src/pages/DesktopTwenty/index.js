import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Input } from "../../components";
import DesktoptwentyColumnOne from "./DesktoptwentyColumnOne";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DesktopTwentyPage() {
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
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <div
                        className="mr-[46px] flex w-[90%] flex-col items-center gap-[66px] md:mr-0 md:w-full sm:gap-[33px]">
                        <Heading size="heading7xl" as="h1" className="!font-bold font-quicksand">
                            Add Child
                        </Heading>
                        <div className="flex items-start self-stretch md:flex-col">
                            <div className="mt-6 flex flex-1 gap-[34px] md:flex-col md:self-stretch">
                                <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                                    <Heading size="headings" as="h2" className="font-quicksand">
                                        Child Name
                                    </Heading>
                                    <Input size="sm" shape="round" name="name" className="self-stretch"/>
                                </div>
                                <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
                                    <Heading size="headings" as="h3" className="font-quicksand">
                                        Date of Birth
                                    </Heading>
                                    <div
                                        className="flex w-[86%] justify-end rounded-[18px] bg-white-a700 px-[22px] py-5 shadow-md md:w-full sm:px-5">
                                        <Img
                                            src="images/ion_calendar.svg"
                                            alt="Solarcalendar"
                                            className="h-[24px] w-[24px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-[20%] flex-col items-end gap-4 self-center md:w-full">
                                <div className="w-[72%] rounded-[80px] bg-black-900 p-[46px] md:w-full md:p-5">
                                    <Img
                                        src="images/material-symbols_person-add.svg"
                                        alt="Material"
                                        className="h-[66px] w-[66px]"
                                    />
                                </div>
                                <Heading size="headings" as="h4" className="mr-[22px] md:mr-0">
                                    Add Picture
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
                <DesktoptwentyColumnOne/>
            </div>

            <Footer className="self-stretch" />
        </>
    );
}
