import app from "./app";

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`We have lift off!! See you on port ${port}`)
})

