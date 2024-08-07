import { Text, Heading } from "../../components";
import React from "react";

export default function DesktoptwentyfourColumnTwo() {
    return (
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-20 px-14 md:gap-[60px] md:px-5 sm:gap-10">
                <Heading as="h2"  className="font-quicksand">Our Story</Heading>
                <Text size="text4xl" as="p" className="w-[90%] leading-[37px] md:w-full">
                    We are a team of four dedicated individuals who came together to solve a common problem: finding the perfect
                    gift for children. Our journey began when we noticed that guests often struggle to choose suitable and
                    meaningful presents for kids' birthdays. Too often, gifts miss the mark, leaving children disappointed
                    and guests feeling unsure.
                    <br />
                    <br />
                    Our website was born from this recognition. We wanted to ease the burden on guests and ensure that every
                    child receives a gift they truly love and appreciate. By understanding each child's unique interests and
                    preferences, we provide personalized gift recommendations that bring joy and excitement to every
                    celebration. Our mission is to make gift-giving a delightful experience for everyone involved.
                </Text>
            </div>
        </div>
    );
}
