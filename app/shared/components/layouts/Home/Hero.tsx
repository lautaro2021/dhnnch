"use client";
import { useState } from "react";
import ExpandedModal from "../../Modal/ExpandedModal";

function Hero() {
    const [expandModal, setExpandModal] = useState(false);

    const handle = () => {
        setExpandModal(!expandModal);
    };

    return (
        <section className="w-full h-screen bg-[url('/assets/hero.webp')] bg-cover flex items-end">
            <ExpandedModal
                expandModal={expandModal}
                handle={handle}
                bgColor="bg-white"
                title="Lorem ipsum dolor sit amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna."
                primary
            />
        </section>
    );
}

export default Hero;
