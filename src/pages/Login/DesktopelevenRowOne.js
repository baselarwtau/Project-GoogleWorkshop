import { Text, Button, Input, Heading, Img } from "../../components";
import React, { useCallback, useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { useNavigate, Link } from 'react-router-dom';
import { auth, googleProvider } from '../../firebase/firebase';
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

export default function DesktopelevenRowOne() {
    const [email, setEmail] = useState("");  // State for email input
    const [password, setPassword] = useState("");  // State for password input
    const [error, setError] = useState('');  // State for error handling
    const navigate = useNavigate();  // React Router's useNavigate hook for navigation
    const [selectedIndex, setSelectedIndex] = useState(1);

    // Handle email input change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle password input change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = useCallback(
        async (e, isLogin) => { // Pass an additional argument to determine login or registration
            e.preventDefault();  // Prevent default form submission

            // Simple email validation (not exhaustive)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Basic password validation (minimum 8 characters, at least one uppercase, lowercase, number, and special character)
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            // Validate input fields
            if (!email || !password) {
                alert("Please enter both email and password.");  // Show alert if fields are empty
                return;  // Stop execution if validation fails
            }

            // Validate email format
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");  // Show alert if email is invalid
                return;  // Stop execution if validation fails
            }

            // Validate password format
            if (!passwordRegex.test(password)) {
                alert("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");  // Show alert if password is invalid
                return;  // Stop execution if validation fails
            }

            try {
                if (isLogin) {  // Logic for login
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;

                    const userInfo = {
                        uid: user.uid,
                        email: user.email,
                    };

                    console.log("Login successful:", userInfo);
                    localStorage.setItem('user-info', JSON.stringify(userInfo));

                    // Navigate to another route
                    navigate('/children');
                } else {  // Logic for registration
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;

                    const userInfo = {
                        uid: user.uid,
                        email: user.email,
                    };

                    console.log("Registration successful:", userInfo);



                    // Navigate to another route
                    navigate('/login');  // Change to your registration success path
                }
            } catch (error) {
                setError('Invalid username or password');
                console.error("Error during authentication:", error);
            }

            // Reset form fields after submission
            setEmail("");  // Clear email input
            setPassword("");  // Clear password input
        },
        [email, password]  // Dependencies for useCallback
    );

    // Handle Google Sign-In
    const handleGoogleSignIn = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const userInfo = {
                uid: user.uid,
                email: user.email,
            };
            console.log("Google Sign-In successful:", userInfo);

            localStorage.setItem('user-info', JSON.stringify(userInfo));

            // Navigate to another route
            navigate('/children');
        } catch (error) {
            setError(error.message);
            console.error("Error during Google Sign-In:", error);
        }
    };

    const handleTabSelect = useCallback((index) => {

        setSelectedIndex(index);

    }, []);


    return (
        <div className="mb-[76px] flex justify-center">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <Tabs
                    selectedIndex={selectedIndex}
                    onSelect={handleTabSelect}
                    className="flex w-[66%] flex-col gap-[50px] rounded-[30px] bg-white-a700 md:w-full"
                    selectedTabClassName="!text-white-a700 border-black-900 border border-solid bg-black-900
                    rounded-bl-[0px] rounded-br-[0px] rounded-tl-[30px] rounded-tr-[0px]"
                    selectedTabPanelClassName="mb-[50px] mx-[98px] md:mx-0 !relative tab-panel--selected"
                >
                    <TabList className="flex flex-wrap justify-center login">
                        <Tab
                            className="font-quicksand w-[50%] border  border-solid border-black-900 flex justify-center
                         py-[26px] font-casaygon text-[21px] font-normal text-black-900 md:px-5 sm:p-5"
                        >
                            Sign in
                        </Tab>
                        <Tab
                            className="font-quicksand flex justify-center border border-solid border-black-900 w-[50%]
                         py-[26px] font-casaygon text-[21px] font-normal text-black-900 md:px-5 sm:p-5 account"
                        >
                            New account
                        </Tab>
                    </TabList>

                    {[0, 1].map((_, index) => (
                        <TabPanel
                            key={`tab-panel${index}`}
                            className="absolute mx-[98px] mb-[50px] items-center md:mx-10"
                        >
                            <div className="w-full">
                                <div className="flex flex-col items-center gap-[62px] sm:gap-[31px]">
                                    <a href="#">
                                        <Heading size="heading7xl" as="h1">
                                            {index === 0 ? "Sign in" : "Create a new account"}
                                        </Heading>
                                    </a>
                                    <form
                                        className="flex flex-col items-center self-stretch"
                                        onSubmit={(e) => handleSubmit(e, index === 0)}  // Pass index to handleSubmit
                                    >
                                        {index === 0 ? (
                                            <>
                                                <div className="flex flex-col items-start gap-1.5 self-stretch">
                                                    <Text size="textxl" as="p">
                                                        Email
                                                    </Text>
                                                    <Input
                                                        size="sm"
                                                        name="email"
                                                        className="self-stretch rounded-[14px] border border-solid border-black-900"
                                                        value={email}
                                                        onChange={handleEmailChange}  // Handle email change
                                                    />
                                                </div>
                                                <div className="mt-4 flex flex-col items-start gap-1.5 self-stretch">
                                                    <Text size="textxl" as="p">
                                                        Password
                                                    </Text>
                                                    <Input
                                                        size="sm"
                                                        name="password"
                                                        className="self-stretch rounded-[14px] border border-solid border-black-900"
                                                        value={password}
                                                        onChange={handlePasswordChange}  // Handle password change
                                                    />
                                                </div>
                                                <Button
                                                    color="black_900"
                                                    size="lg"
                                                    shape="round"
                                                    className="mt-[60px] min-w-[224px]"
                                                    type="submit"  // Submit button
                                                >
                                                    Sign in
                                                </Button>
                                                <Text
                                                    size="textxl"
                                                    as="p"
                                                    className="mt-[22px] underline"
                                                >
                                                    Create a new account
                                                </Text>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center w-full gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                                <div className="flex flex-col items-center self-stretch">
                                                    <div className="flex flex-col items-start gap-1.5 self-stretch">
                                                        <Text size="textxl" as="p">
                                                            Email
                                                        </Text>
                                                        <Input
                                                            size="sm"
                                                            name="email"
                                                            className="self-stretch rounded-[14px] border border-solid border-black-900"
                                                            value={email}
                                                            onChange={handleEmailChange}  // Handle email change
                                                        />
                                                    </div>
                                                    <div className="mt-4 flex flex-col items-start gap-1.5 self-stretch">
                                                        <Text size="textxl" as="p">
                                                            Password
                                                        </Text>
                                                        <Input
                                                            size="sm"
                                                            name="password"
                                                            className="self-stretch rounded-[14px] border border-solid border-black-900"
                                                            value={password}
                                                            onChange={handlePasswordChange}  // Handle password change
                                                        />
                                                    </div>
                                                    <Button
                                                        color="black_900"
                                                        size="lg"
                                                        shape="round"
                                                        className="mt-[60px] min-w-[224px]"
                                                        type="submit"  // Submit button
                                                    >
                                                        Sign up
                                                    </Button>
                                                    <Text
                                                        size="textxl"
                                                        as="p"
                                                        className="mt-[22px] underline"
                                                    >
                                                        I already have an account
                                                    </Text>
                                                </div>
                                                <div className="flex w-[44%] items-center justify-between gap-5 md:w-full">
                                                    <Text
                                                        size="textxs"
                                                        as="p"
                                                        className="!font-generalsans !text-gray-900"
                                                    >
                                                        Or continue with:
                                                    </Text>
                                                    <div className="flex gap-4">
                                                        <Button
                                                            color="gray_400"
                                                            size="xs"
                                                            variant="outline"
                                                            className="w-[36px] rounded"
                                                        >
                                                            <Img src="images/img_ic_baseline_apple.svg" />
                                                        </Button>
                                                        <Button
                                                            color="gray_400"
                                                            size="xs"
                                                            variant="outline"
                                                            className="w-[36px] rounded"
                                                            onClick={handleGoogleSignIn}
                                                        >
                                                            <Img src="images/img_gg_google.svg" />
                                                        </Button>
                                                        <Button
                                                            color="gray_400"
                                                            size="xs"
                                                            variant="outline"
                                                            className="w-[36px] rounded"
                                                        >
                                                            <Img src="images/img_ic_baseline_facebook.svg" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
