var Users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:23}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수: %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users); //[ { name: '소녀시대', age: 20 }, <1 empty item>, { name: '티아라', age: 23 } ]
//베열의 개수는 3개(그대로)인 채 객체만 삭제된다, undefined로 남는다.

Users.splice(1,0,{name:'애프터스쿨',age:25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);     //소녀시대, 애프터스쿨, empty, 티아라

Users.splice(2,1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');
console.log(Users); //소녀시대, 애프터스쿨, 티아라

