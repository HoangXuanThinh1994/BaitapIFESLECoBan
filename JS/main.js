// /**Xuất 3 số theo thứ tự tăng dần
//  * Khối 1: 
//  * So1: số thứ 1
//  * So2: số thứ 2
//  * So3: số thứ 3
//  *Khối 2:
//  B1: Nhập giá trị input
//  B2: nhập lệnh IF ELSE lồng nhau
//  Nếu a>b,b>c -> a>b>c
//  Nếu a>b,b<c,a<c ->c>a>b
// Nếu a>b,b<c,a>c ->a>c>b
//  Nếu a<b,b<c => c>b>a
//  Nếu a<b,b>c,a<c => a<c<b
//  Nếu a<b,b>c,a>c => c<a<b
//
//*Khối 3:
//Sắp xếp
function txtTang() {
    var num1 = parseInt(document.getElementById("So1").value);
    var num2 = parseInt(document.getElementById("So2").value);
    var num3 = parseInt(document.getElementById("So3").value);
    var elementResult = document.getElementById("txtTang")
    // console.log(num1, num2, num3);
    if (num1 >= num2 && num1 >= num3) {
        if (num2 > num3) {
            // console.log(num1 + " > " + num2 + ">" + num3)
            elementResult.innerText = num1 + " > " + num2 + ">" + num3;
        }
        else {
            // console.log(num1 + " > " + num3 + ">" + num2)
            elementResult.innerText = num1 + " > " + num3 + ">" + num2;
        }
    }
    else if (num2 >= num1 && num2 >= num3) {
        if (num1 > num3) {
            // console.log(num2 + " > " + num1 + ">" + num3)
            elementResult.innerText = num2 + " > " + num1 + ">" + num3;
        }
        else {
            // console.log(num2 + " > " + num3 + ">" + num1)
            elementResult.innerText = num2 + " > " + num3 + ">" + num1;
        }
    }
    else if (num3 >= num2 && num3 >= num1) {
        if (num2 > num1) {
            // console.log(num2 + " > " + num1 + ">" + num3)
            elementResult.innerText = num3 + " > " + num2 + ">" + num1;
        }
        else {
            // console.log(num2 + " > " + num3 + ">" + num1)
            elementResult.innerText = num3+ " > " + num1 + ">" + num2;
        }
    }
}
document.getElementById("btnTang").onclick = txtTang;

/**Chương trình "Chào hỏi"
 * Khối 1
 * tạo dropdown để gửi lời chào
 * Khối 2
 * nhập giá trị input
 * sử dụng câu điều kiện if...else if... else.
 * if(guiLoi == Bo){
        guiLoichao.innerText = ("Xin chào Bố!");
    }else if(guiLoi == Me){
        guiLoichao.innerText = ("Xin chào Mẹ!");
    }else if(guiLoi == Anh){
        guiLoichao.innerText = ("Xin chào Anh Trai!");
    }else if(guiLoi == Em){
        guiLoichao.innerText = ("Xin chào Em gái!");
    }else{
        guiLoichao.innerText = ("Xin chào Người lạ ơi!");
    }
 * khối 3
 * Gửi lời chào
 */
function txtGui(){
    var Chon = document.getElementById("C").value;
    var Bo = document.getElementById("B").value;
    var Me = document.getElementById("M").value;
    var Anh = document.getElementById("A").value;
    var Em = document.getElementById("E").value;
    var guiLoi = document.getElementById("chaoHoi").value;
    var guiLoichao = document.getElementById("txtGui");
    // console.log(Chon,Bo,Me,Anh,Em,guiLoi);
    if(guiLoi == Bo){
        guiLoichao.innerText = ("Xin chào Bố!");
    }else if(guiLoi == Me){
        guiLoichao.innerText = ("Xin chào Mẹ!");
    }else if(guiLoi == Anh){
        guiLoichao.innerText = ("Xin chào Anh Trai!");
    }else if(guiLoi == Em){
        guiLoichao.innerText = ("Xin chào Em gái!");
    }else{
        guiLoichao.innerText = ("Xin chào Người lạ ơi!");
    }

}
document.getElementById("btnGui").onclick = txtGui;

/**
 * Đếm số chẵn lẻ
 * Khối 1:
 * demSo1: Số thứ 1
 * demSo2: Số thứ 2
 * demSo3: Số thứ 3
 * Khối 2:
 * chia các giá trị demSo1,2,3 với 2, nếu chia hết là số chẵn, còn lại là số lẻ
 * thêm tổng số chan, số lẻ là 3 - chan
 * Khối 3:
 * đếm bằng txtDem
 */

function txtDem(){
    var so1 = parseInt(document.getElementById("demSo1").value);
    var so2 = parseInt(document.getElementById("demSo2").value);
    var so3 = parseInt(document.getElementById("demSo3").value);
    var demSochan = (document.getElementById("txtDem"));
    var chan = 0;
    var le = 0;
    if(so1%2 == 0){
        chan++;
    }
    if(so2%2 == 0){
        chan++;
    }
    if(so3%2 == 0){
        chan++;
    }
    var le = 3 - chan;  
    demSochan.innerText = "có " + chan + " số chẵn, " + le + " số lẻ" ;
    }
document.getElementById("btnTang1").onclick = txtDem;

/**
 * Xác định hình tam giác
 * Khối 1:
 * canh1: CHiều dài cạnh 1
 * canh2: chiều dài cạnh 2
 * canh3: chiều dài cạnh 3
 * Khối 2:
 * Nếu 3 cạnh đều nhau: đầu
 * nếu 2 cạnh bằng nhau: cân
 * nếu 1 cạnh bằng tổng bình phương 2 cạnh còn lại: vuông
 * 
 * Khối 3:
 * Xuất kết quả ra txtCanh
 * 
 */

function txtCanh(){
    var canh1 = parseInt(document.getElementById("canh1").value);
    var canh2 = parseInt(document.getElementById("canh2").value);
    var canh3 = parseInt(document.getElementById("canh3").value);
    var duDoan = document.getElementById("txtCanh");
    if(canh1 == canh2 && canh2 == canh3){
        duDoan.innerText = "Hình tam giác đều";
    }else if(canh1 == canh2 && canh2 != canh3){
        duDoan.innerText = "Hình tam giác cân";
    }else if(canh1 != canh2 && canh2 == canh3){
        duDoan.innerText = "Hình tam giác cân";
    }else if(canh1 == canh3 && canh2 != canh3){
        duDoan.innerText = "Hình tam giác cân";
    }else if(Math.pow(canh1,2) + Math.pow(canh2,2) == Math.pow(canh3,2)){
        duDoan.innerText = "Hình tam giác vuông";
    }else if(Math.pow(canh1,2) + Math.pow(canh3,2) == Math.pow(canh2,2)){
        duDoan.innerText = "Hình tam giác vuông";
    }else if(Math.pow(canh2,2) + Math.pow(canh3,2) == Math.pow(canh1,2)){
        duDoan.innerText = "Hình tam giác vuông";
    }else{
        duDoan.innerText = "Hình tam giác khác";
    }
}
document.getElementById("btnCanh").onclick = txtCanh;