import { Button, TextArea, Text, Heading } from "../../components";
import React, { useState } from "react";

export default function DesktopnineRowOne() {
    // State to capture the text area input
    const [inputText, setInputText] = useState("");

    // Handler function for the submit button
    const handleSubmit = () => {
        if (inputText.trim()) {
            // Logic to handle form submission
            console.log("Form Submitted with input:", inputText);
            // Reset the input after submission
            setInputText("");
        } else {
            // Handle empty input case
            console.log("Please enter some information before submitting.");
        }
    };

    return (
        <div className="flex h-[858px] items-start justify-center self-stretch bg-[url(/public/images/img_group_31.png)] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
            <div className="flex flex-col items-start w-full px-4 md:px-5">
                <div className="flex flex-col self-stretch">
                    <div className="flex flex-col items-start mb-4">
                        {/* Adjust margin */}
                        <Heading
                            size="headingxs"
                            as="h1"
                            className="relative z-[1] !text-white-a700 mb-2"
                        >
                            6/6
                        </Heading>
                        <Heading
                            as="h2"
                            className="relative leading-[68px] !text-white-a700 md:w-full"
                        >
                            Lastly, anything important to take into consideration?
                        </Heading>
                    </div>
                    <Text
                        size="textxl"
                        as="p"
                        className="relative mt-4 w-[54%] leading-[29px] !text-white-a700 md:w-full"
                    >
                        Every child is unique. Tell us something about the child that may
                        influence gift selection for them. Special needs, preferences,
                        certain dislikes, etc.
                    </Text>
                </div>
                <TextArea
                    variant="tarFillWhiteA700"
                    shape="round"
                    name="grouptwenty"
                    placeholder="Tell us more about the child receiving the gift..."
                    className="mt-6 w-[56%] text-black-900_7f"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)} // Update state on change
                />
                <Button
                    size="xl"
                    shape="round"
                    className="mt-[46px] min-w-[210px] font-medium"
                    onClick={handleSubmit} // Attach handler to onClick
                >
                    Submit
                </Button>
            </div>
        </div>
    );
}
