import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";
import DesktoptwentytwoRow from "./DesktopTwentyTwoRow";
import ProductProfile2 from "../../components/ProductProfile2";
import Header from "../../components/Header";



const data = [
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saved: "Saved" },
];

export default function DesktopTwentyTwoPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-[90px] bg-white-a700 py-[38px] md: gap-[67px] sm: gap-[45px] sm:py-5">
            <div className="container-xs md:px-5">
                <div className="mb-1 flex flex-col items-center gap-[76px] self-stretch md:gap-[57px] sm:gap-[38px]">
                    <DesktoptwentytwoRow />
                    <div className="container-xs flex flex-col gap-14 md:px-5 sm:gap-7">
                        <Text
                            size="text3xl"
                            as="p"
                            className="relative px-[6.5%] flex-1 text-center leading-[43px] md:ml-0 md:self-stretch"
                        >
                            Mike would love gifts that fuel his adventurous spirit and imaginative mind. Consider outdoor gear like a new bike or camping
                            equipment, strategy board games to challenge his mind, action-themed movie merchandise, and fantasy books that transport him
                            to magical worlds. These gifts will keep him engaged, active, and excited.
                        </Text>
                        <Heading size="heading6xl" as="h2" className="mx-auto mb-0 mt-16">
                            Mike's Gift List
                        </Heading>
                        <div className="relative ml-[22px] mr-[62px] content-end md:mx-0 md:h-auto">
                            <div className="flex h-max flex-1 items-center md:relative md:flex-col">
                                <Button
                                    color="white_A700"
                                    size="3xl"
                                    rightIcon={
                                        <Img
                                            src="images/img_ouitokenrange.svg"
                                            alt="Oui: token range"
                                            className="h-[66px] w-[26px]"
                                        />
                                    }
                                    className="min-w-[222px] gap-[34px] self-end rounded-[18px] !text-black-900_7f shadow-md md:self-auto"
                                >
                                    Price Range
                                </Button>
                            </div>
                        </div>
                        <div className="flex gap-[30px] px-1.5 md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <ProductProfile2 {...d} key={"desktop" + index} />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
