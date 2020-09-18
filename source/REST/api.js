import { getPostsFetch, getPostsCreate } from "../instruments/mockedData";

export const api = {
    posts: {
        fetch () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        status: 200,
                        json () {
                            return getPostsFetch();
                        },
                    });
                }, 1000);
            });
        },
        create (comment) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        status: 200,
                        json () {
                            return getPostsCreate(comment);
                        },
                    });
                }, 1000);
            });
        },
    },
};
