import { Helmet } from "react-helmet";
import { Button, TextArea, Heading, Radio, RadioGroup, Text, Img } from "../../components";
import Footer from "../../components/Footer";
import DesktopfourteenColumn from "./DesktopfourteenColumn";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header from "../../components/Header";

export default function ChildrenPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-[98px] bg-white-a700 md:gap-[73px] sm:gap-[49px]">
                <div className="container-xs mt-[38px] md:px-5">

                </div>
                <div className="flex flex-col gap-[262px] self-stretch md:gap-[196px] sm:gap-[131px]">
                    <div className="flex flex-col items-center">
                        <DesktopfourteenColumn />
                        <Tabs
                            className="mt-[92px] flex flex-col items-center gap-10 self-stretch"
                            selectedTabClassName="!text-white-a700 border-black-900 border border-solid bg-black-900"
                            selectedTabPanelClassName="!relative tab-panel--selected"
                        >
                            <TabList className="flex justify-center gap-[-6px] self-stretch md:flex-col">
                                <Tab className="flex h-[80px] flex-row items-center justify-center border border-solid border-black-900 bg-white-a700 px-[33px] text-center text-[21px] font-bold text-white-a700 md:px-5">
                                    About
                                </Tab>
                                <Tab className="flex h-[80px] flex-row items-center justify-center border border-solid border-black-900 bg-white-a700 px-[33px] text-center text-[21px] font-bold text-black-900 md:px-5">
                                    Gift List (31)
                                </Tab>
                                <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank">
                                    <Tab className="flex items-center gap-[11px] p-[22px] md:px-5 sm:p-5">
                                        <div className="self-end">Suggestions</div>
                                        <div className="h-[22px] w-[22px]" />
                                    </Tab>
                                </a>
                                <Tab className="flex h-[80px] flex-row items-center justify-center border border-solid border-black-900 bg-white-a700 px-[33px] text-center text-[21px] font-bold text-black-900 md:px-5">
                                    Child will like
                                </Tab>
                            </TabList>
                            {[...Array(4)].map((_, index) => (
                                <TabPanel key={`tab-panel-${index}`} className="absolute items-center">
                                    <div className="w-full">
                                        <div className="flex flex-col gap-[26px]">
                                            <div>
                                                <div className="rounded-[30px] border border-solid border-black-900 bg-white-a700 p-6 sm:p-5">
                                                    <div className="flex items-center md:flex-col">
                                                        <div className="mb-2.5 flex-1 md:self-stretch">
                                                            <div className="flex flex-col gap-7">
                                                                <div className="flex items-center gap-5">
                                                                    <Img
                                                                        src="images/img_ellipse_6.png"
                                                                        alt="Image"
                                                                        className="h-[90px] w-[90px] rounded-[44px] object-cover"
                                                                    />
                                                                    <Heading as="h3" className="self-end">
                                                                        Mike
                                                                    </Heading>
                                                                </div>
                                                                <div>
                                                                    <div className="flex flex-col gap-1.5">
                                                                        <div className="flex items-center md:flex-col">
                                                                            <div className="flex w-[30%] items-start justify-center gap-[22px] md:w-full">
                                                                                <Img
                                                                                    src="images/img_ion.svg"
                                                                                    alt="Ion"
                                                                                    className="h-[48px] w-[48px]"
                                                                                />
                                                                                <Heading size="heading2xl" as="h4" className="self-center leading-7">
                                                                                    14 years old
                                                                                    <br />
                                                                                    <span className="text-[17px]">Born 04/10/2010</span>
                                                                                </Heading>
                                                                            </div>
                                                                            <div className="flex flex-1 items-start justify-center gap-[17px] px-7 md:self-stretch sm:flex-col sm:px-5">
                                                                                <Img
                                                                                    src="images/img_ic_round_interests.svg"
                                                                                    alt="Icround"
                                                                                    className="h-[54px] w-[54px] sm:w-full"
                                                                                />
                                                                                <Text
                                                                                    size="textxs"
                                                                                    as="p"
                                                                                    className="w-[74%] self-end leading-[22px] sm:w-full sm:self-auto"
                                                                                >
                                                                                    Outdoor activities, Strategy games, Action movies, Fantasy books
                                                                                </Text>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex items-start justify-center sm:flex-col">
                                                                            <div className="flex items-center gap-[21px]">
                                                                                <Img
                                                                                    src="images/img_icons8_gender.svg"
                                                                                    alt="Icons & gender"
                                                                                    className="h-[52px] w-[52px]"
                                                                                />
                                                                                <Heading size="heading2xl" as="h5">
                                                                                    Male
                                                                                </Heading>
                                                                            </div>
                                                                            <div className="flex flex-1 items-start gap-[19px] self-center pl-[72px] pr-14 md:px-5 sm:self-stretch">
                                                                                <Img
                                                                                    src="images/img_icon_park_solid_sport.svg"
                                                                                    alt="Icon parks solid"
                                                                                    className="h-[48px] w-[48px]"
                                                                                />
                                                                                <Text
                                                                                    size="textxs"
                                                                                    as="p"
                                                                                    className="mt-1 w-[54%] self-end leading-[22px]"
                                                                                >
                                                                                    Biking, Building forts, Imaginative quests
                                                                                </Text>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex w-[40%] flex-col items-start gap-3 self-end md:w-full md:self-auto">
                                                            <Heading size="heading2xl" as="h6">
                                                                About
                                                            </Heading>
                                                            <Text size="textxl" as="p" className="w-full leading-[29px]">
                                                                Mike is an adventurous 14-year-old who loves outdoor activities and exploring new things. He enjoys playing strategy games, watching action-packed movies, and reading fantasy books. His weekends are filled with biking, building forts, and embarking on imaginative quests.
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-1 flex flex-col items-start md:mx-0">
                                                <Heading size="headingxl" as="h5">
                                                    Preferences
                                                </Heading>
                                                <Heading size="heading5xl" as="h3" className="ml-2 mt-[52px] md:ml-0">
                                                    What kind of games interest them?
                                                </Heading>
                                                <RadioGroup name="group857" className="mx-11 mt-[26px] flex flex-col self-stretch gap-[14px] md:mx-0 md:w-full">
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioOne" name="radioOne" value="strategy" />
                                                        <label htmlFor="radioOne">Strategy</label>
                                                    </div>
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioTwo" name="radioTwo" value="action" />
                                                        <label htmlFor="radioTwo">Action</label>
                                                    </div>
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioThree" name="radioThree" value="puzzle" />
                                                        <label htmlFor="radioThree">Puzzle</label>
                                                    </div>
                                                </RadioGroup>
                                                <Heading size="heading5xl" as="h3" className="ml-2 mt-[32px] md:ml-0">
                                                    Favorite activities?
                                                </Heading>
                                                <RadioGroup name="group859" className="mx-11 mt-[26px] flex flex-col self-stretch gap-[14px] md:mx-0 md:w-full">
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioFour" name="radioFour" value="biking" />
                                                        <label htmlFor="radioFour">Biking</label>
                                                    </div>
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioFive" name="radioFive" value="building" />
                                                        <label htmlFor="radioFive">Building forts</label>
                                                    </div>
                                                    <div className="flex gap-2.5 items-center md:w-full">
                                                        <Radio id="radioSix" name="radioSix" value="quests" />
                                                        <label htmlFor="radioSix">Imaginative quests</label>
                                                    </div>
                                                </RadioGroup>
                                                <Heading size="heading5xl" as="h3" className="ml-2 mt-[32px] md:ml-0">
                                                    Book preferences?
                                                </Heading>
                                                <TextArea
                                                    placeholder="Share any specific book preferences or interests."
                                                    className="border border-solid border-black-900 rounded-[10px] h-[100px] md:w-full mt-4"
                                                />
                                                <Button
                                                    shape="round"
                                                    className="mt-[30px] min-w-[162px] gap-3 font-quicksand"
                                                >
                                                    Save Changes
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
                <Footer className="mt-[1660px] self-stretch" />
            </div>
        </>
    );
}
