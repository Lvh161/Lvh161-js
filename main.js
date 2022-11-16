// //alert("Xin chào!");
// var hoTen="LeVanHuong";
// var tuoi=21;
// alert(hoTen);//xuat hien truoc
// alert(tuoi);//xuat hien sau

//cmt 1 dong
/* 
cmt
nhieu
dong
*/

/**
 * cu phap /+*+*
 */

//Vo hiệu hóa mã dùng phím tắt
//Ctrl + /


//7.Cac hàm built in ( Ham duoc xay dung san)
// /**
//  * 1. Alert
//  * 2. Console   Chua nhieu ham
//  * 3. Confirm
//  * 4. Prompt
//  * 5. Set timeout
//  * 6. Set interval
//  * ...
//  */
// console.log("Day la 1 dong console!")//hien thi trong console log cua inspect>console
// console.warn("Day la 1 dong console!")//hien thi thong bao trong console log cua inspect>console
// console.error("Day la 1 dong console!")

// //confirm('Xac nhan co hay khong?')
// //prompt('Dien vao thong tin roi Xac nhan co hay khong?')

// // setTimeout(function () {
// //     prompt('Dien vao thong tin roi Xac nhan co hay khong?')
// // },2000)//Sau 2s thuc hien ham ben trong

// // setInterval(function () {
// //     console.error("Day la error: "+Math.random(arguments))
// // },200)//Moi 0,2s thuc hien ham ben trong

/** //8. Giới thiệu về toán tử trong Javascript
1. Toán tử số học - Arithmetic:
+ - * /
2. Toán tử gán - Assignment:
=; vd: var a="lvh";
3. Toán tử so sánh - Compariso:
> < == >= <= !=
4. Toán tử logic - Logical:
&& || !:not
 */

/*//9. Toan tu so hoc
+
-
*
/
**  Luy thua
%   Chia lay so du
++  Tang 1 gia tri
--  Giam 1 gia tri
*/

/* //10. Toan tu, prefix(tien to) & postfix(hau to)
Tien to:    vd: ++a;    //Giong nhu minh nghi
Hauto:      vd: b++;    //Tra ve so b

var atam=a=9;
var out1=++a; //no da cong 1 cho ban sao cua a  roi xuat ban sao cua a
alert("Tien to: "+out1+"\na Sau: "+a+"\nA dau: "+atam)
//10 10 9
var atam=a=9;
var out2=a++; //no cong 1 cho ban sao cua a, roi xuat a
alert("Hau to: "+out2+"\na Sau: "+a+"\nA dau: "+atam)
//9 10 9
*/

/*//11. if() else()
//Dung: co gia tri !=0
//if(1) alert("Dung");else alert("Sai");
//if(true) alert("Dung");else alert("Sai");
//if("a") alert("Dung");else alert("Sai");
//if(10) alert("Dung");else alert("Sai");

//sai:
 * 0
 * false
 * ''
 * ""
 * undefined vd: var a;
 * NaN
 * null
 

//if("") alert("Dung");else alert("Sai");
//if("0") alert("Dung");else alert("Sai");
//if(0) alert("Dung");else alert("Sai");
//if(null) alert("Dung");else alert("Sai");*/

/*//12. Kieu du lieu
***Symbol();//unique
vd: 
a=Symbol("hi");
b=Symbol("hi");
if(a!=b)
    alert("a se khac b => UNIQUE");
***Function
var a=function(){
    alert("Chao em, anh dung day tu chieu!")
}
//a()

//***Object
var a = {
    name:"Huong",
    'age': 10,
    func: function(){
        alert("Tay ninh")
    }
};
console.log('TenObject',a)

//***Array
var a = ['xin','chao'];
console.log(a)

//******typeof x******* 
var a=1,b='a',c,d=null,e=NaN,f=function(){};
var g={};
var h=[1,2];
var i=true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)
*/

/*//13. Toan tu so sanh === !===
//vd

var a=1;
var b='1'
alert(a==b)//=>true
alert(a===b)//=>false

var a='1';
var b='2'
//alert(a==b)//=>false
//alert(a===b)//=>false
alert(a!==b)//=>true

//=> 
//==chi so sanh gia tri- value
//===so sanh datatype
*/

/*//14. Cau dieu kien & phep so sanh: && ||


//vd 
var a=0,b=100;
var kq = a>b && b>a//false&&true=>xUAT FALSE CUA A>B
var kq2 = a>-1 && a>b
var kq3= 'a'&& 'b' && 'c'//=> XUAT c
alert(kq3);
*/

