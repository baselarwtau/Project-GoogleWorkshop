import { Helmet } from "react-helmet";
import Header from "../../components/Header"; // Fixed path
import React, { Suspense, useState } from "react";
import { Button, Heading, Img, Text, TextArea } from "../../components";
import { useNavigate } from "react-router-dom";
import UserProfile2 from "../../components/UserProfile2";

const datafour = [
    { userAnimatedText: "1-5 years", id: "years4" },
    { userAnimatedText: "5-10 years", id: "years5" },
    { userAnimatedText: "10-15 years", id: "years3" },
    { userAnimatedText: "15+ years", id: "years1" }
];

const datafive = [
    { userAnimatedText: "Board Games", id: "boardgames3" },
    { userAnimatedText: "Outdoor Games", id: "group11481" },
    { userAnimatedText: "Video Games", id: "group11511" },
    { userAnimatedText: "Puzzles & Strategic Thinking Games", id: "puzzlesstrategicthinkinggames2" }
];

const datasix = [
    { userAnimatedText: "Animated", id: "animated" },
    { userAnimatedText: "Action & Adventure", id: "action-adventure" },
    { userAnimatedText: "Drama", id: "drama" },
    { userAnimatedText: "Comedy", id: "comedy" }
];

const dataseven = [
    { userAnimatedText: "Outdoor activities and sports", id: "outdoor" },
    { userAnimatedText: "Arts and crafts", id: "arts" },
    { userAnimatedText: "Indoor games and activities", id: "indoor" },
    { userAnimatedText: "Movies and TV series", id: "movies" }
];

const dataEight = [
    { userDescription: "Fantasy books", id: "fantasy" },
    { userDescription: "Science Fiction books", id: "sci-fi" },
    { userDescription: "Thriller and adventure books", id: "thriller" },
    { userDescription: "Educational and non-fiction books", id: "educational" },
];

