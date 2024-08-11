import { Helmet } from "react-helmet";
import { SelectBox, Img, Button } from "../../components";  // Corrected import statement
import Footer from "../../components/Footer"; // Removed space in import path
import Header from "../../components/Header"; // Removed space in import path
import DesktoptenRow from "./DesktoptenRow";
import DesktoptenRowone from "./DesktoptenRowOne"; // Fixed space in import path
import React from "react";
import { useLocation } from "react-router-dom";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" }, // Corrected values
];

export default function DesktopTenPage() {
    const location = useLocation();
    const receivedData = location.state; // Access the entire object

    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
                <div className="flex flex-col gap-[490px] self-stretch md:gap-[367px] sm:gap-[245px]">
                    <div className="flex flex-col items-center gap-[60px] sm:gap-[30px]">
                        <DesktoptenRow /> {/* Fixed case sensitivity */}
                        <div className="container-xs px-4 md:px-5"> {/* Fixed space */}
                            <div className="flex gap-3.5 sm:flex-col"> {/* Fixed space */}
                                <Button
                                    color="white_A700"
                                    size="3xl"
                                    rightIcon={
                                        <Img src="images/img_ouitokenrange.svg" alt="Oui:token-range" className="h-[26px] w-[26px]" />
                                    }
                                    className="min-w-[222px] gap-[34px] rounded-[18px] !text-black-900_7f shadow-md"
                                >
                                    Price Range
                                </Button>
                                <SelectBox
                                    shape="round"
                                    indicator={<Img src="images/oui_token-range.svg" alt="Checkmark" className="h-[66px] w-[34px]" />}
                                    name="checkmark"
                                    placeholder="Category"
                                    options={dropDownOptions}
                                    className="w-[16%] gap-4 sm:w-full"
                                />
                            </div>
                        </div>
                        <DesktoptenRowone ansers={receivedData} /> {/* Fixed case sensitivity */}
                    </div>
                    <Footer className="mt-[30px] self-stretch" />
                </div>
            </div>
        </>
    );
}
