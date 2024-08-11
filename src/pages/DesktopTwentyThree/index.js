import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {Button, Input, Heading, DatePicker, TextArea} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import InlineSpinner from "../../components/InlineSpinner";
import {useChild} from "../../context/ChildContext";

export default function DesktopTwentyThreePage() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const {childrenData, addChild, updateChild, deleteChild, selectChild, selectedChildId} = useChild();


    const handleCreateInvite = async () => {


        try {
            if (loading) {
                return;
            }
            const userInfo = JSON.parse(localStorage.getItem('user-info'));

            if (!userInfo?.uid) {
                alert('Please login again to continue.');
                return;
            }

            if (!title) {
                alert('Please give your invitation a name');
                return;
            }

            const inviteData = {
                location,
                description,
                date,
                time,
                title,
                selectedChildId
            };

            const requiredFields = ['location', 'description', 'date', 'time', 'title'];
            const missingFields = requiredFields.filter(field => !inviteData[field]);

            if (missingFields.length > 0) {
                alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
                return;
            }

            setLoading(true);
            const db = getFirestore();
            const inviteRef = doc(db, 'invitations', `${userInfo.uid}_${Date.now()}`);
            await setDoc(inviteRef, inviteData);

            navigate(`/thanks?invite=${inviteRef.id}`);

        } catch (error) {
            console.error('An error occurred:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <InlineSpinner/>
        )
    } else {
        return (
            <>
                <Helmet>
                    <title>GiftFlow's Application</title>
                    <meta name="description" content="Web site created using create-react-app"/>
                </Helmet>
                <Header className="bg-white-a700 shadow-lg"/>
                <div className="flex w-full flex-col items-center bg-white-a700 py-[82px] md:py-5">
                    <div className="container-xs mb-1 flex flex-col items-center gap-16 px-14 md:px-5 sm:gap-8">
                        <Heading size="heading7xl" as="h1" className="!font-bold">
                            Create Invite for {selectedChildId?.name}
                        </Heading>
                        <div className="flex w-[80%] justify-center md:w-full">
                            <div className="flex w-full items-start gap-8 md:flex-col">
                                <div className="flex flex-1 flex-col gap-[18px] self-center md:self-stretch">
                                    <div className="flex flex-col items-start gap-2.5">
                                        <Heading size="heading" as="h2">
                                            What's this invitation is for ?
                                        </Heading>
                                        <Input
                                            size="sm"
                                            shape="round"
                                            name="title"
                                            placeholder={"Give your invitation a name e.g (birthday, wedding, etc)"}
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className="self-stretch"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <Heading size="heading" as="h2">
                                            Location
                                        </Heading>
                                        <Input
                                            size="sm"
                                            shape="round"
                                            name="location"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            className="self-stretch"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <Heading size="heading" as="h3">
                                            Description (optional)
                                        </Heading>
                                        <TextArea
                                            size="sm"
                                            variant="tarOutlineBlack9003f"
                                            shape="round"
                                            name="textarea"
                                            value={description}
                                            onChange={(e) => {
                                                setDescription(e)
                                            }}
                                            className="self-stretch"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-[38%] flex-col gap-[18px] md:w-full">
                                    <div className="flex flex-col items-start gap-2.5">
                                        <Heading size="heading" as="h4">
                                            Date
                                        </Heading>
                                        <DatePicker
                                            name="solarcalendarbo"
                                            value={date}
                                            onChange={(value) => setDate(value)} // Assuming DatePicker's onChange passes the date value
                                            className="flex gap-[34px] pl-5 self-stretch rounded-[18px] bg-white-a700 py-5 pr-6 shadow-md sm:pr-5"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <Heading size="heading" as="h5">
                                            Time
                                        </Heading>
                                        <Input
                                            shape="round"
                                            name="time"
                                            placeholder="--:--"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            type={'time'}
                                            className="self-stretch"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-7">
                            <Button
                                onClick={handleCreateInvite}
                                color="black_900"
                                size="4xl"
                                shape="round"
                                className="min-w-[332px] h-[66px] font-bold"
                            >
                                Create Invite
                            </Button>
                            <Button
                                color="white_A700"
                                size="4xl"
                                shape="round"
                                className="min-w-[142px] h-[66px] border border-solid border-black-900 font-bold"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer className="self-stretch"/>
            </>
        );
    }
}

/*
import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Heading, DatePicker, TextArea } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function DesktopTwentyThreePage() {
    return (
        <>
            <Helmet>
                <title>GiftFlow's Application</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="bg-white-a700 shadow-lg"/>
            <div className="flex w-full flex-col items-center bg-white-a700 py-[82px] md:py-5">
                <div className="container-xs mb-1 flex flex-col items-center gap-16 px-14 md:px-5 sm:gap-8">
                    <Heading size="heading7xl" as="h1" className="!font-bold">
                        Create Invite
                    </Heading>
                    <div className="flex w-[80%] justify-center md:w-full">
                        <div className="flex w-full items-start gap-8 md:flex-col">
                            <div className="flex flex-1 flex-col gap-[18px] self-center md:self-stretch">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h2">
                                        Location
                                    </Heading>
                                    <Input size="sm" shape="round" name="location" className="self-stretch" />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h3">
                                        Description (optional)
                                    </Heading>
                                    <TextArea
                                        size="sm"
                                        variant="tarOutlineBlack9003f"
                                        shape="round"
                                        name="textarea"
                                        className="self-stretch"
                                    />
                                </div>
                            </div>
                            <div className="flex w-[38%] flex-col gap-[18px] md:w-full">
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h4">
                                        Date
                                    </Heading>
                                    <DatePicker
                                        name="solarcalendarbo"
                                        className="flex gap-[34px] pl-5 self-stretch rounded-[18px] bg-white-a700 py-5 pr-6 shadow-md sm:pr-5"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2.5">
                                    <Heading size="heading" as="h5">
                                        Time
                                    </Heading>
                                    <Input
                                        shape="round"
                                        name="time"
                                        placeholder="--:--"
                                        className="self-stretch"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <a href="https://www.youtube.com/embed/bv8FxkOsz7I" target="_blank" rel="noopener noreferrer">
                            <Button color="black_900" size="4xl" shape="round" className="min-w-[332px] h-[66px] font-bold">
                                Create Invite
                            </Button>
                        </a>
                        <Button
                            color="white_A700"
                            size="4xl"
                            shape="round"
                            className="min-w-[142px] h-[66px] border border-solid border-black-900 font-bold"
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
            <Footer className="self-stretch"/>
        </>
    );
}
*/
