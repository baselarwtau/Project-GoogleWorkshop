import { Button, Img, Heading } from "../../components";
import UserProfilel from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
    { userName: "Mike • 14", userBirthday: "04/10" },
    { userName: "Patricia • 11", userBirthday: "19/08" },
    { userName: "Bobby • 6", userBirthday: "22/09" },
    { userName: "Mike • 14", userBirthday: "04/10" }
];

export default function DesktopnineteenColumn() {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col gap-8 px-4 md:px-5">
                <div className="mr-[46px] flex items-start justify-between gap-5 md:mr-0">
                    <Heading as="h1" className="self-center">
                        My Children
                    </Heading>
                    <a
                        href="https://www.youtube.com/embed/bv8FxkOsz7I"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            size="2xl"
                            shape="round"
                            className="min-w-[290px] font-quicksand font-bold"
                        >
                            Invite Friends
                        </Button>
                    </a>
                </div>
                <div className="ml-[50px] mr-[46px] md:mx-0">
                    <div className="flex flex-col items-end">
                        <div className="flex gap-[22px] self-stretch md:flex-col">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {data.map((d, index) => (
                                    <UserProfilel
                                        {...d}
                                        key={"desktop" + index}
                                        className="w-[24%] bg-black-900 md:w-full"
                                    />
                                ))}
                            </Suspense>
                        </div>
                        <Button
                            color="black_900"
                            size="md"
                            shape="round"
                            rightIcon={
                                <Img
                                    src="images/img_materialsymbolsmanageaccounts.svg"
                                    alt="Material-symbols: manage-accounts"
                                    className="h-[34px] w-[34px]"
                                />
                            }
                            className="relative z-[1] mt-[52px] min-w-[290px] gap-[34px] font-quicksand font-bold"
                        >
                            Manage Children
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
