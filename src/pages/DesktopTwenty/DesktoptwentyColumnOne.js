import React, { useState } from "react";
import { Button, TextArea, Heading, Input } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import ImageUploader from "../../components/imageUploader";
import { useNavigate } from "react-router-dom";
import { useChild } from "../../context/ChildContext";

const games = ["Video Games", "Board Games", "Puzzles", "Sports", ];
const genres = ["Animated", "Action & Adventure", "Drama", "Comedy", ];
const vocationActivities = ["Outdoor activities and sports", "Arts and crafts", "Indoor games and activities", "Movies and TV series",];
const booksArray = ["Fantasy books", "Science Fiction books", "Thriller and adventure books", "Educational and non-fiction books",];

export default function DesktoptwentyColumnOne() {
    const { addChild } = useChild();
    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem('user-info'));

    const [formData, setFormData] = useState({
        childName: "",
        dob: "",
        picture: null,
        gamesInterest: "",
        movieGenre: "",
        weekendActivities: "",
        bookType: "",
        additionalDetails: "",
        gender: "",
        gamesInterestOther: "",
        movieGenreOther: "",
        weekendActivitiesOther: "",
        bookTypeOther: "",
    });

    const [otherFields, setOtherFields] = useState({
        gamesInterest: false,
        movieGenre: false,
        weekendActivities: false,
        bookType: false,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleTextAreaChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            additionalDetails: event,
        }));
    };

    const handleRadioChange = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value === "Other" ? "" : value,
        }));
        setOtherFields((prevState) => ({
            ...prevState,
            [field]: value === "Other",
        }));
    };

    const handleTextChange = (field, event) => {
        setFormData((prevState) => ({
            ...prevState,
            [`${field}Other`]: event.target.value,
        }));
    };

    const onHandleImageUpload = (imageURL) => {
        setFormData((prevState) => ({
            ...prevState,
            picture: imageURL,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formattedData = {
            name: formData.childName,
            gender: formData.gender.toLowerCase(),
            dob: formData.dob,
            picture: formData.picture || "",
            questions: [
                {
                    question: "What kinds of games does he like to play the most?",
                    answer: formData.gamesInterest || formData.gamesInterestOther,
                    options: games,
                },
                {
                    question: "What are your child's favorite movies or series?",
                    answer: formData.movieGenre || formData.movieGenreOther,
                    options: genres,
                },
                {
                    question: "How does he like to spend time during vacations or on weekends?",
                    answer: formData.weekendActivities || formData.weekendActivitiesOther,
                    options: vocationActivities,
                },
                {
                    question: "What types of books does he like to read?",
                    answer: formData.bookType || formData.bookTypeOther,
                    options: booksArray,
                },
                {
                    question: "Is there something important for us to know?",
                    answer: formData.additionalDetails,
                    options: [],
                },
            ],
        };

        console.log("Formatted Data:", formattedData);

        await addChild(formattedData);
        navigate('/children');
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
                        <ImageUploader onImageUpload={onHandleImageUpload} />
                    </div>

                    {/* New Gender Question */}
                    <div className="form-section mt-[34px]">
                        <Heading size="headingxs" as="h3" className="!text-gray-800">
                            What is your child's gender?
                        </Heading>
                        <div className="flex flex-col gap-4 mt-4">
                            {["Male", "Female"].map((gender, index) => (
                                <UserProfile2
                                    key={index}
                                    userAnimatedText={gender}
                                    isChecked={formData.gender === gender}
                                    onChange={() => handleRadioChange("gender", gender)}
                                    isForm={true}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Questions with "Other" Option */}
                    {[
                        { field: "gamesInterest", label: "What kind of games interests them?", options: games },
                        { field: "movieGenre", label: "What is their favorite movie/series genre?", options: genres },
                        { field: "weekendActivities", label: "What do they like to do on weekends?", options: vocationActivities },
                        { field: "bookType", label: "What type of books do they enjoy?", options: booksArray }
                    ].map(({ field, label, options }, idx) => (
                        <div key={idx} className="form-section mt-[34px]">

                            <Heading size="headingxs" as="h3" className="!text-gray-800">
                                {label}
                            </Heading>
                            <div className="flex flex-col gap-4 mt-4">
                                {options.map((option, index) => (
                                    <UserProfile2
                                        key={index}
                                        userAnimatedText={option}
                                        isChecked={formData[field] === option}
                                        onChange={() => handleRadioChange(field, option)}
                                        isForm={true}
                                    />
                                ))}
                                <UserProfile2
                                    key="other"
                                    userAnimatedText="Other"
                                    isChecked={otherFields[field]}
                                    onChange={() => handleRadioChange(field, "Other")}
                                    isForm={true}
                                />
                                {otherFields[field] && (
                                    <Input
                                        type="text"
                                        name={`${field}Other`}
                                        value={formData[`${field}Other`]}
                                        onChange={(e) => handleTextChange(field, e)}
                                        placeholder="Please specify"
                                        className="self-stretch mt-2"
                                    />
                                )}
                            </div>
                        </div>
                    ))}

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

                    <div className="mt-[52px] flex save-buttons min-w-[290px] h-[66px]">
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
                            onClick={() => {
                                console.log("Cancel button clicked");
                                if (userInfo?.uid) {
                                    navigate('/children?giftadded=1');
                                } else {
                                    navigate('/home');
                                }
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
