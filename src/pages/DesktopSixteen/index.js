import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, TextArea } from "../../components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { storage } from "../../firebase/firebase"; // Firebase config import
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {useLocation, useNavigate} from "react-router-dom";
import {useChild} from "../../context/ChildContext";

export default function DesktopSixteenPage() {

    const { childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId } = useChild();
    const navigate = useNavigate();

    // State for form inputs
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        purchaseLink: "",
        imageFile: null, // State for image file
    });

    // Reference to file input
    const fileInputRef = useRef(null);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle textarea change
    const handleTextAreaChange = (e) => {
        const value = e; // Dont change it again to the e.target.value for textarea
        setFormData({
            ...formData,
            description: value,
        });
    };

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            imageFile: file,
        });
    };

    // Function to upload image to Firebase Storage
    const uploadImage = (file) => {
        return new Promise((resolve, reject) => {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Track upload progress if needed
                },
                (error) => {
                    console.error("Upload error:", error);
                    reject(error);
                },
                () => {
                    // Upload completed successfully
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((downloadURL) => {
                            resolve(downloadURL);
                        })
                        .catch((error) => {
                            console.error("Error getting download URL:", error);
                            reject(error);
                        });
                }
            );
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = '';

            // Check if an image file is selected before uploading
            if (formData.imageFile) {
                // Upload image to Firebase Storage and get the URL
                imageUrl = await uploadImage(formData.imageFile);
            }

            // Format data according to the given structure
            const formattedData = {
                id: Math.floor(Math.random() * 10000), // Random ID for demonstration
                name: formData.name,
                description: formData.description,
                image: imageUrl, // Only include image URL if available
                isLiked: false,
                category: [
                    "Action Figures & Playsets",
                    "Arts & Crafts",
                ], // Example categories
                age: [
                    "3-6",
                    "6-10",
                ], // Example age groups
                price: formData.price,
            };



            // Check if a gift with the same name already exists
            const giftExists = selectedChildId.gifts.find(gift => gift.name === formattedData.name);

            if (!giftExists) {
                // Push the new gift if it does not already exist
                selectedChildId.gifts.push(formattedData);
                console.log("Selected Child added gift manually:", selectedChildId);

                // Update the child with the new gift
                await updateChild(selectedChildId.id, selectedChildId);
                navigate('/children?giftadded=1');

              //  alert("Gift has been added sucessfully");

            } else {
                alert("Gift with this name already exists.");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // Trigger file input click
    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent default action (like form submission)
        fileInputRef.current.click();
    };

    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg" />
            <div className="flex w-full flex-col items-center bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs mb-1 flex flex-col items-center gap-[66px] px-14 md:px-5 sm:gap-[33px]">
                    <div className="flex w-[80%] flex-col items-center gap-16 md:w-full sm:gap-8">
                        <Heading size="heading7xl" as="h1" className="!font-bold">
                            Add Gift
                        </Heading>
                        {/* Form Start */}
                        <form onSubmit={handleSubmit} id="giftForm" className="flex items-center gap-8 self-stretch md:flex-col">
                            <div className="flex flex-1 flex-col gap-[18px] md:self-stretch">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h2">
                                        Product Name*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="name"
                                        placeholder="e.g. Fluffy Penguin Toy"
                                        className="self-stretch"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h3">
                                        Description (optional)
                                    </Heading>
                                    <TextArea
                                        size="md"
                                        variant="tarOutlineBlack9003f"
                                        shape="round"
                                        name="description"
                                        placeholder="e.g. Color preferences, options, etc."
                                        className="self-stretch text-black-900_7f"
                                        value={formData.description}
                                        onChange={handleTextAreaChange}
                                    />
                                </div>
                            </div>
                            <div className="w-[38%] md:w-full">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h4">
                                        Price*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="price"
                                        placeholder="e.g. $30.00"
                                        className="self-stretch"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-[18px] flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h5">
                                        Purchase Link*
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="purchaseLink"
                                        placeholder="e.g. www.toysrus.com"
                                        className="self-stretch"
                                        value={formData.purchaseLink}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-12 flex flex-col items-start gap-2.5">
                                    <Heading size="headings" as="h6">
                                        Image (optional)
                                    </Heading>
                                    {/* File Input for Image */}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden" // Hide default file input
                                        ref={fileInputRef}
                                    />
                                    <Button
                                        color="black_900"
                                        size="3xl"
                                        className="min-w-[208px] rounded-[18px] h-[66px] font-bold shadow-md"
                                        onClick={handleButtonClick} // Trigger file input click
                                    >
                                        {formData.imageFile? 'image selected' : '+ Upload Image'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                        {/* Form End */}
                    </div>
                    <div className="flex gap-7">
                        <Button
                            color="black_900"
                            size="4xl"
                            shape="round"
                            className="min-w-[332px] h-[66px] font-bold"
                            type="submit" // Ensure this button submits the form
                            form="giftForm" // Attach this button to the form with ID "giftForm"
                        >
                            submit
                        </Button>
                        <Button
                            color="white_A700"
                            size="4xl"
                            shape="round"
                            className="min-w-[142px] h-[66px] border border-solid border-black-900 font-bold"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
            <Footer className="self-stretch" />
        </>
    );
}
