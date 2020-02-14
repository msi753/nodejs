var result = 0;

//time(id): 실행 시간을 측정하기 위한 시작 시간을 기록
console.time('duration_sum');

for (var i=1; i<=1000; i++) {
    result += i;
}

//timeEnd(id): 실행 시간을 측정하기 위한 끝 시간을 기록
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물: %d', result);

//파일의 전체 패스, 폴더의 전체 패스가 출력
console.log('현재 실행한 파일의 이름: %s', __filename);
console.log('현재 실행한 파일의 패스: %s', __dirname);

//JSON포맷
var Person = {name:"소녀시대", age:20};

//dir(object): 자바스크립트 객체의 속성들을 출력
console.dir(Person);

