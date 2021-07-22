import React, { useContext, useEffect } from "react";
import BookContext from "../context/books/bookContext";
import BookItem from "./BookItem";

import { Grid, CircularProgress } from "@material-ui/core";
const Books = () => {
    const bookContext = useContext(BookContext);
    const { books, getBooks } = bookContext;

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line
    }, []);
    if (books !== null && books.length === 0) {
        return <h2>Please add a book...</h2>;
    }
    return (
        <Grid container spacing={1}>
            {books !== null ? (
                books.map((book) => (
                    <Grid item xs={12} key={book.id}>
                        <BookItem book={book} />
                    </Grid>
                ))
            ) : (
                <CircularProgress />
            )}
        </Grid>
    );
};

export default Books;
