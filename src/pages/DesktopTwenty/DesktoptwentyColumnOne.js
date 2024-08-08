import React, { useState } from "react";
import { Button, TextArea, Heading, Input, Img } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { useChild } from "../../context/ChildContext"; // Ensure your Firebase config is correctly imported

//const storage = getStorage(app);

export default function DesktoptwentyColumnOne() {
    const { childrenData, addChild, updateChild, deleteChild, loading } = useChild();
    const [formData, setFormData] = useState({
        childName: "",
        dob: "",
        picture: null,
        gamesInterest: "",
        movieGenre: "",
        weekendActivities: "",
        bookType: "",
        additionalDetails: "",
    });

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Function to handle radio button changes
    const handleRadioChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Function to handle textarea changes
    const handleTextAreaChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            additionalDetails: event,
        }));
    };

    // Function to handle image upload
    const uploadImageAndGetURL = async (file) => {
        if (!file) return null;

        const storageRef = ref(storage, `images/${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = await uploadImageAndGetURL(file);
            if (imageURL) {
                setFormData((prevState) => ({
                    ...prevState,
                    picture: imageURL,
                }));
            }
        }
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        // You can now send formData to your other API

        await addChild(formData);

    };

    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-center px-14 md:px-5">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex items-start self-stretch md:flex-col">
                        <div className="mt-6 flex flex-1 gap-[34px] md:flex-col md:self-stretch">
                            <div className="flex w-[46%] flex-col items-start gap-2.5 md:w-full">
                                <Heading size="headings" as="h2" className="font-quicksand">
                                    Child Name
                                </Heading>
                                <Input
                                    size="sm"
                                    shape="round"
                                    name="childName"
                                    value={formData.childName}
                                    onChange={handleInputChange}
                                    className="self-stretch"
                                />
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
                                <Heading size="headings" as="h3" className="font-quicksand">
                                    Date of Birth
                                </Heading>
                                <Input
                                    type="date"
                                    size="sm"
                                    shape="round"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    className="self-stretch"
                                />
                            </div>
                        </div>
                        <div className="flex w-[20%] flex-col items-end gap-4 self-center md:w-full">
                            <label htmlFor="picture"
                                   className="w-[150px] h-[150px] rounded-[80px] bg-black-900 p-[46px] md:w-full md:p-5 cursor-pointer">
                                {formData.picture ? (
                                    <img
                                        src={formData.picture}
                                        alt="Child"
                                        className="h-[66px] w-[66px] object-cover rounded-full"
                                    />
                                ) : (
                                    <Img
                                        src="images/material-symbols_person-add.svg"
                                        alt="Add Picture"
                                        className="h-[66px] w-[66px]"
                                    />
                                )}
                            </label>
                            <input
                                type="file"
                                id="picture"
                                name="picture"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <Heading size="headings" as="h4" className="mr-[22px] md:mr-0">
                                Add Picture
                            </Heading>
                        </div>
                    </div>

                    <div className="form-section mt-[34px]">
                        <Heading size="headingxs" as="h3" className="!text-gray-800">
                            1. What kind of games interests them?
                        </Heading>
                        <div className="flex flex-col gap-4 mt-4">
                            {["Board Games", "Outdoor Games", "Video Games", "Puzzles & Strategic Thinking Games"].map(
                                (game, index) => (
                                    <UserProfile2
                                        key={index}
                                        userAnimatedText={game}
                                        isChecked={formData.gamesInterest === game}
                                        onChange={() => handleRadioChange("gamesInterest", game)}
                                        isForm={true}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <div className="form-section mt-[34px]">
                        <Heading size="headingxs" as="h3" className="!text-gray-800">
                            2. What is their favorite movie/series genre?
                        </Heading>
                        <div className="flex flex-col gap-4 mt-4">
                            {["Animated", "Action & Adventure", "Drama", "Comedy"].map(
                                (genre, index) => (
                                    <UserProfile2
                                        key={index}
                                        userAnimatedText={genre}
                                        isChecked={formData.movieGenre === genre}
                                        onChange={() => handleRadioChange("movieGenre", genre)}
                                        isForm={true}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <div className="form-section mt-[34px]">
                        <Heading size="headingxs" as="h3" className="!text-gray-800">
                            3. What do they like to do on weekends?
                        </Heading>
                        <div className="flex flex-col gap-4 mt-4">
                            {["Park Visits & Picnics", "Watching Movies", "Arts and Crafts", "Reading Books"].map(
                                (activity, index) => (
                                    <UserProfile2
                                        key={index}
                                        userAnimatedText={activity}
                                        isChecked={formData.weekendActivities === activity}
                                        onChange={() => handleRadioChange("weekendActivities", activity)}
                                        isForm={true}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <div className="form-section mt-[34px]">
                        <Heading size="headingxs" as="h3" className="!text-gray-800">
                            4. What type of books do they enjoy?
                        </Heading>
                        <div className="flex flex-col gap-4 mt-4">
                            {["Story Book", "Comic Book", "Educational Book", "Adventure Book"].map(
                                (bookType, index) => (
                                    <UserProfile2
                                        key={index}
                                        userAnimatedText={bookType}
                                        isChecked={formData.bookType === bookType}
                                        onChange={() => handleRadioChange("bookType", bookType)}
                                        isForm={true}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    <div className="mt-[34px] flex flex-col items-start gap-[26px]">
                        <Heading size="heading5xl" as="h4">
                            Additional Details
                        </Heading>
                        <TextArea
                            className="self-stretch rounded-2xl"
                            name="additionalDetails"
                            value={formData.additionalDetails}
                            onChange={handleTextAreaChange}
                        />
                    </div>

                    <div className="mt-[52px] flex  save-buttons min-w-[290px] h-[66px]">
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
                            className="min-w-[142px] border border-solid border-black-900 font-bold ml-10"
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
