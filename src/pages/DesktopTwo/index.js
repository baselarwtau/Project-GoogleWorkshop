import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductProfile from "../../components/ProductProfile";
import DesktoptwoRowOne from "./DesktoptwoRowOne";

const data = [
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
    { productName: "Green Dinosaur Fluffy Toy - Collectible", productPrice: "$12.99", saveButtonText: "Save" },
];

export default function DesktopTwoPage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="flex w-full flex-col items-center bg-white-a700">
                <div className="container-xs mt-[38px] md:px-5">
                    <Header />
                </div>
                <div className="mt-10 flex flex-col items-center gap-[46px] self-stretch">
                    <div className="relative h-[534px] self-stretch">
                        <DesktoptwoRowOne />
                        <Text
                            size="text-xl"
                            as="p"
                            className="absolute bottom-0 left-[4%] m-auto w-[48%] leading-[29px] !text-white-a700"
                        >
                            Discover the ideal gift effortlessly! Our curated collection caters to every child’s interests and
                            preferences. Whether it’s educational toys, creative kits, or pure fun, find the perfect match with
                            our easy-to-use search. Start exploring now and make gift-giving a joy.
                        </Text>
                    </div>
                    <div className="container-xs md:px-5">
                        <div className="grid grid-cols-4 justify-center gap-[30px] px-1.5 md:grid-cols-2 sm:grid-cols-1">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <ProductProfile {...d} key={"desktoptwo" + index} />
                                ))}
                            </Suspense>
                        </div>
                    </div>
                </div>
                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
