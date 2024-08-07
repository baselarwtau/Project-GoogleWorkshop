import { Button, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2"; // Use UserProfile2 instead of UserProfile3
import React, { useState } from "react";

const data = [
    { userDescription: "Fantasy books", id: "fantasy" },
    { userDescription: "Science Fiction books", id: "sci-fi" },
    { userDescription: "Thriller and adventure books", id: "thriller" },
    { userDescription: "Educational and non-fiction books", id: "educational" },
];

export default function DesktopeightRowOne() {
    const [selectedValue, setSelectedValue] = useState(null); // State to manage selected option

    const handleOptionClick = (id) => {
        setSelectedValue(id); // Set selected option
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
        <div className="flex h-[858px] items-start justify-center self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
            <div className="w-full px-4 md:px-5 mb-[68px]">
                <div className="w-[600px]">
                    <div className="flex flex-col mb-8">
                        <div className="flex flex-col items-start mb-6">
                            <Heading size="headingxs" as="h1" className="!text-white-a700">
                                5/6
                            </Heading>
                            <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                What types of books do they like to read?
                            </Heading>
                        </div>
                        <Text
                            size="textxl"
                            as="p"
                            className="w-full leading-[29px] !text-white-a700"
                        >
                            Understanding the types of books they enjoy helps us recommend gifts that align with their reading preferences and interests.
                        </Text>
                    </div>

                    {/* Radio button list */}
                    <div className="flex flex-col gap-4 mt-8">
                        {data.map((item) => (
                            <UserProfile2
                                key={item.id}
                                userAnimatedText={item.userDescription} // Use userDescription as the text
                                isChecked={selectedValue === item.id} // Determine if this option is selected
                                onChange={() => handleOptionClick(item.id)} // Handle option click
                            />
                        ))}
                    </div>

                    {/* Button Section */}
                    <div className="mt-[62px] flex gap-[19px]">
                        <Button
                            size="xl"
                            shape="round"
                            className="min-w-[210px] font-medium"
                            onClick={handleSubmit} // Submit button functionality
                        >
                            Next
                        </Button>
                        <Button
                            color="white_A700"
                            size="xl"
                            shape="round"
                            className="min-w-[120px] font-medium"
                            onClick={handleSkip} // Skip button functionality
                        >
                            Skip
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
