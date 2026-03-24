import express from 'express'
import { map } from "./src/map.js";
import { whileLoop } from "./src/while.js";
import { strings } from "./src/strings.js";
import { forEach } from "./src/forEach.js";
import { estruturaLogica } from "./src/estruturaLogica.js";
import { array3 } from './src/array.js';
import { fibonacci } from './src/dowhile.js';
import { diaSemana } from './src/estruturaCase.js';
import { tabuada } from './src/for.js';
import { ifComum } from './src/estruturaCondicional.js';

const app = express()
const port = 3000

app.use(express.json());
app.use('/map', map)
app.use('/while', whileLoop)
app.use('/strings', strings)
app.use('/forEach', forEach)
app.use('/estruturaLogica', estruturaLogica)
app.use('/array', array3)
app.use('/dowhile', fibonacci)
app.use('/estruturaCase', diaSemana)
app.use('/for', tabuada)
app.use('/src/estruturaCondicional', ifComum)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
