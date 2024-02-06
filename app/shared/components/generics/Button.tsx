function Button({ text, overline }: { text: string; overline?: boolean }) {
    return (
        <button
            className={`h-[48px] rounded-[2px] px-[24px] ${
                overline
                    ? "border-[1px] border-primaryBlue bg-transparent text-primaryBlue hover:bg-primaryBlue hover:text-white"
                    : "bg-primaryBlue text-white hover:bg-transparent hover:text-primaryBlue border-[1px] border-primaryBlue"
            } text-button font-button leading-button w-min whitespace-nowrap transition-all sm:w-full`}
        >
            {text}
        </button>
    );
}

export default Button;
