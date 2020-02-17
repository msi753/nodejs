var fs = require('fs');

//파일에 데이터를 씁니다.(open->write->close)
//w(쓰기에 사용하는 플래그), 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제합니다.
//파일이 열리면 fd객체를 전달받을 수 있으므로 이 fd객체로 파일을 구별합니다.
fs.open('./output.txt', 'w', function(err, fd) {    
    if(err) throw err;

    var buf = new Buffer('안녕\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if(err) throw err;

        console.log(err, written, buffer);

        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});
