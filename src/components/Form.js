import React, { useState } from "react";
import "../styles/Form.css"; // Import custom CSS for styling
import UserProfile2 from "./UserProfile2"; // Import UserProfile2 component
import {  Button } from "./Button"; // Import Heading and Button
import { Heading } from "./Heading"; // Import Heading and Button

const Form = () => {
    const [gameInterest, setGameInterest] = useState(""); // New state for game interests
    const [favoriteGenre, setFavoriteGenre] = useState("");
    const [weekendActivity, setWeekendActivity] = useState("");
    const [bookType, setBookType] = useState("");
    const [additionalDetails, setAdditionalDetails] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            gameInterest, // Include game interest in the log
            favoriteGenre,
            weekendActivity,
            bookType,
            additionalDetails,
        });
    };

    const handleCancel = () => {
        // Logic for cancel button, e.g., clearing the form or navigating away
        setGameInterest("");
        setFavoriteGenre("");
        setWeekendActivity("");
        setBookType("");
        setAdditionalDetails("");
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
                    {["Video Games", "Board Games", "Puzzles", "Sports"].map(
                        (game, index) => (
                            <UserProfile2
                                key={index}
                                userAnimatedText={game}
                                isChecked={gameInterest === game}
                                onChange={() => setGameInterest(game)}
                                isForm={true} // Add isForm prop
                            />
                        )
                    )}
                </div>
            </div>

            {/* Question 2 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    2. What is their favorite movie/series genre?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {["Animated", "Action & Adventure", "Drama", "Comedy"].map(
                        (genre, index) => (
                            <UserProfile2
                                key={index}
                                userAnimatedText={genre}
                                isChecked={favoriteGenre === genre}
                                onChange={() => setFavoriteGenre(genre)}
                                isForm={true} // Add isForm prop
                            />
                        )
                    )}
                </div>
            </div>

            {/* Question 3 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    3. How do they like to spend time during weekends?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {[
                        "Outdoor activities and sports",
                        "Arts and crafts",
                        "Indoor games and activities",
                        "Movies and TV series",
                    ].map((activity, index) => (
                        <UserProfile2
                            key={index}
                            userAnimatedText={activity}
                            isChecked={weekendActivity === activity}
                            onChange={() => setWeekendActivity(activity)}
                            isForm={true} // Add isForm prop
                        />
                    ))}
                </div>
            </div>

            {/* Question 4 */}
            <div className="form-section">
                <Heading size="headingxs" as="h3" className="!text-gray-800">
                    4. What type of books do they like to read?
                </Heading>
                <div className="flex flex-col gap-4 mt-4">
                    {[
                        "Fantasy books",
                        "Science Fiction books",
                        "Thriller and adventure books",
                        "Educational and non-fiction books",
                    ].map((book, index) => (
                        <UserProfile2
                            key={index}
                            userAnimatedText={book}
                            isChecked={bookType === book}
                            onChange={() => setBookType(book)}
                            isForm={true} // Add isForm prop
                        />
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
