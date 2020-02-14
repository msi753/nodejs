//console객체는 전역 객체Global Object
//dir는 자바스크립트 객체의 속성들을 출력
//process객체는 프로그램을 실행했을 때 만들어지는 프로세스 정보를 다루는 객체
//env는 환경 변수 정보
console.dir(process.env);

console.log('OS 환경 변수의 값: ' + process.env['OS']);