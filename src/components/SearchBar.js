// src/components/SearchBar.js

import React from "react";
import {Img} from "./Img";
import {useNavigate} from "react-router-dom";

const SearchBar = ({
                       isDeggestion = false,
                       child,
                       categories,
                       onFilterCategory,
                       onFilterPrice,
                       onFilter,
                   }) => {

    const navigate = useNavigate();

    const removeDuplicates = (array) => {
        return [...new Set(array)];
    };

    if (isDeggestion) {
        return (
            <div className="flex items-center p-4">
                {/* Price Range Dropdown */}

                <div className="relative shadow-md rounded">
                    <select
                        onChange={onFilterPrice}
                        className="block  min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Price Range</option>
                        <option value="50"> Less then $50 </option>
                        <option value="100"> Between $50 and $100 </option>
                        <option value="150"> Between $100 and $150 </option>
                        <option value="151"> $150+ </option>
                      {/*  <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>*/}
                    </select>
                </div>

                {/* Category Dropdown */}
                <div className="relative shadow-md rounded ml-3">
                    <select
                        onChange={onFilterCategory}
                        className="block min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Category</option>
                        {categories && removeDuplicates(categories).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                        {!categories && (
                            <>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="books">Books</option>
                            </>
                        )}
                    </select>
                </div>

            </div>
        );
    } else {

        console.log(`--------------categories------------222-`)
        console.log(categories)

        return (
            <div className="flex items-center p-4">
                {/* Price Range Dropdown */}

                <div className="relative shadow-md rounded">
                    <select
                        onChange={onFilterPrice}
                        className="block  min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Price Range</option>
                        <option value="50"> Less then $50</option>
                        <option value="100"> Less then $100</option>
                        <option value="150"> Less then $150</option>
                        <option value="151"> $150+</option>
                        {/*   <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>*/}
                    </select>
                </div>

                {/* Category Dropdown */}
                <div className="relative shadow-md rounded ml-3">
                    <select
                        onChange={onFilterCategory}
                        className="block min-w-[222px] h-[66px] px-4 py-2  border-gray-3000 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Category</option>
                        {categories && removeDuplicates(categories).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                        {!categories && (
                            <>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="books">Books</option>
                            </>
                        )}
                    </select>
                </div>

                {/* Search Input */}
                <div className="relative flex items-center shadow-md rounded px-4 ml-3">
                    <input
                        type="text"
                        placeholder="Search for a product..."
                        onChange={onFilter}
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
                <button
                    onClick={() => {
                        navigate('/addGifts');
                    }}
                    className="font-bold text-black-900 px-6 py-2 min-w-[290px] h-[66px] text-white bg-amber-200 ml-auto rounded-[14px] hover:bg-yellow-300 focus:outline-none">
                    + Add Gift
                </button>
            </div>
        );
    }
};

export default SearchBar;
