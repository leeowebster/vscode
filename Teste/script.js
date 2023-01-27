const n = '101'

function CountOne (num){
    var counter = 0;
    for(no in num){
        console.log(`esse é o NO = ${no} e esse é o NUM ${num}`)
        console.log(this)
        if(no == 1){
            counter += 1
        }
    }
    console.log(`O número ${num} possui ${counter} numeros um`)
}

CountOne(n)