import Post from "../../Carrousel/Post";
import ExpandedModal from "../../Modal/ExpandedModal";

function Cards() {
    return (
        <section className="bg-custom-gradient flex items-end py-[100px]">
            <ExpandedModal
                expandModal={true}
                hideHeaderArrow={true}
                overlineButton={true}
                bgColor="bg-secondaryWhite"
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus"
                primary={false}
            />
            <Post
                title="Lorem ipsum"
                description="Quisque vel dictum magna."
                cta={{ text: "Call to action", link: "" }}
            />
        </section>
    );
}

export default Cards;
