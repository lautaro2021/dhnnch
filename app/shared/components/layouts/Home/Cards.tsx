import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader";
import ModalBody from "../../Modal/ModalBody";
import Carousel from "../../Carrousel/Carousel";

function Cards() {
    return (
        <section className="bg-custom-gradient flex items-end py-[100px] w-full">
            <Modal bgColor="bg-secondaryWhite">
                <>
                    <ModalHeader text="LOREM IPSUM" hiddenIcon />
                    <ModalBody
                        width="w-[420px]"
                        size="m"
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus"
                        expandModal
                        overlineButton
                    />
                </>
            </Modal>
            <Carousel />
        </section>
    );
}

export default Cards;
