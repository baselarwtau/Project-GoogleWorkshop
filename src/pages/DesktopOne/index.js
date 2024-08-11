import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import DesktoponeColumnpexelspho from "./DesktoponeColumnpexelspho";
import DesktoponeRowFour from "./DesktoponeRowFour";
import DesktoponeRowfindthe from "./DesktoponeRowfindthe";
import React from "react";

export default function DesktopOnePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex flex-col items-center">
                <div className="relative h-[528px] self-stretch">
                    <DesktoponeRowfindthe />
                    <Text size="textxl" as="p" className="absolute bottom-[27%]  left-[2%] m-auto w-[52%] leading-[29px]">
                        Discover the joy of perfect gifting with our expertly curated selection of children's gifts. Whether
                        it's for a birthday, holiday, or just because, we ensure every present is a delightful surprise,
                        tailored to your child's unique interests. Make every occasion memorable with gifts they'll
                        cherish.
                    </Text>
                </div>
                <div className="container-xs relative z-[2] flex flex-col items-center px-[50px] md:px-5">
                    <Heading  className=" leading-[68px] md:w-full m-auto" as="h3" as="h2">
                        How does it work?
                    </Heading>
                    <div className="mt-4 self-stretch rounded-[42px] bg-amber-200_01 p-5">
                        <div className="mb-7 flex gap-[102px] md:flex-col">
                            <UserProfile userName={1} img={"images/How_works_1.svg"} userDescription={"Enter the child's information, including age, gender, and preferences."} className="w-[36%] md:w-full" />
                            <UserProfile userName={2} img={"images/How_works_2.svg"} userDescription={"Browse tens of gift suggestions from our AI-assisted curation list."}  className="mb-2 mt-3.5 w-[24%] gap-3.5 md:my-0 md:w-full" />
                            <UserProfile userName={3} img={"images/How_works_3.svg"} userDescription={"Click the link to purchase the gift from one of our trusted partner websites."}  className="mb-1.5 mt-3.5 w-[36%] gap-4 md:my-0 md:w-full" />
                        </div>
                    </div>
                    <div className="ml-[186px] mr-[182px] mt-9 flex flex-col items-center justify-center gap-[62px] self-stretch md:mx-0 sm:gap-[31px]">
                        <Heading className="leading-[68px] md:w-full m-auto" as="h3">
                            Our Partners
                        </Heading>
                        <div className="flex self-stretch md:flex-col">
                            <div className="flex flex-1 md:self-stretch">
                                <Img src="images/img_image_4.png" alt="Imagefour" className="h-[70px] w-[56%] object-contain" />
                            </div>
                            <Img
                                src="images/img_image_2.png"
                                alt="Imagetwo"
                                className="h-[70px] w-[34%] object-contain md:w-full"
                            />
                            <Img
                                src="images/img_image_3.png"
                                alt="Imagethree"
                                className="ml-[106px] h-[70px] w-[32%] object-contain md:ml-0 md:w-full"
                            />
                        </div>
                    </div>
                    <DesktoponeColumnpexelspho />
                 {/*
                    <DesktoponeRowFour />
                    */}
                </div>
                <Footer className="mt-[30px] self-stretch" />
            </div>
        </>
    );
}
