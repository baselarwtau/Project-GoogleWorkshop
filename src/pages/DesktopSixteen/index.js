import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, TextArea } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DesktopSixteenPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg"/>
            <div className="flex w-full flex-col items-center bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs mb-1 flex flex-col items-center gap-[66px] px-14 md:px-5 sm:gap-[33px]">
                    <div className="flex w-[80%] flex-col items-center gap-16 md:w-full sm:gap-8">
                        <Heading size="heading7xl" as="h1" className="!font-bold">
                            Add Gift
                        </Heading>
                        <div className="flex items-center gap-8 self-stretch md:flex-col">
                            <div className="flex flex-1 flex-col gap-[18px] md:self-stretch">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h2">
                                        Product Name*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="name"
                                        placeholder="e.g. Fluffy Penguin Toy"
                                        className="self-stretch"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h3">
                                        Description (optional)
                                    </Heading>
                                    <TextArea
                                        size="md"
                                        variant="tarOutlineBlack9003f"
                                        shape="round"
                                        name="description"
                                        placeholder="e.g. Color preferences, options, etc."
                                        className="self-stretch text-black-900_7f"
                                    />
                                </div>
                            </div>
                            <div className="w-[38%] md:w-full">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h4">
                                        Price*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="price"
                                        placeholder="e.g. $30.00"
                                        className="self-stretch"
                                    />
                                </div>
                                <div className="mt-[18px] flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h5">
                                        Purchase Link*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="purchaseLink"
                                        placeholder="e.g. www.toysrus.com"
                                        className="self-stretch"
                                    />
                                </div>
                                <div className="mt-12 flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h6">
                                        Image (optional)
                                    </Heading>
                                    <Button
                                        color="black_900"
                                        size="3xl"
                                        className="min-w-[208px] rounded-[18px] h-[66px] font-bold shadow-md"
                                    >
                                        + Upload Image
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                            <Button
                                color="black_900"
                                size="4xl"
                                shape="round"
                                className="min-w-[332px] h-[66px] font-bold"
                            >
                                Save Changes
                            </Button>
                        </a>
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                            <Button
                                color="white_A700"
                                size="4xl"
                                shape="round"
                                className="min-w-[142px] h-[66px] border border-solid border-black-900 font-bold"
                            >
                                Cancel
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer className="self-stretch"/>
        </>
    );
}
