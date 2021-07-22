import BookState from "./components/context/books/BookState";
import BookForm from "./components/books/BookForm";
import Books from "./components/books/Books";

import { Container, Grid, CssBaseline } from "@material-ui/core";

function App() {
    return (
        <BookState>
            <CssBaseline />
            <Container fixed style={{ marginTop: "1rem" }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item md={6}>
                        <BookForm />
                    </Grid>
                    <Grid item md={6}>
                        <Books />
                    </Grid>
                </Grid>
            </Container>
        </BookState>
    );
}

export default App;
