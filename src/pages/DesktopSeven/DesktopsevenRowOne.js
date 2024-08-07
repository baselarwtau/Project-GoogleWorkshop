import { Button, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { useState } from "react";

const data = [
    { userAnimatedText: "Outdoor activities and sports", id: "outdoor" },
    { userAnimatedText: "Arts and crafts", id: "arts" },
    { userAnimatedText: "Indoor games and activities", id: "indoor" },
    { userAnimatedText: "Movies and TV series", id: "movies" }
];

export default function DesktopsevenRowOne() {
    const [selectedValue, setSelectedValue] = useState("outdoor"); // Default selected value

    const handleOptionClick = (id) => {
        setSelectedValue(id);
    };

    const handleSubmit = () => {
        console.log("Selected value:", selectedValue);
        // Add your form submission logic here
    };

    const handleSkip = () => {
        console.log("Skip button clicked");
        // Add your skip logic here (e.g., navigate to the next step or page)
    };

    return (
        <div className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
            <div className="w-full px-4 md:px-5 mb-[68px]">
                <div className="w-[600px]">
                    <div className="flex flex-col mb-8">
                        <div className="flex flex-col items-start mb-6">
                            <Heading size="headingxs" as="h1" className="!text-white-a700">
                                4/6
                            </Heading>
                            <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                How do they like to spend time during weekends?
                            </Heading>
                        </div>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-full leading-[29px] !text-white-a700"
                        >
                            Knowing how they spend their weekends helps us suggest gifts that match their hobbies and favorite activities.
                        </Text>
                    </div>

                    {/* Radio button list */}
                    <div className="flex flex-col gap-4 mt-8">
                        {data.map((item) => (
                            <UserProfile2
                                key={item.id}
                                userAnimatedText={item.userAnimatedText}
                                isChecked={selectedValue === item.id}
                                onChange={() => handleOptionClick(item.id)}
                            />
                        ))}
                    </div>

                    {/* Button Section */}
                    <div className="mt-[62px] flex gap-[19px]">
                        <Button
                            size="xl"
                            shape="round"
                            className="min-w-[210px] font-medium"
                            onClick={handleSubmit}
                        >
                            Next
                        </Button>
                        <Button
                            color="white_A700"
                            size="xl"
                            shape="round"
                            className="min-w-[120px] font-medium"
                            onClick={handleSkip}
                        >
                            Skip
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
