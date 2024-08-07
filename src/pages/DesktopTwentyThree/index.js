import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading, DatePicker, TextArea } from "../../components";

export default function DesktopTwentyThreePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs mb-1 flex flex-col items-center gap-16 px-14 md:px-5 sm:gap-8">
                    <Heading size="heading7xl" as="h1" className="mr-[308px] self-end !font-bold md:mr-0">
                        Create Invite
                    </Heading>
                    <div className="flex w-[80%] justify-center md:w-full">
                        <div className="flex w-full items-start gap-8 md:flex-col">
                            <div className="flex flex-1 flex-col gap-[18px] self-center md:self-stretch">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h2">
                                        Location
                                    </Heading>
                                    <Input size="sm" shape="round" name="location" className="self-stretch" />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h3">
                                        Description (optional)
                                    </Heading>
                                    <TextArea
                                        size="sm"
                                        variant="tarOutlineBlack9003f"
                                        shape="round"
                                        name="textarea"
                                        className="self-stretch"
                                    />
                                </div>
                            </div>
                            <div className="flex w-[38%] flex-col gap-[18px] md:w-full">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h4">
                                        Date
                                    </Heading>
                                    <DatePicker
                                        name="solarcalendarbo"
                                        className="flex gap-[34px] self-stretch rounded-[18px] bg-white-a700 py-5 pr-6 shadow-md sm:pr-5"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h5">
                                        Time
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="time"
                                        placeholder="--:--"
                                        className="self-stretch"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank" rel="noopener noreferrer">
                            <Button color="black_900" size="4xl" shape="round" className="min-w-[332px] font-bold">
                                Create Invite
                            </Button>
                        </a>
                        <Button
                            color="white_A700"
                            size="4xl"
                            shape="round"
                            className="min-w-[142px] border border-solid border-black-900 font-bold"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
