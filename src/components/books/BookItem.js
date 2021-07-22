import React, { useContext } from "react";
import PropTypes from "prop-types";
import BookContext from "../context/books/bookContext";

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const BookItem = ({ book }) => {
    const bookContext = useContext(BookContext);
    const { setCurrent, deleteBook, clearCurrent } = bookContext;
    const { title, author, description, id } = book;
    const onDelete = () => {
        deleteBook(id);
        clearCurrent();
    };
    const onEdit = () => {
        setCurrent(book);
        if (window.innerWidth < 960) {
            window.scrollTo(0, 0);
        }
    };
    return (
        <Card>
            <CardHeader title={title} subheader={author}></CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="edit book"
                    color="primary"
                    onClick={onEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete book" onClick={onDelete}>
                    <DeleteIcon color="secondary" />
                </IconButton>
            </CardActions>
        </Card>
    );
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookItem;
