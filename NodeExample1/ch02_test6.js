//외장 모듈을 사용하려면...npm패키지를 다운받아 설치한다.
//이 경우에는 NodeExample1 디렉터리로 이동 후, npm install nconf 명령어를 실행한다
var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값: %s', nconf.get('OS'));  //OS 환경 변수의 값: Windows_NT