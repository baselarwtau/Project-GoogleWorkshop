import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, SelectBox, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import DesktopSeventeenColumnGift from "./DesktopSeventeenColumnGift";
import DesktopSeventeenRowOne from "./DesktopSeventeenRowOne";
import React, {Suspense, useEffect, useState} from "react";
import { TabPanel, Tabs } from "react-tabs";
import Header from "../../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import {useChild} from "../../context/ChildContext";


const data = [
    {
        productImage: "images/img_rectangle_17.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_18.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_19.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_20.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_17.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_18.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_19.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
    {
        productImage: "images/img_rectangle_20.png",
        productName: "Green Dinosaur Fluffy Toy - Collectible",
        productPrice: "$12.99",
        saveButton: "Saved",
    },
];

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function DesktopSeventeenPage() {
    const [searchBarValue, setSearchBarValue] = useState("");
    const {childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId} = useChild();


    const navigate = useNavigate();

    const getUserFromLocalStorage = () => {
        const userInfo = localStorage.getItem('user-info');
        return userInfo ? JSON.parse(userInfo) : null;
    };

    useEffect(() => {
        const user = getUserFromLocalStorage();

        if (!user) {
            // If user is not found, redirect to the login page
            console.log("User not authenticated, redirecting to login...");
            navigate('/login');
        } else {
            // Optionally handle authenticated state here
            console.log("User authenticated:", user);
        }
    }, [navigate]); // Adding navigate as a dependency ensures that the hook re-runs if navigate changes



    return (
        <>
            <Helmet>
                <title>GiftFlow Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-[98px] bg-white-a700 md:gap-[73px] sm:gap-[49px]">

                <div className="flex flex-col  self-stretch  ">
                    <Tabs
                        className="flex flex-col items-center"
                        selectedTabClassName=""
                        selectedTabPanelClassName="px-1.5 !relative tab-panel--selected"
                    >
                        <DesktopSeventeenRowOne  navigate={navigate} />
                        <DesktopSeventeenColumnGift  />
                        <div className="container-xs mt-[60px] md:px-5">
                            {Array(4).map((_, index) => (
                                <TabPanel key={`tab-panel-${index}`} className="absolute items-center px-1.5">
                                    <div className="w-full">
                                        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                                            <div className="flex justify-center md:flex-col">
                                                <div className="flex flex-1 gap-3.5 px-3 md:flex-col md:self-stretch">
                                                    <Input
                                                        shape="round"
                                                        name="price"
                                                        placeholder="Price Range"
                                                        suffix={
                                                            <Img
                                                                src="images/img_ouitokenrange.svg"
                                                                alt="Oui: token-range"
                                                                className="h-[28px] w-[26px]"
                                                            />
                                                        }
                                                        className="w-[20%] gap-4 md:w-full"
                                                    />
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
                                                        className="w-[20%] gap-4 md:w-full"
                                                    />
                                                    <Input
                                                        shape="round"
                                                        name="search"
                                                        placeholder="Search for a product..."
                                                        value={searchBarValue}
                                                        onChange={(e) => setSearchBarValue(e.target.value)}
                                                        suffix={
                                                            <div className="flex h-[20px] w-[22px] items-center justify-center">
                                                                {searchBarValue.length > 0 ? (
                                                                    <CloseSVG onClick={() => setSearchBarValue("")} height={28} width={22} />
                                                                ) : (
                                                                    <Img
                                                                        src="images/img_search.svg"
                                                                        alt="Search"
                                                                        className="h-[28px] w-[22px] cursor-pointer"
                                                                    />
                                                                )}
                                                            </div>
                                                        }
                                                        className="w-[46%] gap-4 md:w-full"
                                                    />
                                                </div>
                                                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                                                    <Button size="2xl" shape="round" className="min-w-[228px] font-semibold">
                                                        + Add Gift
                                                    </Button>
                                                </a>
                                            </div>
                                            <div className="grid grid-cols-4 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
                                                <Suspense fallback={<div>Loading feed...</div>}>
                                                    {data.map((d, index) => (
                                                        <ProductCard {...d} key={`product-card-${index}`} />
                                                    ))}
                                                </Suspense>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </div>
                    </Tabs>
                    <Footer className="self-stretch" />
                </div>
            </div>
        </>
    );
}
