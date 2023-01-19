import {SET_ERROR} from "./actionTypes";
import {AxiosError} from "axios";

export type SetErrorType = {
    type: string
    payload: string | null
}

const setError = (error :AxiosError): SetErrorType => {
    return {
        type: SET_ERROR,
        //<string>error.response.data Аннотации <string>или as string сообщают компилятору TypeScript,
        // что во время компиляции он должен обрабатываться как error.response.data строка
        payload: error ? (error.response.data as string ?? 'Ошибка. Обратитесь в разработчику приложения') : null
    }
}

export default {
    setError,
}