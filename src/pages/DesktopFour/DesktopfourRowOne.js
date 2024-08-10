import { Button, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { useState } from "react";

const data = [
    { userAnimatedText: "1-5 years", id: "years4" },
    { userAnimatedText: "5-10 years", id: "years5" },
    { userAnimatedText: "10-15 years", id: "years3" },
    { userAnimatedText: "15+ years", id: "years1" }
];

export default function DesktopFourRowOne() {
    const [selectedValue, setSelectedValue] = useState("years4"); // Default selected value

    const handleOptionClick = (id) => {
        setSelectedValue(id);
    };

    const handleSubmit = () => {
        console.log("Selected value:", selectedValue);
        // Add your form submission logic here
    };

    return (
        <div className=" flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
            <div className="myClass w-full px-4 md:px-5 mb-[68px]">
                <div className="w-[600px]">
                    <div className="flex flex-col mb-8">
                        <div className="flex flex-col items-start mb-6">
                            <Heading size="headingxs" as="h1" className="!text-white-a700">
                                1/6
                            </Heading>
                            <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                How old is the child?
                            </Heading>
                        </div>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-full leading-[29px] !text-white-a700"
                        >
                            We ask for the child's age to ensure we recommend age-appropriate gifts that match their developmental stage and interests.
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
                    </div>
                </div>
            </div>
        </div>
    );
}
