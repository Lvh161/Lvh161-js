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

*/
//vd 
var a=0,b=100;
var kq = a>b && b>a//false&&true
var kq2 = a>-1 && a>b
var kq3= 'a'&& 'b' && 'c'//c
alert(kq3);







