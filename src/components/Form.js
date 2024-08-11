import React, { useEffect, useState } from "react";
import "../styles/Form.css"; // Import custom CSS for styling
import UserProfile2 from "./UserProfile2"; // Import UserProfile2 component
import { Button } from "./Button"; // Import Heading and Button
import { Heading } from "./Heading";
import { useChild } from "../context/ChildContext"; // Import Heading and Button

const Form = () => {
    const [gameInterest, setGameInterest] = useState(""); // New state for game interests
    const [favoriteGenre, setFavoriteGenre] = useState("");
    const [weekendActivity, setWeekendActivity] = useState("");
    const [bookType, setBookType] = useState("");
    const [additionalDetails, setAdditionalDetails] = useState("");

    const [otherGameInterest, setOtherGameInterest] = useState(""); // State for "Other" game interest
    const [otherFavoriteGenre, setOtherFavoriteGenre] = useState(""); // State for "Other" favorite genre
    const [otherWeekendActivity, setOtherWeekendActivity] = useState(""); // State for "Other" weekend activity
    const [otherBookType, setOtherBookType] = useState(""); // State for "Other" book type

    const { childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId } = useChild();

    useEffect(() => {
        if (selectedChildId) {
            const updatedChildData = { ...selectedChildId };
            updatedChildData.questions.forEach((question) => {
                switch (question.question) {
                    case "What kinds of games does he like to play the most?":
                        setGameInterest(question.answer);
                        break;
                    case "What are your child's favorite movies or series?":
                        setFavoriteGenre(question.answer);
                        break;
                    case "How does he like to spend time during vacations or on weekends?":
                        setWeekendActivity(question.answer);
                        break;
                    case "What types of books does he like to read?":
                        setBookType(question.answer);
                        break;
                    case "Is there something important for us to know?":
                        setAdditionalDetails(question.answer);
                        break;
                    default:
                        break;
                }
            });

        } else {
            alert('Please select a child first');
        }

    }, [selectedChildId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a copy of the selected child data to avoid mutating the original state
        const updatedChildData = { ...selectedChildId };

        // Update answer based on form state values
        updatedChildData.questions.forEach((question) => {
            switch (question.question) {
                case "What kinds of games does he like to play the most?":
                    question.answer = gameInterest === 'Other' ? otherGameInterest : gameInterest;
                    break;
                case "What are your child's favorite movies or series?":
                    question.answer = favoriteGenre === 'Other' ? otherFavoriteGenre : favoriteGenre;
                    break;
                case "How does he like to spend time during vacations or on weekends?":
                    question.answer = weekendActivity === 'Other' ? otherWeekendActivity : weekendActivity;
                    break;
                case "What types of books does he like to read?":
                    question.answer = bookType === 'Other' ? otherBookType : bookType;
                    break;
                case "Is there something important for us to know?":
                    question.answer = additionalDetails;
                    break;
                default:
                    break;
            }
        });

        // Call the updateChild function from the context (assuming it handles updates)
        if (selectedChildId?.id) {
            await updateChild(selectedChildId?.id, updatedChildData);
            console.log('Child updated', selectedChildId);
        } else {
            alert('Please select a Child First');
        }
        // Clear form state after successful submission (optional)
      /*  setGameInterest("");
        setFavoriteGenre("");
        setWeekendActivity("");
        setBookType("");
        setAdditionalDetails("");
        setOtherGameInterest("");
        setOtherFavoriteGenre("");
        setOtherWeekendActivity("");
        setOtherBookType("");*/

        console.log("Form submitted successfully!", selectedChildId);
    };

    const handleCancel = () => {
        // Logic for cancel button, e.g., clearing the form or navigating away
        setGameInterest("");
        setFavoriteGenre("");
        setWeekendActivity("");
        setBookType("");
        setAdditionalDetails("");
        setOtherGameInterest("");
        setOtherFavoriteGenre("");
        setOtherWeekendActivity("");
        setOtherBookType("");
        console.log("Cancel button clicked");
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            {/* New Question: Game Interests */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    1. What kind of games interests them?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {["Video Games", "Board Games", "Puzzles", "Sports", "Other"].map((game, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={game}
                                isChecked={gameInterest === game}
                                onChange={() => {
                                    if (game === 'Other') {
                                        setGameInterest(game);
                                    } else {
                                        setGameInterest(game);
                                        setOtherGameInterest(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {game === 'Other' && gameInterest === 'Other' && (
                                <div className="undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] py-4 bg-white-a700 flex-1 rounded-[18px] cursor-pointer">
                                <input
                                    type="text"
                                    value={otherGameInterest}
                                    onChange={(e) => setOtherGameInterest(e.target.value)}
                                    placeholder="Please specify"
                                    className="input-text mt-2 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Question 2 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    2. What is their favorite movie/series genre?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {["Animated", "Action & Adventure", "Drama", "Comedy", "Other"].map((genre, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={genre}
                                isChecked={favoriteGenre === genre}
                                onChange={() => {
                                    if (genre === 'Other') {
                                        setFavoriteGenre(genre);
                                    } else {
                                        setFavoriteGenre(genre);
                                        setOtherFavoriteGenre(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {genre === 'Other' && favoriteGenre === 'Other' && (
                                <div className="undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] py-4 bg-white-a700 flex-1 rounded-[18px] cursor-pointer">

                                <input
                                    type="text"
                                    value={otherFavoriteGenre}
                                    onChange={(e) => setOtherFavoriteGenre(e.target.value)}
                                    placeholder="Please specify"
                                    className="input-text mt-2 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>




            {/* Question 3 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    3. How do they like to spend time during weekends?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {["Outdoor activities and sports", "Arts and crafts", "Indoor games and activities", "Movies and TV series", "Other"].map((activity, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={activity}
                                isChecked={weekendActivity === activity}
                                onChange={() => {
                                    if (activity === 'Other') {
                                        setWeekendActivity(activity);
                                    } else {
                                        setWeekendActivity(activity);
                                        setOtherWeekendActivity(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {activity === 'Other' && weekendActivity === 'Other' && (
                                <div className="undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] py-4 bg-white-a700 flex-1 rounded-[18px] cursor-pointer">

                                <input
                                    type="text"
                                    value={otherWeekendActivity}
                                    onChange={(e) => setOtherWeekendActivity(e.target.value)}
                                    placeholder="Please specify"
                                    className="input-text mt-2 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Question 4 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    4. What type of books do they like to read?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {["Fantasy books", "Science Fiction books", "Thriller and adventure books", "Educational and non-fiction books", "Other"].map((book, index) => (
                        <div key={index}>
                            <UserProfile2
                                userAnimatedText={book}
                                isChecked={bookType === book}
                                onChange={() => {
                                    if (book === 'Other') {
                                        setBookType(book);
                                    } else {
                                        setBookType(book);
                                        setOtherBookType(""); // Clear "Other" text if a different option is selected
                                    }
                                }}
                                isForm={true} // Add isForm prop
                            />
                            {book === 'Other' && bookType === 'Other' && (
                                <div className="undefined mt-4 border-2 border-gray-300 flex items-center gap-5 px-[18px] py-4 bg-white-a700 flex-1 rounded-[18px] cursor-pointer">

                                <input
                                    type="text"
                                    value={otherBookType}
                                    onChange={(e) => setOtherBookType(e.target.value)}
                                    placeholder="Please specify"
                                    className="input-text mt-2 p-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                                />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Details */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    5. Additional details
                </Heading>
                <textarea
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    placeholder="Tell us more about your child - what they like, what they don’t like, any special needs/interests/dislikes, etc..."
                    className="textarea min-w-[750px] mt-4 p-3 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>
            </div>

            {/* Form Actions */}
            <div className="form-actions flex gap-4 mt-8">
                <Button type="submit" className="save-button min-w-[290px] h-[66px]">
                    Save Changes
                </Button>
                <Button
                    type="button"
                    onClick={handleCancel}
                    className="cancel-button min-w-[143px] h-[66px]"
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default Form;
