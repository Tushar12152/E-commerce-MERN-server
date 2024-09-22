const app = require('./app');
const port = process.env.port || 5001


app.listen(port, () => {
    console.log(`this server is going on port http://localhost:${port}`)
})