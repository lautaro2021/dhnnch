function Modal({
    bgColor,
    primary,
    children,
}: {
    bgColor: string;
    primary?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className={`max-w-[606px] ${bgColor} flex flex-col justify-end align-end gap-[8px] z-[20] py-[40px] ${
                primary && "pr-[40px]"
            } pl-[120px] rounded-tr-[4px] text-balance ssm:px-[16px] ssm:py-[32px]`}
        >
            {children}
        </div>
    );
}

export default Modal;
