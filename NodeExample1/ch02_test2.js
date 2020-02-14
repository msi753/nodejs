//프로세스 객체 process

//프로세스를 실행할 때 전달되는 파라미터(매개변수) 정보, 배열 객체
console.log('argv 속성의 파라미터 수:' + process.argv.length);
console.dir(process.argv);

if(process.argv.length>2) {
    console.log('세 번째 파라미터의 값: %s', process.argv[2]);
}

process.argv.forEach(function(item, index){
    console.log(index + ':' + item);
});