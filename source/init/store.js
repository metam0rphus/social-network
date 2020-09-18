// Core
import { createStore } from "redux";

// Reducer
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

// Enhancer
import { enhancedStore, sagaMiddleware } from "./middleware/core";

export const store = createStore(rootReducer, enhancedStore);

// Важно вызвать после создания стор
sagaMiddleware.run(rootSaga);
