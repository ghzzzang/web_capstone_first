// utils.js

// 파일 콘텐츠를 읽기위해 사용할 함수 

const fs = require('fs'),
    httpStatus = require(`http-status-codes`),
    contentTypes = require(`./content-types`);


// 파일을 읽고 응답을 돌려주기 위함 함수 

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {

            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving content!");
            }
            res.end(data);
        });
    }
};