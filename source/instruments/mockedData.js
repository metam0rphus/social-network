// Core
import { Map } from "immutable";

export const mockedProfile = Map({
    firstName: "Walter",
    lastName:  "White",
    avatar:    "",
});

export const getPostsCreate = (comment) => ({
    message: "test",
    data:    {
        author: {
            id:        "sdfdsdfs4532wf43f",
            firstName: "Andrey",
            lastName:  "Komarov",
            avatar:    "",
        },
        comment,
        created: new Date().valueOf(),
        likes:   [],
        id:      4,
    },
    meta: {},
});

export const getPostsFetch = () => ({
    message: "test",
    data:    [
        {
            author: {
                id:        "sdfdsdfs4532wf43f",
                firstName: "Andrey",
                lastName:  "Komarov",
                avatar:    "",
            },
            comment: "123",
            created: new Date().valueOf(),
            likes:   [],
            id:      1,
        },
        {
            author: {
                id:        "sdfdsdfs4532wdf3f",
                firstName: "Den",
                lastName:  "Abramov",
                avatar:    "",
            },
            comment: "123",
            created: new Date().valueOf(),
            likes:   [],
            id:      2,
        },
        {
            author: {
                id:        "sdfdsdfs4re2wf43f",
                firstName: "Andrey",
                lastName:  "Frolov",
                avatar:    "",
            },
            comment: "123",
            created: new Date().valueOf(),
            likes:   [],
            id:      3,
        }
    ],
    meta: {},
});
