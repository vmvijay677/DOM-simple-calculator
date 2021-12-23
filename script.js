var head = document.createElement('h1');
head.innerHTML = "Simple Calculator";
head.setAttribute('class', 'h1');
head.setAttribute('id', 'title');
document.body.append(head);

var para = document.createElement('p');
para.setAttribute('id', 'description');
para.innerHTML = "All the elements are created only using DOM";
document.body.append(para);

var cont = document.createElement('div');
cont.setAttribute('class', 'container');

var row = document.createElement('div');
row.setAttribute('class', 'row');

var column1 = document.createElement('div');
column1.setAttribute('class', 'col-sm-12');

var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('name', 'input1');
input.setAttribute('id', 'input1');
column1.append(input);

var column2 = document.createElement('div');
column2.setAttribute('class', 'col-lg-3');

var modulus = button('input', 'button', 'btn', 'mod', '%', 'lightgreen', '%');
modulus.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + '%'});
column2.append(modulus);

var column3 = document.createElement('div');
column3.setAttribute('class', 'col-lg-3');

var clearall = button('input', 'button', 'btn', 'btn', 'CE', 'lightgreen', 'CE');
clearall.addEventListener('click', () => {document.getElementById("input1").value = 0;});
column3.append(clearall);

var column4 = document.createElement('div');
column4.setAttribute('class', 'col-lg-3');

var clear = button('input', 'button', 'btn', 'btn', 'C', 'lightgreen', 'C');
clear.addEventListener('click', clr);
column4.append(clear);

var column5 = document.createElement('div');
column5.setAttribute('class', 'col-lg-3');

var divide = button('input', 'button', 'btn', 'div', '/', 'lightgreen', '/');
divide.addEventListener('click', () => {document.getElementById("input1").value=document.getElementById("input1").value + '/';});
column5.append(divide);

var column6 = document.createElement('div');
column6.setAttribute('class', 'col-lg-3');

var seven = button('input', 'button', 'btn', 'btn', '7', 'rgb(243, 243, 117)', 7);
seven.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 7});
column6.append(seven);

var column7 = document.createElement('div');
column7.setAttribute('class', 'col-lg-3');

var eight = button('input', 'button', 'btn', 'btn', '8', 'rgb(243, 243, 117)', 8);
eight.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 8});
column7.append(eight);

var column8 = document.createElement('div');
column8.setAttribute('class', 'col-lg-3');

var nine = button('input', 'button', 'btn', 'btn', '9', 'rgb(243, 243, 117)', 9);
nine.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 9});
column8.append(nine);

var column9 = document.createElement('div');
column9.setAttribute('class', 'col-lg-3');

var multi = button('input', 'button', 'btn', 'mul', '*', 'lightgreen', '*');
multi.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + '*';});
column9.append(multi);

var column10 = document.createElement('div');
column10.setAttribute('class', 'col-lg-3');

var four = button('input', 'button', 'btn', 'btn', '4', 'rgb(243, 243, 117)', 4);
four.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 4});
column10.append(four);

var column11 = document.createElement('div');
column11.setAttribute('class', 'col-lg-3');

var five = button('input', 'button', 'btn', 'btn', '5', 'rgb(243, 243, 117)', 5);
five.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 5});
column11.append(five);

var column12 = document.createElement('div');
column12.setAttribute('class', 'col-lg-3');

var six = button('input', 'button', 'btn', 'btn', '6', 'rgb(243, 243, 117)', 6);
six.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 6});
column12.append(six);

var column13 = document.createElement('div');
column13.setAttribute('class', 'col-lg-3');

var sub = button('input', 'button', 'btn', 'sub', '-', 'lightgreen', '-');
sub.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + '-';});
column13.append(sub);

var column14 = document.createElement('div');
column14.setAttribute('class', 'col-lg-3');

var one = button('input', 'button', 'btn', 'btn', '1', 'rgb(243, 243, 117)', 1);
one.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 1});
column14.append(one);

var column15 = document.createElement('div');
column15.setAttribute('class', 'col-lg-3');

var two = button('input', 'button', 'btn', 'btn', '2', 'rgb(243, 243, 117)', 2);
two.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 2});
column15.append(two);

var column16 = document.createElement('div');
column16.setAttribute('class', 'col-lg-3');

var three = button('input', 'button', 'btn', 'btn', '3', 'rgb(243, 243, 117)', 3);
three.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 3});
column16.append(three);

var column17 = document.createElement('div');
column17.setAttribute('class', 'col-lg-3');

var add = button('input', 'button', 'btn', 'add', '+', 'lightgreen', '+');
add.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + '+';});
column17.append(add);

var column18 = document.createElement('div');
column18.setAttribute('class', 'col-lg-3');

var dzero = button('input', 'button', 'btn', 'btn', '00', 'rgb(243, 243, 117)', 00);
dzero.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 0 + 0});
column18.append(dzero);

var column19 = document.createElement('div');
column19.setAttribute('class', 'col-lg-3');

var zero = button('input', 'button', 'btn', 'btn', '0', 'rgb(243, 243, 117)', 0);
zero.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + 0});
column19.append(zero);

var column20 = document.createElement('div');
column20.setAttribute('class', 'col-lg-3');

var decimal = button('input', 'button', 'btn', 'deci', '.', 'lightcoral', '.');
decimal.addEventListener('click', () => {document.getElementById("input1").value = document.getElementById("input1").value + '.';});
column20.append(decimal);

var column21 = document.createElement('div');
column21.setAttribute('class', 'col-lg-3');

var equal = button('input', 'button', 'btn', 'equ', '=', 'lightblue', '=');
equal.addEventListener('click', result);
column21.append(equal);


row.append(column1,column2,column3,column4,column5,column6,column7,column8,column9,column10,column11,column12,column13,column14,column15,column16,column17,column18,column19,column20,column21);
cont.append(row);
document.body.append(cont);

//-----------------------------------------------------

function button(elename, t, c, i, v, bg, text){
    var button = document.createElement(elename);
    button.setAttribute('type', t);
    button.setAttribute('class', c);
    button.setAttribute('id', i);
    button.setAttribute('value', v);
    button.style.backgroundColor = bg;
    button.innerHTML = text;
    return button;
}

function clr(){
    document.getElementById("input1").value = "";
}

function result(){
    var res = eval(document.getElementById("input1").value);
    if(res){
        document.getElementById("input1").value = res;
    }
    return res;
}

var enter = document.getElementById("input1");
enter.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("equ").click();
    }
});
