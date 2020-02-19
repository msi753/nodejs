var winston = require('winston');   //로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file');    //로그 일별 처리 모듈
var moment = require('moment'); //시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    // ex) 2016-05-01 20:14:28.5000 +0900
};

//Logger로거는 로그를 출력하는 객체, transports라는 속성 값으로 여러 개의 설정 정보를 전달할 수 있다.
var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name:'info-file',
            filename:'./log/server',
            datePattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize:50000000,   //50MB를 넘어가면 자동으로 새로운 파일로 생성되며
            maxFiles:1000,      //이때 분리되어 생성되는 파일의 개수는 1000개를 넘을 수 없다.
            level:'info',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new(winston.transports.Console)({
            name:'debug-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name:'exception-file',
            filename:'./log/exception',
            datePattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize:50000000,
            maxFiles:1000,
            level:'error',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new(winston.transports.Console)({
            name:'exception-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ]
});