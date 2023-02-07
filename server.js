const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());
// cors 모든 브라우저에서 서버에 접속할 수 있게된다.
// app.use(express.json());을 통해 express에서 json을 사용 가능하게 한다.
app.get('/products', async (req, res) => {
    const query = req.query;
    console.log(cors());
    res.send({
        "products": [
            {
                "id": 1,
                "name": "농구공",
                "price": 100000,
                "seller": "조던",
                "imageUrl": "images/products/basketball1.jpeg"
            },
            {
                "id": 2,
                "name": "축구공",
                "price": 50000,
                "seller": "메시",
                "imageUrl": "images/products/soccerball1.jpg"
            },
            {
                "id": 3,
                "name": "키보드",
                "price": 10000,
                "seller": "그랩",
                "imageUrl": "images/products/keyboard1.jpg"
            }
        ]
    });
})

app.post("/products", (req, res) => {
    const body = req.body;
    res.send({
        body
    });
});

app.get("/products/:id/events/eventId", (req, res) => {

    const params = req.params;
    const { id, eventId } = params; //{id : 값} 형태로 들어옵니다.
    res.send(`id는 ${params.id}입니다.`);
});


app.listen(port, () => {

    console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");

});