import React, { useState } from "react";
import { Button, TextArea, Heading, Radio, RadioGroup } from "../../components";

export default function DesktoptwentyColumnOne() {
    const [formData, setFormData] = useState({
        gamesInterest: "",
        movieGenre: "",
        weekendActivities: "",
        bookType: "",
        additionalDetails: "",
    });

    // Function to handle radio button changes
    const handleRadioChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle textarea changes
    const handleTextAreaChange = (event) => {
        setFormData({
            ...formData,
            additionalDetails: event.target.value,
        });
    };

    // Function to submit the form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        // Add your form submission logic here, e.g., send data to a server
    };

    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-center px-14 md:px-5">
                <form onSubmit={handleSubmit}>
                    <Heading size="heading5xl" as="h2" className="self-start">
                        What kind of games interests them?
                    </Heading>
                    <RadioGroup
                        name="gamesInterest"
                        className="w-full flex flex-col items-start mt-4"
                        value={formData.gamesInterest}
                        onChange={(value) => handleRadioChange("gamesInterest", value)}
                    >
                        <Radio
                            value="boardgames"
                            label="Board Games"
                            className="w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                        />
                        <Radio
                            value="outdoorgames"
                            label="Outdoor Games"
                            className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                        />
                        <Radio
                            value="videogames"
                            label="Video Games"
                            className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                        />
                        <Radio
                            value="puzzlesstrategicthinkinggames"
                            label="Puzzles & Strategic Thinking Games"
                            className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                        />
                    </RadioGroup>

                    <div className="mt-[34px] flex w-full flex-col items-start gap-[26px]">
                        <Heading size="heading5xl" as="h3">
                            What is their favorite movie/series genre?
                        </Heading>
                        <RadioGroup
                            name="movieGenre"
                            className="w-full flex flex-col items-start mt-4"
                            value={formData.movieGenre}
                            onChange={(value) => handleRadioChange("movieGenre", value)}
                        >
                            <Radio
                                value="animated"
                                label="Animated"
                                className="w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="actionadventure"
                                label="Action & Adventure"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="drama"
                                label="Drama"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="comedy"
                                label="Comedy"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                        </RadioGroup>
                    </div>

                    <div className="mt-[34px] flex w-full flex-col items-start gap-[26px]">
                        <Heading size="heading5xl" as="h4">
                            How do they like to spend time during weekends?
                        </Heading>
                        <RadioGroup
                            name="weekendActivities"
                            className="w-full flex flex-col items-start mt-4"
                            value={formData.weekendActivities}
                            onChange={(value) => handleRadioChange("weekendActivities", value)}
                        >
                            <Radio
                                value="outdooractivitiesandsports"
                                label="Outdoor activities and sports"
                                className="w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="artsandcrafts"
                                label="Arts and crafts"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="indoorgamesandactivities"
                                label="Indoor games and activities"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="moviesandtvseries"
                                label="Movies and TV series"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                        </RadioGroup>
                    </div>

                    <div className="mt-[34px] flex w-full flex-col items-start gap-[26px]">
                        <Heading size="heading5xl" as="h5">
                            What type of books do they like to read?
                        </Heading>
                        <RadioGroup
                            name="bookType"
                            className="w-full flex flex-col items-start mt-4"
                            value={formData.bookType}
                            onChange={(value) => handleRadioChange("bookType", value)}
                        >
                            <Radio
                                value="fantasybooks"
                                label="Fantasy books"
                                className="w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="sciencefictionbooks"
                                label="Science Fiction books"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="thrillerandadventurebooks"
                                label="Thriller and adventure books"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                            <Radio
                                value="educationalandnonfictionbooks"
                                label="Educational and non-fiction books"
                                className="mt-1 w-full gap-5 rounded-[18px] py-[22px] pr-[34px] text-[18px] text-black-900"
                            />
                        </RadioGroup>
                    </div>

                    <div className="mt-[34px] flex w-full flex-col items-start gap-[26px]">
                        <Heading size="heading5xl" as="h6">
                            Additional details
                        </Heading>
                        <TextArea
                            shape="round"
                            name="groupeightynine"
                            placeholder="Tell us more about your child - what they like, what they don't like, any special needs/interests/dislikes, etc..."
                            className="w-full !border-black-900 leading-[21px] text-black-900_7f"
                            value={formData.additionalDetails}
                            onChange={handleTextAreaChange}
                        />
                    </div>
                    <div className="mt-[52px] flex justify-between save-buttons min-w-[290px] h-[66px]">
                        <Button
                            type="submit"
                            color="black_900"
                            size="4xl"
                            shape="round"
                            className="min-w-[332px] font-bold"
                        >
                            Add Child
                        </Button>
                        <Button
                            type="button"
                            color="white_A700"
                            size="4xl"
                            shape="round"
                            className="min-w-[142px] border border-solid border-black-900 font-bold"
                            onClick={() => console.log("Cancel button clicked")}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