/**15. chuoi
 * -Dem ky tu chuoi:
 
 
//tao chuoi
var a="Le Van Huong 2 Huong 3 Huong" 
var b= new String("LVH") 
var c= 21
var str=`Xin chao, toi la ${a} ten viet tat la: ${b}, ${c} tuoi`

//dem chuoi
console.log(str.length)

//Tim vi tri chuoi  ***PHAN BIET CHU HOA CHU THUONG
console.log(a.indexOf('Huong'))
console.log(a.search('Huong'))//Khong the tim tu vi tri, Co the tim bieu thuc chính quy
//Tim vi tri chuoi sau, Bắt đầu tìm từ vị trí x ***PHAN BIET CHU HOA CHU THUONG
console.log(a.indexOf('Huong',12))
//Tim vi tri chuoi cuoi ***PHAN BIET CHU HOA CHU THUONG
console.log(a.lastIndexOf('Huong'))

//cat chuoi
var z="Le Van Huong 2 Huong 3 Huong" 
console.log(z.slice(7))
console.log(z.slice(7,12))
console.warn(z.slice(0,-8))
console.warn(z.slice(-1,-8))// cai nay dang bi loi

//Thay the chuoi
//Thay tu khoa dau tien cua chuoi
var y="Le Van Huong 2 Huong 3 Huong" 
console.log(y.replace("Huong","Ronanldo"))
//Thay all tu khoa cua chuoi ***Bang biểu thức chính quy: /str/g: vi tri tat ca cac chuoi str
console.log(y.replace(/Huong/g,"Ronanldo"))
//Chuyểm Upper <-> lower
console.log(y.toUpperCase())
console.log(y.toLowerCase())
//Xoa Khoang trang thua o dau va cuoi: trim()
var w="       Le Van Huong         2 Huong 3 Huong      " 
console.log(w.trim())
//Tach cac phan tu trong chuoi co diem chung la ... thanh mang : Split()
var v="Le, Van, Huong, Dep, Trai" 
console.log(v.split(", "))
//Lay ra ky tu tai vi tri index
const a = "LeVanHuong"
console.log(a.charAt(0)); //L   //
console.log(a[0]); //L          //

const b=[]
for(i=0;i<=a.length;i++){
    b.push(a[i])
}
console.log(b)//['L', 'e', 'V', 'a', 'n', 'H', 'u', 'o', 'n', 'g', undefined]
*/

/**16.So
 * NaN
 * isNaN
 * toString
 * toFixed() -3.1=3;    3.5=4 
 * //Lam tron 3 so sau so thap phan toFixed(3)
 
var a= 20/'a';
console.log(typeof NaN)//number
console.log(typeof a)//number
console.log(isNaN(a))//true

var b=2;
console.log(typeof b.toString())//string

var pi=3.14
var e=1.6
console.log(pi.toFixed())//string
console.log(e.toFixed())//string

var so=3.45678
console.log(so.toFixed(3))//string
*/

/**17. Mang
 * 1. Tao mang:
 * 2. so sanh array vs object ( typeof array = object)=> Array.isArray(...)
 * 
 * 3. toString()    //
 * 4. join()        //#(', ')  <=> Split(', ') //gop mang thanh string
 * 
 * 5. pop() //xoa phan tu o cuoi mang va tra no ve****Xoa het roi= undefined
 * 6. shift //xoa phan tu o dau mang va tra no ve****Xoa het roi= undefinded
 * 
 * 7. push()    //Them nhieu phan tu vao mang['','']*****tra ve do dai sau them
 * 8. unshift() //Them nhieu phan tu vao mang['','']*****tra ve do dai sau them
 * 
 * 9. Splice(x,y) //Xoa y phan tu tu vi tri x*****y=0, se them phan tu  x
 *      Splice(x,0,'a') //Se them 'a'  sau x, khong xoa gia tri nao sau x
 *      Splice(x,2,'a') //Se them 'a'  sau x, xoa 2 gia tri nao sau x
 *      Splice(x,2,'a') //Se them 'a'  sau x, xoa 2 gia tri nao sau x
 * 10. a.concat(b) noi chuoi a va b
 * 11. slice(1,2) cat tu vi tri 1->vitri 2
 *      slice(1) cat het phan tu tu vi tri 1
 *      *** slice(0) : copy mang
 
//1
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a[1]);
console.log(a);
console.log(a[3]);
console.log(a[3][0]);
//2
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(Array.isArray({}))//{}:Object
console.log(Array.isArray([]))//[]:Array
//3
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.toString())
//4
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.join('\\'))

var b = a.join('\\')//arr to str
console.log(b.split('\\'))//str to arr
//5
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.pop())
console.log(a)
console.log(a.pop())
console.log(a)

//6
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.shift())
console.log(a)

//7
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.push('Rong','Phung'))
console.log(a)
console.log(a[3].push('Rong','Phung'))
console.log(a)
console.log(a[3])

//8
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
console.log(a.unshift('Rong','khi','lon'))
console.log(a)

//9
var a=['Heo','Bo', 'trau',['Ga','Vit']];//0  1   2...
//a.splice();   //Khong xoa gi het
//a.splice(2);  //Xoa het tu 2 ve sau
//a.splice(1,2);     //Xoa 2 pt, tu vi tri 1
//a.splice(1,0,'a');   //Chen 'a' vao vi tri 1
//a.splice(1,1,'a');   //thay the 'a' vao vi tri 1
//a.splice(1,2,'a');   //Xoa 2pt tu vi tri 1, sau do them a vao vi tri 1
a.splice(1,2,'a', 'b');   //Xoa 2pt tu vi tri 1, sau do them a vao vi tri 1
console.log(a)

//10*
var a=['Heo','Bo'],b=['trau',['Ga','Vit']];
console.log(a)
console.log(b)
console.log(a.concat(b))

//11
var a=['Heo','Bo','trau',['Ga','Vit'],2];
//console.log(a.slice(1))
//console.log(a.slice(1,3)) //Cat tu vt1->vt3
console.log(a.slice(-4,-3)) //Lay ra con bo
    //var b= a.slice(0);//copy mang***()=(0)
    //console.log(b)
*/

