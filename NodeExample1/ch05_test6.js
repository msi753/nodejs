//http모듈 불러오기
var http = require('http');
var fs = require('fs');

//웹 서버 객체를 만듭니다.
var server = http.createServer();

//웹 서버를 시작하여 192.168.0.6 IP와 3000번 포트에서 대기하도록 설정합니다.
var port = 3000;
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다.: %d', port);
});

//클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다.: %s, %d', addr.address, addr.port);
});

//클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    
    var filename = 'house.jpg';
    //파일을 버퍼에 담아 두고 일부분만 읽어 응답 보내기
    var infile = fs.createReadStream(filename, {flags:'r'});
    var filelength = 0;
    var curlength = 0;

    fs.stat(filename, function(err, stats){
        filelength = stats.size;
    });
    
    //헤더
    res.writeHead(200, {"Content-Type":"image/png"});

    //파일 내용을 스트림에서 읽어 본문 쓰기
    infile.on('readable', function() {
        var chunk;
        while(null!=(chunk=infile.read())) {
            console.log('읽어 들인 데이터 크기: %d', chunk.length);
            curlength += chunk.length;
            res.write(chunk, 'utf-8', function(err) {
                console.log('파일 부분 쓰기 완료: %d, 파일 크기: %d', curlength, filelength);
                if(curlength>=filelength) {
                    //응답 전송하기
                    res.end();
                }
            });
        }
    });
    
});

//서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});