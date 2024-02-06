import Modal from "../../Modal/Modal";
import ModalHeader from "../../Modal/ModalHeader";
import ModalBody from "../../Modal/ModalBody";
import Carousel from "../../Carrousel/Carousel";

function Cards() {
    return (
        <section className="xl:bg-custom-gradient bg-white flex items-end py-[100px] w-full t:flex-col t:items-start t:justify-start t:overflow-hidden t:py-[60px]">
            <Modal bgColor="bg-secondaryWhite l:!bg-white" size="s">
                <>
                    <ModalHeader text="LOREM IPSUM" hiddenIcon />
                    <ModalBody
                        width="w-[420px]"
                        paddingBottom="pb-[40px]"
                        size="m"
                        title="Lorem ipsum dolor sit amet"
                        description="Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus"
                        expandModal
                        overlineButton
                    />
                </>
            </Modal>
            <div className="overflow-hidden t:pl-[120px] sm:!pl-[16px]">
                <Carousel />
            </div>
        </section>
    );
}

export default Cards;
