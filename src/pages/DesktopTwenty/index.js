import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import {Button, Heading, Input} from "../../components";
import DesktoptwentyColumnOne from "./DesktoptwentyColumnOne";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {useNavigate} from "react-router-dom";

export default function DesktopTwentyPage() {

    const navigate = useNavigate();

    const getUserFromLocalStorage = () => {
        const userInfo = localStorage.getItem('user-info');
        return userInfo ? JSON.parse(userInfo) : null;
    };

    useEffect(() => {
        const user = getUserFromLocalStorage();

        if (!user) {
            // If user is not found, redirect to the login page
            console.log("User not authenticated, redirecting to login...");
            navigate('/login');
        } else {
            // Optionally handle authenticated state here
            console.log("User authenticated:", user);
        }
    }, [navigate]); // Adding navigate as a dependency ensures that the hook re-runs if navigate changes




    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app"/>
            </Helmet>
            <Header className="bg-white-a700 shadow-lg"/>
            <div className="flex w-full flex-col items-center justify-center gap-4 bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <div
                        className="mr-[46px] flex w-[90%] flex-col items-center gap-[66px] md:mr-0 md:w-full sm:gap-[33px]">
                        <Heading size="heading7xl" as="h1" className="!font-bold font-quicksand">
                            Add Child
                        </Heading>
                        <DesktoptwentyColumnOne/>
                    </div>
                </div>
            </div>

            <Footer className="self-stretch"/>
        </>
    );
}

