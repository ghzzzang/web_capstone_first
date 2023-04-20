// router.js

// 모듈 임포트 

const httpStatus = require(`http-status-codes`),
    contentTypes = require(`./content-types`),
    utils = require(`./utils`);

// routes 객체 


const routes = {
    // method에 따라 매핑되는 라우트와 함수가 여기에 담긴다. 
    "GET": {},
    "POST": {}
}

// 요청을 처리하기위한 handle 함수 
exports.handle = (req, res) => {
    try {
        routes[req.method][req.url](req, res);
    }
    catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};

// 라우트 함수를 매핑하기 위한 get과 post 함수 생성 

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
}