export default function DesktopThreePage() {
    const navigate = useNavigate();
    const [Active, setActive] = React.useState(0);
    const [selectedValue, setSelectedValue] = useState("years4"); // Default selected value
    const [formData, setFormData] = useState({});
    const [inputText, setInputText] = useState("");



    const handleOptionClick = (id) => {
        setSelectedValue(id);
        let updatedData;
        switch (Active) {
            case 1:
                updatedData = getSelectedData(datafour, id).userAnimatedText;
                console.log('Updated Value for question-1:', updatedData);
                setFormData(prevState => ({...prevState, 'question-1': updatedData}));
                break;
            case 2:
                updatedData = getSelectedData(datafive, id).userAnimatedText;
                console.log('Updated Value for question-2:', updatedData);
                setFormData(prevState => ({...prevState, 'question-2': updatedData}));
                break;
            case 3:
                updatedData = getSelectedData(datasix, id).userAnimatedText;
                console.log('Updated Value for question-3:', updatedData);
                setFormData(prevState => ({...prevState, 'question-3': updatedData}));
                break;
            case 4:
                updatedData = getSelectedData(dataseven, id).userAnimatedText;
                console.log('Updated Value for question-4:', updatedData);
                setFormData(prevState => ({...prevState, 'question-4': updatedData}));
                break;
            case 5:
                updatedData = getSelectedData(dataEight, id).userDescription;
                console.log('Updated Value for question-5:', updatedData);
                setFormData(prevState => ({...prevState, 'question-5': updatedData}));
                break;
            case 6:
                console.log('Updated Value for question-6:', inputText);
                setFormData(prevState => ({...prevState, 'question-6': inputText}));
                break;
            default:
                console.log('Invalid Active value:', Active);
                break;
        }
    };

    const getSelectedData = (data, sel) => {
        return data.find(item => item.id === (sel || selectedValue)) || {};
    };

    let selectedData = {};
    const handleSubmit = () => {



        if (Active < 6) {
            setActive(Active + 1)
        }



const obj = {
            ...formData,
}

        if (inputText.length > 0) {
            obj['question-6'] = inputText;

            navigate('/result', { state: obj });


        }



        console.log("Form data before redirect:", obj);


    };

    const handleSkip = () => {
        console.log("Skip button clicked");
        // Add your skip logic here (e.g., navigate to the next step or page)
    };

    return (
        <>
        <Helmet>
            <title>GiftFlow's Application</title>
            <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <Header className="bg-white-a700 shadow-lg" />
        <div className="flex w-full flex-col items-center gap-10 bg-white-a700">
            {Active === 0 ? <div
                    className="myFirstClass flex h-[858px] items-start justify-center self-stretch bg-[url(/public/images/img_group_31.png)] bg-cover bg-no-repeat py-[78px] md:h-auto md:py-5">
                    <div className="container-xs mb-[248px] flex justify-center px-4 md:px-5">
                        <div className="relative h-[450px] w-full md:h-auto">
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                                <div className="flex flex-col">
                                    <div className="flex items-start justify-start">
                                        <Heading as="h1"
                                                 className="w-[72%] flex leading-[68px] !text-white-a700 md:w-full">
                                            Find the Perfect Gift with
                                            Intelligent Recommendations
                                        </Heading>
                                        <Img
                                            src="images/img_streamline_ai_t.svg"
                                            alt="Streamline AI"
                                            className="mr-[0px] mt-2.5 h-[44px] w-[44px] md:mr-0 relative rights"
                                        />
                                    </div>
                                    <div className="relative mt-[-52px] h-[298px] content-center md:h-auto">
                                        <Text size="textxl" as="p" className="w-[56%] leading-[29px] !text-white-a700">
                                            Get personalized gift suggestions with our intelligent recommendations.
                                            Simply
                                            answer a few questions,
                                            and let our AI-powered tool find the perfect gift tailored to your child's
                                            interests.
                                        </Text>
                                        <Button
                                            onClick={() => {
                                                setActive(1);
                                            }}
                                            size="xl"
                                            shape="round"
                                            className="absolute bottom-[0%] left-0 mt-5 m-auto min-w-[210px] font-medium"
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 1 ? <div
                    className=" flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="myClass w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        {Active}/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        How old is the child?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    We ask for the child's age to ensure we recommend age-appropriate gifts that match
                                    their developmental stage and interests.
                                </Text>
                            </div>

                            {/* Radio button list */}
                            <div className="flex flex-col gap-4 mt-8">
                                {datafour.map((item) => (
                                    <UserProfile2
                                        key={item.id}
                                        userAnimatedText={item.userAnimatedText}
                                        isChecked={selectedValue === item.id}
                                        onChange={() => handleOptionClick(item.id)}
                                    />
                                ))}
                            </div>

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 2 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        2/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        What kind of games interests them?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    Understanding the child's interest in different types of games will help us suggest
                                    gifts that match their preferences.
                                </Text>
                            </div>

                            {/* Radio button list */}
                            <div className="flex flex-col gap-4 mt-8">
                                {datafive.map((item) => (
                                    <UserProfile2
                                        key={item.id}
                                        userAnimatedText={item.userAnimatedText}
                                        isChecked={selectedValue === item.id}
                                        onChange={() => handleOptionClick(item.id)}
                                    />
                                ))}
                            </div>

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 3 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        3/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        What type of movies or TV series do they enjoy?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    By knowing their favorite genres, we can recommend gifts related to their preferred
                                    movies or TV shows.
                                </Text>
                            </div>

                            {/* Radio button list */}
                            <div className="flex flex-col gap-4 mt-8">
                                {datasix.map((item) => (
                                    <UserProfile2
                                        key={item.id}
                                        userAnimatedText={item.userAnimatedText}
                                        isChecked={selectedValue === item.id}
                                        onChange={() => handleOptionClick(item.id)}
                                    />
                                ))}
                            </div>

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 4 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        4/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        What are their favorite activities?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    Knowing their favorite activities will help us find gifts that align with their hobbies
                                    and interests.
                                </Text>
                            </div>

                            {/* Radio button list */}
                            <div className="flex flex-col gap-4 mt-8">
                                {dataseven.map((item) => (
                                    <UserProfile2
                                        key={item.id}
                                        userAnimatedText={item.userAnimatedText}
                                        isChecked={selectedValue === item.id}
                                        onChange={() => handleOptionClick(item.id)}
                                    />
                                ))}
                            </div>

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 5 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        5/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        What types of books do they like?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    Understanding their book preferences will help us recommend books or related gifts they
                                    will enjoy.
                                </Text>
                            </div>

                            {/* Radio button list */}
                            <div className="flex flex-col gap-4 mt-8">
                                {dataEight.map((item) => (
                                    <UserProfile2
                                        key={item.id}
                                        userAnimatedText={item.userDescription}
                                        isChecked={selectedValue === item.id}
                                        onChange={() => handleOptionClick(item.id)}
                                    />
                                ))}
                            </div>

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Next
                                </Button>
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 6 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        6/6
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        Any additional information?
                                    </Heading>
                                </div>
                                <Text
                                    size="textxl"
                                    as="p"
                                    className="w-full leading-[29px] !text-white-a700"
                                >
                                    If you have any additional details that could help us make a better recommendation,
                                    please
                                    let us know.
                                </Text>
                            </div>

                            <TextArea
                                value={inputText}
                                onChange={(e) => setInputText(e)}
                                className="w-full h-[120px]"
                            />

                            {/* Button Section */}
                            <div className="mt-[62px] flex gap-[19px]">
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                                <Button
                                    size="xl"
                                    shape="round"
                                    className="min-w-[210px] font-medium"
                                    onClick={handleSkip}
                                >
                                    Skip
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                : null}

            {Active === 7 ? <div
                    className="flex h-[858px] items-start justify-start self-stretch bg-[url('/public/images/img_group_31.png')] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
                    <div className="w-full px-4 md:px-5 mb-[68px]">
                        <div className="w-[600px]">
                            <div className="flex flex-col mb-8">
                                <div className="flex flex-col items-start mb-6">
                                    <Heading size="headingxs" as="h1" className="!text-white-a700">
                                        Thank you!
                                    </Heading>
                                    <Heading as="h2" className="mt-[10px] w-full !text-white-a700">
                                        Your information has been submitted.
                                    </Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>
        </>

    );
};

