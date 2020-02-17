//파일 시스템에 접근하기 위해 fs모듈을 사용한다.
var fs = require('fs');

//파일을 동기식 IO로 읽어들입니다.
var data = fs.readFileSync('../package.json', 'utf8');

//읽어들인 데이터를 출력합니다.
console.log(data);