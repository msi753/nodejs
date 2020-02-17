//util모듈을 가져와서 inherits메서드를 사용한다.
var util = require('util');
//events모듈을 가져와서 EventEmitter객체를 참조한다.
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
    var self = this;

    this.on('stop', function() {
        console.log('Calc에 stop event 전달됨');
    });
};

util.inherits(Calc, EventEmitter);

//Calc객체는 프로토타입 객체
Calc.prototype.add = function(a,b) {
    return a+b;
}

//calc3.js파일에서 정의한 모듈을 불러들이는 쪽에서 Calc객체를 참조할 수 있도록 exports에 Calc객체를 지정
module.exports = Calc;
//title의 속성값으로 calculator라는 이름을 설정
module.exports.title = 'calculator';