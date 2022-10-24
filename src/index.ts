// const express = require('express')
import express from 'express';
const app = express()
const port = 3000;


const list = [{
  id: 1,
  name: "Taro",
  team: "A"
}, {
  id: 2,
  name: "Jiro",
  team: "B"
}]

app.get('/', (req, res) => {
  res.status(200).send(list)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

