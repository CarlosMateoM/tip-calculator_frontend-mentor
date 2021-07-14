

let bill;
let tip;
let numberPeople;

const billField = document.getElementById('bill');
const tipField = document.getElementById('input-percent');
const numberPeopleField =  document.getElementById('people-input');

const errBill =  document.getElementById('bill-err');
const errPeople =  document.getElementById('people-err');


const output1 = document.getElementById('output1');
const output2 = document.getElementById('output2');

const percent5 = document.getElementById('percent5');
const percent10 = document.getElementById('percent10');
const percent15 = document.getElementById('percent15');;
const percent25 = document.getElementById('percent25');
const percent50 = document.getElementById('percent50');

const reset = document.getElementById('reset-button');

const percentajes = [percent5,percent10, percent15, percent25, percent50]

function events(){

    billField.addEventListener('input', validBillField);

    tipField.addEventListener('input', (e) => {
        tip = e.target.value;
        for(let i = 0; i < 5; i++){
            percentajes[i].style.cssText = ' color:hsl(189, 41%, 97%);background-color:hsl(183, 100,15%);'
        }
        emptyFields();

    });

    selectPercentaje();

    numberPeopleField.addEventListener('input', validPeopleField);

    reset.addEventListener('click', resetBotton)
}

function validBillField(e){

    if(e.target.value > 0){

        errBill.innerHTML = "";
        bill = e.target.value;
        billField.style.outlineColor = "hsl(172, 67%, 45%)";
        
        emptyFields();
    }else{

        bill = "";
        errBill.style.color = "red";
        billField.style.outlineColor = "red";
        
        if(isNaN(e.target.value)){
            errBill.innerHTML = 'should be a number';
        }else{
            errBill.innerHTML = "Can't be 0";
        }
    }
}

function selectPercentaje (){

    for(let i = 0; i < 5; i++){

        percentajes[i].addEventListener('click', (e) =>{
            tip = e.target.value;

            for(let j = 0; j < 5; j++ ){

                if(percentajes[j].value == e.target.value ){
                percentajes[j].style.cssText = ' color:hsl(183, 100%, 15%); background-color: hsl(172, 67%, 45%);'}else{
                percentajes[j].style.cssText = '    color:hsl(189, 41%, 97%);background-color:hsl(183, 100,15%);'
                }
            }
            emptyFields();
        });
    }
}

function validPeopleField(e){
    if(e.target.value > 0){

        errPeople.innerHTML = ""
        numberPeople = e.target.value;
        numberPeopleField.style.outlineColor = "hsl(172, 67%, 45%)"
        
        emptyFields();
    }else{

        numberPeople = "";
        errPeople.style.color = "red";
        numberPeopleField.style.outlineColor = "red";
        
        if(isNaN(e.target.value)){
            errPeople.innerHTML = 'should be a number';
        }else{
            errPeople.innerHTML = "Can't be 0"
        }
    }
}

function emptyFields(){
    if(!isNaN(bill) && !isNaN(tip) && !isNaN(numberPeople) ){
        output();
    }
}

function output(){
    let tipAmount = ((bill*(tip/100))/numberPeople);
    let total = (bill*(tip/100));

    if(!isNaN(tipAmount) && tipAmount != Infinity){
    output1.innerHTML = tipAmount.toFixed(1);
 }
    if(total != undefined || total != NaN || total != Infinity){
    output2.innerHTML = total.toFixed(1);
    }
}

function resetBotton() {
    bill = "";
    tip = "";
    numberPeople = "";

    tipField.value = "";
    billField.value = "";
    numberPeopleField.value = "";

    errBill.innerHTML = "";
    errPeople.innerHTML = "";

    output1.innerHTML = 0;
    output2.innerHTML = 0;

    for(let j = 0; j < 5; j++ ){
        percentajes[j].style.cssText = 'color:hsl(189, 41%, 97%);background-color:hsl(183, 100,15%);'        
    }
}

document.addEventListener('load', events());