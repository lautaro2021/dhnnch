function Modal({
    bgColor,
    children,
    size,
}: {
    bgColor: string;
    children: React.ReactNode;
    size: "s" | "m";
}) {
    return (
        <div
            className={`max-w-[606px] ${bgColor} flex flex-col justify-end align-end gap-[8px] z-[20] py-[40px] ${
                size === "m" && "pr-[40px]"
            } pl-[120px] rounded-tr-[4px] text-balance sm:px-[16px] sm:${
                size === "s" ? "py-[16px]" : "py-[32px]"
            }`}
        >
            {children}
        </div>
    );
}

export default Modal;
