// main.js 

// 변수 및 모듈 

const port = 3000,
    http = require(`http`),
    httpStatus = require(`http-status-codes`),
    router = require('./router'),
    utils = require(`./utils`),
    contentTypes = require(`./content-types`);


// router 모듈로 라우트 등록 

// 홈페이지 get 요청 라우트 
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});

// 코스 페이지 get 요청 라우트 
router.get("/courses.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

// contact 페이지 get 요청 라우트
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

// contact 페이지에서 post 요청 라우트 
router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

// css 라우트 
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});

// images 라우트

router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});

// javascript 라우트
router.get("/confettiCuisine.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confettiCuisine.js", res);
});


// 서버 시작 
http.createServer(router.handle).listen(port);
console.log(`The server has started. server is running on http://localhost:${port}`);