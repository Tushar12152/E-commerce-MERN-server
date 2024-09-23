const app = require('./app');
const {serverPort} = require('./secret');


app.listen(serverPort, () => {
    console.log(`this server is going on port http://localhost:${serverPort}`)
})