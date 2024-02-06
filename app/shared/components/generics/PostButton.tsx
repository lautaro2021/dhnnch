import Link from "next/link";

function PostButton({ slug }: { slug: string }) {
    return (
        //Here, slug is an UNIQUE IDENTIFICATOR. Href must be /slug
        <Link href={""}>
            <span className="text-link font-link leading-link text-primaryBlue underline underline-offset-4">
                Call to action
            </span>
        </Link>
    );
}

export default PostButton;
