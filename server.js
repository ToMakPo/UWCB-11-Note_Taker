const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Server Homes')
// })

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})