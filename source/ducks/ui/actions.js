// Types
import { types } from "./types";

export const uiActions = {
    // запускает спиннер
    startFetching: () => ({
        type: types.START_FETCHING,
    }),
    // останавливает спиннер
    stopFetching: () => ({
        type: types.STOP_FETCHING,
    }),
    // ошибка
    emitError: (error, meta = null) => ({
        type:    types.EMIT_ERROR,
        payload: error,
        error:   true,
        meta,
    }),
};
