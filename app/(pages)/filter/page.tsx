"use client";
import React, { use, useEffect, useState } from "react";
import service from "@/app/services/blog";

function FilterTest() {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    const handleData = () => {
        setIsLoading(true);
        service
            .getPostByCategory("fly")
            .then((value) => setData(value))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    //the endpoint can be optimized, this is just an example of functionalitty
    console.log("postData", data?.data?.data[0]?.attributes);

    return (
        <div className="w-screen h-screen text-black py-[120px] flex flex-col">
            <h1 className="text-h2 font-h2 leading-h2">
                TEST GET DATA BY CATEGORY
            </h1>
            {data && !isLoading && <p>Data success! view in browser console</p>}
            {isLoading && (
                <h3 className="text-h1 font-h1 leading-h1 text-black">
                    Loading..
                </h3>
            )}
            <button
                onClick={handleData}
                className="w-[200px] h-[100px] bg-primaryBlue"
            >
                GET DATA
            </button>
        </div>
    );
}

export default FilterTest;
