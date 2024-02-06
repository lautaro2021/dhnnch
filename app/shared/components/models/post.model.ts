type ImageType = {
    data: {
        attributes: {
            url: string;
        };
    };
};

type AttributesType = {
    description: string;
    slug: string;
    title: string;
    image: ImageType;
};

export type PostType = {
    id: number;
    attributes: AttributesType;
};
