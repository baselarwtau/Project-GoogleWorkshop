import { Button, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense, useState } from "react";

const data = [
    { userAnimatedText: "Animated", id: "animated" },
    { userAnimatedText: "Action & Adventure", id: "action-adventure" },
    { userAnimatedText: "Drama", id: "drama" },
    { userAnimatedText: "Comedy", id: "comedy" }
];

export default function DesktopsixRowOne() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (id) => {
        setSelectedOption(id);
    };

    const handleSubmit = () => {
        if (selectedOption) {
            // Handle form submission, e.g., send data to a server or update state
            console.log("Selected option:", selectedOption);
        } else {
            // Optionally, handle the case where no option is selected
            console.log("No option selected");
        }
    };

    return (
        <div className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
            <div className="w-full px-4 md:px-5 mb-[68px]">
                <div className="w-[600px]">
                    <div className="flex flex-col mb-8">
                        <div className="flex flex-col items-start mb-6">
                            <Heading size="headingxs" as="h1" className="!text-white-a700">
                                3/6
                            </Heading>
                            <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                What is their favorite movie/series genre?
                            </Heading>
                        </div>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-full leading-[29px] !text-white-a700"
                        >
                            Understanding their favorite movie or series genre allows us to recommend gifts that align with their entertainment preferences.
                        </Text>
                    </div>

                    {/* Radio button list */}
                    <div className="flex flex-col gap-4 mt-8">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d) => (
                                <UserProfile2
                                    key={d.id}
                                    {...d}
                                    isChecked={selectedOption === d.id}
                                    onChange={() => handleOptionChange(d.id)}
                                />
                            ))}
                        </Suspense>
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
                        >
                            Skip
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
