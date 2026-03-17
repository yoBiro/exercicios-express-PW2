import express from 'express'
import { map } from "./src/map.js";
import { whileLoop } from "./src/while.js";
import { strings } from "./src/strings.js";
import { forEach } from "./src/forEach.js";
import { estruturaLogica } from "./src/estruturaLogica.js";

const app = express()
const port = 3000

app.use(express.json());
app.use('/map', map)
app.use('/while', whileLoop)
app.use('/strings', strings)
app.use('/forEach', forEach)
app.use('/estruturaLogica', estruturaLogica)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
