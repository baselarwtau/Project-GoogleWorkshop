import { Helmet } from "react-helmet";
import { SelectBox, Img, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import ProductProfile from "../../components/ProductProfile1";
import DesktopeighteenColumn from "./DesktopeighteenColumn";
import DesktopeighteenRowTwo from "./DesktopeighteenRowTwo";
import React, { Suspense } from "react";
import { TabPanel, Tabs } from "react-tabs";
import Header from "../../components/Header";

const data = [
    {
        productImage: "images/img_rectangle_17.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_18.png",
        productName: "Three Princesses Set For Girls",
        productPrice: "$24.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_19.png",
        productName: "Fluffy Emoticons, Pair Smiling Heads",
        productPrice: "$34.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_20.png",
        productName: "Special Edition Yellow Fidget Spinner",
        productPrice: "$9.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_17.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_18.png",
        productName: "Three Princesses Set For Girls",
        productPrice: "$24.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_19.png",
        productName: "Fluffy Emoticons, Pair Smiling Heads",
        productPrice: "$34.99",
        saveButtonText: "Saved",
    },
    {
        productImage: "images/img_rectangle_20.png",
        productName: "Special Edition Yellow Fidget Spinner",
        productPrice: "$9.99",
        saveButtonText: "Saved",
    },
];

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function DesktopEighteenPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>

            <div className="flex w-full flex-col items-center bg-white-a700">
                <div className="container-xs mt-[38px] md:px-5">

                </div>
                <Tabs
                    className="mt-[98px] flex flex-col items-center self-stretch"
                    selectedTabClassName=""
                    selectedTabPanelClassName="px-1.5 !relative tab-panel--selected"
                >
                    <DesktopeighteenColumn />
                    <DesktopeighteenRowTwo />
                    <div className="container-xs mt-[60px] md:px-5">
                        {[...Array(3)].map((_, index) => (
                            <TabPanel
                                key={`tab-panel-${index}`}
                                className="absolute justify-center px-1.5"
                            >
                                <div className="w-full">
                                    <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                                        <div className="mx-4 flex gap-3.5 md:mx-0 sm:flex-col ">
                                            <div className="flex w-[16%] items-center justify-between gap-5 rounded-[18px]
                                            bg-white-a700 px-3 py-[18px] shadow-md sm:w-full">
                                                <Text as="p" className="ml-[18px] !text-black-900_7f md:ml-0">
                                                    Price Range
                                                </Text>
                                                <Img
                                                    src="images/img_ouitokenrange.svg"
                                                    alt="Ouitokenrange"
                                                    className="h-[26px] w-[26px]"
                                                />
                                            </div>
                                            <SelectBox
                                                shape="round"
                                                indicator={
                                                    <Img
                                                        src="images/img_checkmark.svg"
                                                        alt="Checkmark"
                                                        className="h-[28px] w-[34px]"
                                                    />
                                                }
                                                name="checkmark"
                                                placeholder="Category"
                                                options={dropDownOptions}
                                                className="w-[16%] gap-4 sm:w-full"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
                                            <Suspense fallback={<div>Loading feed...</div>}>
                                                {data.map((d, index) => (
                                                    <ProductProfile
                                                        {...d}
                                                        key={`desktop-${index}`}
                                                        className="w-[24%] bg-black-900 md:w-full"
                                                    />
                                                ))}
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </Tabs>
                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
