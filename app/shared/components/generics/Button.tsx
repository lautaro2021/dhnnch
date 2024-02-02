function Button({ text, overline }: { text: string; overline?: boolean }) {
    return (
        <button
            className={`h-[48px] rounded-[2px] px-[24px] ${
                overline
                    ? "border-[1px] border-primaryBlue bg-transparent text-primaryBlue"
                    : "bg-primaryBlue text-white"
            } text-button font-button leading-button w-min whitespace-nowrap`}
        >
            {text}
        </button>
    );
}

export default Button;
