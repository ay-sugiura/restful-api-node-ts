// const express = require('express')
import express from "express"; // ES5形式で記載する
const app = express();
const port = 3000;

// 簡易的にデータを定義
const members = [{
  id: "1",
  name: "Taro",
  team: "A"
}, {
  id: "2",
  name: "Jiro",
  team: "B"
}, {
  id: "3",
  name: "Saburo",
  team: "C"
}]

// パスパラメータを設定しない場合は全メンバーの情報取得 localhost:3000
app.get('/', (req, res) => {
  res.status(200).send(members)
});

// パスパラメータを設定する場合 例）localhost:3000/1
app.get('/:id', (req, res) => {
  const id = req.params.id;
  const member = members.filter((member)=>member.id===id)
  res.status(200).send(member)
});


app.listen(port, () => console.log(`Example app membersening on port ${port}!`));
