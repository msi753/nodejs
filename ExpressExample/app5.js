//Express 기본 모듈 불러오기
var express= require('express');
var http = require('http');
var path = require('path');

//Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var static = require('serve-static');

//익스프레스 객체 생성
var app = express();

//기본 포트를 app객체에 속성으로 설정
app.set('port', process.env.PORT||3000);

//Express 서버 시작
http.createServer(app).listen(app.get('port'), function() {
    console.log('익스프레스 서버를 시작했습니다:'+app.get('port'));
});

//body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));   //인코딩

//body-parser를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

//JSON객체
app.use(function(req, res, next) {
    console.log('첫 번째 미들웨어에서 요청을 처리함');
    
    const paramId = req.body.id || req.query.id;
    const paramPw = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>paramId:'+paramId+'</p></div>');
    res.write('<div><p>paramPw:'+paramPw+'</p></div>');
    res.end();
});