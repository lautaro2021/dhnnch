import axios from "axios";

const API_URL = "http://localhost:1337/api";
export const IMAGE_URL = "http://localhost:1337";

type CategoryType = "blog" | "action" | "fly";

const service = {
    getPosts: async () => {
        const url = `${API_URL}/posts?populate[image][fields][0]=url`;

        try {
            const res = await axios.get(url);

            return res;
        } catch (error) {
            console.log(error);
            throw new Error(error as string);
        }
    },
    getPostByCategory: async (category: CategoryType) => {
        const url = `${API_URL}/post-categories?filters[category][$eq]=${category}&populate=*`;

        try {
            const res = await axios.get(url);

            return res;
        } catch (error) {
            console.log(error);
            throw new Error(error as string);
        }
    },
};

export default service;
