import * as types from "../types";

const bookReducer = (state, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
                ...state,
                books: action.payload,
            };
        case types.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        case types.UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map((book) =>
                    book.id === action.payload.id ? action.payload : book
                ),
            };
        case types.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };
        case types.SET_CURRENT:
            return {
                ...state,
                current: action.payload,
            };
        case types.CLEAR_CURRENT:
            return {
                ...state,
                current: null,
            };
        default:
            return state;
    }
};

export default bookReducer;
