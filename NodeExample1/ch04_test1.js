//url모듈 호출
var url = require('url');

//주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.serach.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

//URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열: %s', curStr);
console.dir(curURL);

/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'm.serach.naver.com',
  port: null,
  hostname: 'm.serach.naver.com',
  hash: null,
  search: '?query=steve+jobs&where=m&sm=mtp_hty',
  query: 'query=steve+jobs&where=m&sm=mtp_hty',
  pathname: '/search.naver',
  path: '/search.naver?query=steve+jobs&where=m&sm=mtp_hty',
  href: 'https://m.serach.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty'
}
*/

//요청 파라미터 구분하기
//querystring모듈 사용하기
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값: %s', param.query);    //steve jobs
console.log('원본 요청 파라미터: %s', querystring.stringify(param));    //query=steve%20jobs&where=m&sm=mtp_hty