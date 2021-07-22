import React, { useReducer } from "react";
import BookContext from "./bookContext";
import bookReducer from "./bookReducer";
import * as types from "../types";

const BookState = (props) => {
    const initialState = {
        books: null,
        current: null,
        loading: false,
    };

    const [state, dispatch] = useReducer(bookReducer, initialState);

    // Get Books
    const getBooks = async () => {
        try {
            const response = await fetch("/books");
            const data = await response.json();
            dispatch({ type: types.GET_BOOKS, payload: data });
        } catch (error) {
            console.error(error);
        }
    };

    // Add Book
    const addBook = async (book) => {
        try {
            const response = await fetch("/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(book),
            });
            const data = await response.json();
            dispatch({ type: types.ADD_BOOK, payload: data });
        } catch (error) {
            console.error(error);
        }
    };
    // Delete Book
    const deleteBook = async (id) => {
        try {
            await fetch(`/books/${id}`, {
                method: "DELETE",
            });
            dispatch({ type: types.DELETE_BOOK, payload: id });
        } catch (error) {
            console.error(error);
        }
    };
    // Update Book
    const updateBook = async (book) => {
        try {
            const response = await fetch(`/books/${book.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(book),
            });
            const data = await response.json();
            dispatch({ type: types.UPDATE_BOOK, payload: data });
        } catch (error) {
            console.error(error);
        }
    };
    // Set Current Book
    const setCurrent = (book) => {
        dispatch({ type: types.SET_CURRENT, payload: book });
    };
    // Clear Current
    const clearCurrent = () => {
        dispatch({ type: types.CLEAR_CURRENT });
    };
    // Filter Books
    // Clear Filter

    return (
        <BookContext.Provider
            value={{
                books: state.books,
                current: state.current,
                getBooks,
                addBook,
                updateBook,
                deleteBook,
                setCurrent,
                clearCurrent,
            }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookState;
