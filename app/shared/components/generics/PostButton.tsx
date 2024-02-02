import Link from "next/link";

function PostButton({ cta }: { cta: { text: string; link: string } }) {
    return (
        <Link href={cta?.link}>
            <span className="text-link font-link leading-link text-primaryBlue underline underline-offset-4">
                {cta?.text}
            </span>
        </Link>
    );
}

export default PostButton;
