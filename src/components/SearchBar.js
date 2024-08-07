// src/components/SearchBar.js

import React from "react";
import {Img} from "./Img";

const SearchBar = ( {isDeggestion=false}) => {
    if(isDeggestion){
        return (
            <div className="flex items-center p-4">
                {/* Price Range Dropdown */}

                <div className="relative shadow-md rounded">
                    <select
                        className="block  min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Price Range</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Category Dropdown */}
                <div className="relative shadow-md rounded ml-3">
                    <select
                        className="block min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="books">Books</option>
                    </select>
                </div>

            </div>
        );
    }else{
        return (
            <div className="flex items-center p-4">
                {/* Price Range Dropdown */}

                <div className="relative shadow-md rounded">
                    <select
                        className="block  min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Price Range</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Category Dropdown */}
                <div className="relative shadow-md rounded ml-3">
                    <select
                        className="block min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="books">Books</option>
                    </select>
                </div>

                {/* Search Input */}
                <div className="relative flex items-center shadow-md rounded px-4 ml-3">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        className="block   min-w-[496px] h-[66px] px-4 py-2 pl-8  border-gray-3000 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="absolutey lefty-2 text-gray-500 hover:text-gray-700 focus:outline-none  ml-auto"
                    >
                        <Img
                            src="images/img_search.svg"
                            alt="Material-symbols:manage-accounts"
                            className="h-[24px] w-[24px]"
                        />
                    </button>
                </div>

                {/* Add Gift Button */}
                <button className="px-6 py-2 min-w-[229px] h-[66px] text-white bg-yellow-400 ml-auto rounded hover:bg-yellow-300 focus:outline-none">
                    + Add Gift
                </button>
            </div>
        );
    }
};

export default SearchBar;
