import { forwardRef } from "react";
import PostButton from "../generics/PostButton";
import { IMAGE_URL } from "@/app/services/blog";

function Post(
    {
        img,
        title,
        description,
        slug,
    }: {
        img?: string;
        title: string;
        description: string;
        slug: string;
    },
    ref: React.Ref<HTMLDivElement>
) {
    const url = `${IMAGE_URL}${img}`;

    return (
        <article
            ref={ref}
            className="w-[384px] flex flex-col gap-[16px] min-w-[384px] m:min-w-[300px] m:max-w-[300px]"
        >
            <picture className="relative w-full h-[282px] rounded-[8px] overflow-hidden">
                <img
                    src={url}
                    alt={title}
                    title={title}
                    className="object-cover"
                />
            </picture>
            <hr className="h-[2px] bg-grey" />
            <div className="flex flex-col gap-[8px]">
                <h6 className="text-h6 font-h6 leading-h6 text-grey">
                    {title}
                </h6>
                <span className="text-span font-span leading-span text-lightGreyText">
                    {description}
                </span>
                <PostButton slug={slug} />
            </div>
        </article>
    );
}

export default forwardRef(Post);