/**Function 
 * 1. arguments
 * 2. return
 * 3. Ham trong ham
 * 4. Declaration vs Expression : function a() vs var a= function()
 *      Declaration có thể gọi trước dòng định nghĩa (Hosting)
 //1 
function ghiLog(){
    console.log(arguments);
}
ghiLog(1,2,3,4,5,6)
 
function ghiLog(){
    var a='';
    for(var param of arguments){
        a+=`${param} - `
    }
    console.log(a)
}
ghiLog(1,2,3,4,5,6,'demo','test')

//2.
var a = confirm('Chọn OK hay Cancel?');//OK: true, else false
confirm(a+'?!')

//3
function a() {
    function b(){
        console.log('Demo')
    }
    b()
}
a()

//setTimeout(function(){console.log("Demo")},10000)
var a=0;
setInterval(function(){
    a++;
    console.log(a); 
    if(a==10) return clearInterval(this); 
},200)

//4
a();
function a(){console.log("Demo1")}
//b(); // no se loi (ko hosting)
//var b=function(){console.log("Demo2")}
*/

/**Object
 * 

var objIn4={
    name: 'LVH',
    age: 18,
    address: 'Tay Ninh',
    'nguoi-Yeu': false
}
//Gan lai gia tri cho key
objIn4.name ="Le Van Huong"
console.log(objIn4.name)
//Them key moi
objIn4.email='huong32188@gmail.com'
objIn4['youremail']='32188@gmail.com'
//xuat key
console.log(objIn4.email)   //
console.log(objIn4['name']) //
console.log(objIn4['youremail'])    ///
console.log(objIn4.youremail)       ///
//Xuat ra 1 key ko ton tai=====>undefined
console.log(objIn4.a)
console.log(objIn4['b'])
//
 
//goi key tu bien ben ngoai
var objIn4={
    name: 'LVH',
    age: 18,
    address: 'Tay Ninh',
    'nguoi-Yeu': false
}
var diachi ='address';
console.log(objIn4[diachi])
//

//Them 1 key tu bien ben ngoai
var newkey='email'
var objIn4={
    name: 'LVH',
    age: 18,
    address: 'Tay Ninh',
    'nguoi-Yeu': false,
    [newkey]: 'Day la key goi vao'
}
console.log(objIn4)
//xoa 1 key:
delete objIn4.age
console.log(objIn4)

//Them key la 1 function
var objIn4={
    name: 'LVH',
    age: 18,
    address: 'Tay Ninh',
    'nguoi-Yeu': false,
    getName: function(){
        return this.name;//this=ten obj hien tai, thay doi ten obj this giu nguyen
    }
}
console.log(objIn4.getName())
//
objIn4.funct= function(){
    return 18;
}
console.log(objIn4.funct())
*/

