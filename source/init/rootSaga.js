// Core
import { call, all } from "redux-saga/effects";

// Watchers
import { watchPosts } from "../ducks/posts/saga/watchers";

export function* rootSaga () {
    yield all([call(watchPosts)]);
}
