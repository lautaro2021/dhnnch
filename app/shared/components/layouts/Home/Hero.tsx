"use client";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader";
import ModalBody from "../../Modal/ModalBody";

function Hero() {
    const [expandModal, setExpandModal] = useState(false);

    const handle = () => {
        setExpandModal(!expandModal);
    };

    return (
        <section className="w-full h-screen bg-[url('/assets/hero.webp')] bg-cover flex items-end">
            <Modal bgColor="bg-white" primary>
                <>
                    <ModalHeader
                        text="LOREM IPSUM"
                        action={handle}
                        state={expandModal}
                    />
                    <ModalBody
                        size="l"
                        expandModal={expandModal}
                        title="Lorem ipsum dolor sit amet, consectetur"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna."
                    />
                </>
            </Modal>
        </section>
    );
}

export default Hero;
