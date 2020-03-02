//특정 폴더의 파일들을 특정 패스로 접근할 수 있도록
//public폴더에 있는 모든 파일을 웹 서버의 루트 패스로 접근할 수 있도록 만들기
const static = require('serve-static');
app.use('/public', static(path.join(__dirname, 'public')));

