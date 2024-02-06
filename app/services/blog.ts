import axios from "axios";

const API_URL = "http://localhost:1337/api";
export const IMAGE_URL = "http://localhost:1337";

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
    getPostByCategory: async () => {},
};

export default service;
