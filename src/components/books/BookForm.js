import React, { useState, useContext, useEffect } from "react";
import BookContext from "../context/books/bookContext";

import { Button, ButtonGroup, TextField } from "@material-ui/core";

const BookForm = () => {
    const bookContext = useContext(BookContext);
    const { addBook, updateBook, current, clearCurrent } = bookContext;

    useEffect(() => {
        if (current !== null) {
            setBook(current);
        } else {
            setBook({
                title: "",
                description: "",
                author: "",
            });
        }
    }, [bookContext, current]);

    const [book, setBook] = useState({
        title: "",
        description: "",
        author: "",
    });

    const { title, description, author } = book;

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addBook(book);
        } else {
            updateBook(book);
        }
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit} style={{ position: "sticky", top: "2rem" }}>
            <h2>{current ? "Edit Book" : "Add Book"}</h2>
            <TextField
                fullWidth
                required
                // margin="normal"
                name="title"
                label="Title"
                value={title}
                onChange={onChange}
            />
            <TextField
                fullWidth
                multiline
                required
                // margin="normal"
                name="description"
                label="Description"
                value={description}
                onChange={onChange}
            />
            <TextField
                fullWidth
                required
                margin="normal"
                name="author"
                label="Author"
                value={author}
                onChange={onChange}
            />
            <ButtonGroup fullWidth style={{ marginTop: "2rem" }}>
                <Button type="submit" variant="contained">
                    {current ? "Update Book" : "Add Book"}
                </Button>
                {current && (
                    <Button variant="contained" onClick={() => clearCurrent()}>
                        Clear
                    </Button>
                )}
            </ButtonGroup>
        </form>
    );
};

export default BookForm;
