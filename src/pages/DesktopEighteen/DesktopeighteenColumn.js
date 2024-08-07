import UserProfile from "../../components/UserProfile1";
import React, { Suspense } from "react";
import { Heading, Button, Img } from "../../components"; // Adjust imports if needed

const data = [
    { userName: "Mike • 14", userBirthday: "04/10" },
    { userName: "Patricia • 11", userBirthday: "19/08" },
    { userName: "Bobby • 6", userBirthday: "22/09" },
];

export default function DesktopeighteenColumn() {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col gap-8 px-4 md:px-5">
                <div className="mr-[46px] flex items-start justify-between gap-5 md:mr-0">
                    <Heading as="h1" className="self-center">
                        My Children
                    </Heading>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                        <Button size="2xl" shape="round" className="min-w-[290px] font-quicksand font-bold">
                            Invite Friends
                        </Button>
                    </a>
                </div>
                <div className="ml-[50px] mr-[46px] md:mx-0">
                    <div className="flex gap-[22px] md:flex-col">
                        <div className="flex flex-1 gap-[22px] md:flex-col md:self-stretch">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <UserProfile {...d} key={"desktop" + index} className="w-[32%] bg-black-900 md:w-full" />
                                ))}
                            </Suspense>
                        </div>
                        <div className="flex w-[24%] flex-col gap-6 md:w-full">
                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-col items-start gap-[22px] rounded-[26px] bg-white-a700 py-[22px] pl-[82px] pr-14 shadow-sm md:px-5 sm:p-5">
                                    <Img src="images/img_fluent_person_b.svg" alt="Fluent person" className="mt-2 h-[122px] w-[122px]" />
                                    <Heading size="headinglg" as="h2">
                                        Add Child
                                    </Heading>
                                </div>
                            </a>
                            <Button
                                color="black_900"
                                size="md"
                                shape="round"
                                rightIcon={
                                    <Img
                                        src="images/img_materialsymbolsmanageaccounts.svg"
                                        alt="Manage accounts"
                                        className="h-[34px] w-[34px]"
                                    />
                                }
                                className="gap-[34px] self-stretch font-quicksand font-bold"
                            >
                                Manage Children
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