/**Obj constructor
 * 1.Ham khoi tao
 * 2. Them thuoc tinh vao ham khoi tao -prototype
 
//1
function user(name, age, avt){
    this.name=name;
    this.age=age;
    this.avt=avt;
    this.getTenTuoi= function(){ //this o day cua function
        return `${this.name} ${this.age}`;//this o day goi cua getTenTuoi
    }
}
//Tao doi tuong
var author= new user('LVH',21,null);
var user01= new user('Nobody',21,null);
console.log(author);
console.log(user01);

// console.log(author.constructor);    //
// console.log(user);                  //
//them thuoc tinh cho doi tuong
author.log="Day la chu";
user01.info='Day la nguoi dung moi';
console.log(author.getTenTuoi());
console.log(user01);
//2
function User(name, age, avt){
    this.name=name;
    this.age=age;
    this.avt=avt;
    this.getTenTuoi= function(){ //this o day cua function
        return `${this.name} ${this.age}`;//this o day goi cua getTenTuoi
    }
}
//Tao doi tuong moi, them thuoc tinh vao doi tuong
var user02 = new User('huong', 21, null)
User.prototype.email="huong@SADSAD.com"
console.log(user02.getEmail())
//Tao them phuong thuc vao trong ham khoi tao
User.prototype.getEmail = function(){
    return this.email + ' La email cua: '+ this.name;
}
console.log(user02.getEmail())
*/

/**Doi tuong date
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 1. tao doi tuong date() & xuat doi tuong
 * 2. xuat
 
//1
var ngayHT2 = Date(); //Day khong phai doi tuong
console.log(typeof ngayHT2)//string
//
var ngayHT = new Date();//Khoi tao doi tuong 
console.log(typeof ngayHT)//object
console.log(ngayHT)//Wed Nov 16 2022 11:20:50 GMT+0700 (Indochina Time)
//2
console.log(ngayHT.getDate())   //number ->Ngay
console.log(ngayHT.getDay())    //number ->Thu: 2:1; 3:2...
console.log(ngayHT.getMonth()+1)    //number ->Thang: *********+1
console.log(ngayHT.getFullYear())    //number ->nam

console.log(ngayHT.getHours())    //number ->h
console.log(ngayHT.getMinutes())    //number ->p
console.log(ngayHT.getSeconds())    //number ->s
console.log(Date.now())    //number

var mybirth= new Date(2001,0,16)
console.log(mybirth)
var mybirth2= new Date(2001,0,16,17,0,0)//nam,thang,ngay,h,p,s
console.log(mybirth2)
*/

/**Cau lenh re nhanh switch
var chon ="H";
switch(chon){
    case 1:
    case 2: 
    case 3:
    case 4: console.log('Bạn đã chọn:'+chon); break;
    case 5:
    case 6: console.log('Em đã chọn:'+chon); break;
    case 'H': console.log("Oh shit!"); break;
    default: console.log('Bạn đã chọn sai!'); break;
}
 */

/**Toan tu 3 ngoi
var tien=12;
console.log(tien==0 ?'free':'Tinh phi')
 */

/**Vong lap for
 * 2. in=> key
 * 3. of=>value
 * 
 //1.vong lap giong nhau
for(i=0;i<=100;i++){
    console.log("Lap lan: "+i)
}
for(i=0;true;i++){
    console.log("Lap lan: "+i)
    if(i==100) break;
}
for(i=0;true;){
    console.log("Lap lan: "+i)
    if(i==100) break;
    i++
}
//cho dieu kien dung ra ngoai de tiet kiem thoi gian chay vong lap
var ngonNgu=[
'Java',
'C/C++',
'C#',
'Pascal',
'Html',
'Css',
'JS']
//console.log(ngonNgu[2])
var t= new Date();
var ts=t.getMilliseconds();
var x=ngonNgu.length    ////dk lap ngonNgu.length;=>4ms
for(i=0;i<x;i++){       //dk lap ngonNgu.length;=>5ms
    console.log(ngonNgu[i]);
}
var t2= new Date();
var te=t2.getMilliseconds();
console.log(te-ts)

//2.for in
//-----------object-----------
var myobj={
    name:'LvH'
}
for(i=0;i<100;i++){
    myobj['name'+i]='LvH'+i;
}
console.log(myobj);

//Ham tra ve 1 mang la tat ca cac key trong object
console.log(Object.keys(myobj))

//duyet qua tat ca key:
for(var nickname in myobj){
    console.log(nickname+': '+myobj[nickname]);
}
//-----------array-----------
var myArray='Professionalstools'
//duyet qua tat ca key:
for(var nickname in myArray){
    console.log(myArray[nickname]);
}
//3. for of ----vs-----for in
//-----------array-----------
var a={}
for(i=0;i<100;i++){
    a['key'+i]='value'+i
}
var myArray=Object.values(a)
console.log(myArray)
//duyet qua tat ca key:
for(var value in myArray){
    console.log(myArray[value]);    //
}
for(var value of myArray){
    console.log(value);             //
}
*/











// var a=-9, b=10
// var aa= function(a,b){
//     a+=b;
//     b=a-b;
//     a-=b;
// console.warn('a='+a+', b='+b)
// }
// console.warn('a='+a+', b='+b)
// aa(a,b)




