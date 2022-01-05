// express application을 구성
import express from "express";
const app = express();

// view engine을 Pug로 설정
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
//user가 볼 수 있는 public 폴더
app.use("/public", express.static(__dirname + "/public"));
//홈페이지로 이동 시 사용될 템플릿 렌더링
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
