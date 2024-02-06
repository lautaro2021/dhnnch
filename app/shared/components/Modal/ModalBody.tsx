import ModalHeader from "./ModalHeader";
import Button from "../generics/Button";

function ModalBody({
    size,
    expandModal,
    title,
    description,
    overlineButton,
    width,
    paddingBottom,
}: {
    size: "m" | "l";
    expandModal: boolean;
    title: string;
    description: string;
    overlineButton?: boolean;
    width?: string;
    paddingBottom?: string;
}) {
    return (
        <div
            className={`${width && width} ${
                paddingBottom && paddingBottom
            } ssm:p-0`}
        >
            <label className="text-label font-label leading-label tracking-label text-darkGreyText hidden ssm:block">
                LOREM IPSUM
            </label>
            {size === "l" ? (
                <h1 className="text-h1 font-h1 leading-h1">{title}</h1>
            ) : (
                <h2 className="text-h2 font-h2 leading-h2">{title}</h2>
            )}

            <div
                className={`flex-col gap-[20px] ${
                    expandModal ? "flex" : "hidden"
                } ssm:flex`}
            >
                <hr className="h-[2px] w-[120px] bg-primaryBlue mt-[12px]" />
                <p className="text-p font-p leading-p text-lightGreyText text-wrap">
                    {description}
                </p>
                <Button text="Call to action" overline={overlineButton} />
            </div>
        </div>
    );
}

export default ModalBody;
