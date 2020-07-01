
function _1ekle1_1(){
    table1.value = Number(table1.value) + 3;
    _1btn3_1.value = Number(_1btn3_1.value) + 1;
}
function _1cikar1_1(){
    table1.value = Number(table1.value) - 3;
    _1btn3_1.value = Number(_1btn3_1.value) - 1;
}

function _1ekle1_2(){
    table1.value = Number(table1.value) + 2;
    _1btn3_2.value = Number(_1btn3_2.value) + 1;
}
function _1cikar1_2(){
    table1.value = Number(table1.value) - 2;
    _1btn3_2.value = Number(_1btn3_2.value) - 1;
}

function _1ekle1_3(){
    table1.value = Number(table1.value) + 4;
    _1btn3_3.value = Number(_1btn3_3.value) + 1;
}
function _1cikar1_3(){
    table1.value = Number(table1.value) - 4;
    _1btn3_3.value = Number(_1btn3_3.value) - 1;
}

function _1ekle1_4(){
    table1.value = Number(table1.value) + 1;
    _1btn3_4.value = Number(_1btn3_4.value) + 1;
}
function _1cikar1_4(){
    table1.value = Number(table1.value) - 1;
    _1btn3_4.value = Number(_1btn3_4.value) - 1;
}

function _1ekle1_5(){
    table1.value = Number(table1.value) + 2.5;
    _1btn3_5.value = Number(_1btn3_5.value) + 1;
}
function _1cikar1_5(){
    table1.value = Number(table1.value) - 2.5;
    _1btn3_5.value = Number(_1btn3_5.value) - 1;
}

function _1ekle1_6(){
    table1.value = Number(table1.value) + 8;
    _1btn3_6.value = Number(_1btn3_6.value) + 1;
}
function _1cikar1_6(){
    table1.value = Number(table1.value) - 8;
    _1btn3_6.value = Number(_1btn3_6.value) - 1;
}

function _1ekle1_7(){
    table1.value = Number(table1.value) + 3;
    _1btn3_7.value = Number(_1btn3_7.value) + 1;
}
function _1cikar1_7(){
    table1.value = Number(table1.value) - 3;
    _1btn3_7.value = Number(_1btn3_7.value) - 1;
}

function _1ekle1_8(){
    table1.value = Number(table1.value) + 4;
    _1btn3_8.value = Number(_1btn3_8.value) + 1;
}
function _1cikar1_8(){
    table1.value = Number(table1.value) - 4;
    _1btn3_8.value = Number(_1btn3_8.value) - 1;
}

function _1ekle1_9(){
    table1.value = Number(table1.value) + 6;
    _1btn3_9.value = Number(_1btn3_9.value) + 1;
}
function _1cikar1_9(){
    table1.value = Number(table1.value) - 6;
    _1btn3_9.value = Number(_1btn3_9.value) - 1;
}

function reset1(){
    pencere = window.confirm("Hesabı Sıfırlamak İstediğinize Emin Misiniz?")
    if(pencere == true){
        table1.value = "0";
        _1btn3_1.value = 0;
        _1btn3_2.value = 0;
        _1btn3_3.value = 0;
        _1btn3_4.value = 0;
        _1btn3_5.value = 0;
        _1btn3_6.value = 0;
        _1btn3_7.value = 0;
        _1btn3_8.value = 0;
        _1btn3_9.value = 0;

    }
}