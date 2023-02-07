var http = require('http');
var hostname = "127.0.0.1";
// ^도메인 주소의 컴퓨터 내부 ip주소
var port = 8080;

http.createServer(function (req, res) {
    const path = req.url; //req.url에는 port와 ip번호를 제외한 url이 들어가게 됩니다.
    const method = req.method;
    if (path === '/products') { //아티클 정보를 받아오는 요청
        if (method === 'GET') { //멤버들 정보를 받아오는 요청
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const products = JSON.stringify([
                {
                    name: "농구공",
                    price: 5000
                },
            ]);
            res.end(products);
        } else if (method === 'POST') { //멤버가 회원가입을 할 때 요청
            res.end("생성되었습니다!!!");
        }
    }
    res.end("goodbye!");

});
