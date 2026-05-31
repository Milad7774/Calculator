
const display = document.getElementById('result');
const buttons = document.querySelectorAll('input');
const button_0 = document.getElementById('zero');
var i = 1;
function check(){
    if(display.textContent === "0"){
        button_0.setAttribute('disabled', '');
    }
    else{
        button_0.removeAttribute('disabled', '');
    }
}
setInterval(check, 10);
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if(this.value === "="){

            }
            else{
            if(i == 1){
                display.textContent = "";
                i = 2;
            }
            let lastChar = display.textContent[display.textContent.length - 1];
            if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "="){
                if(this.value === "+" || this.value === "-" || this.value === "*" || this.value === "/" || this.value === "="){
                    display.textContent = display.textContent.slice(0, -1) + this.value;
                    console.log(this.value);
                }
                else{
                    display.textContent += this.value;
                }
            }
            else{
                display.textContent += this.value;
            }
        }});
    });
    function clean(){
        display.textContent = "0";
        i = 1;
    }
    function del(){
        let array = [];
        let number = display.textContent;
        for(let i = 0; i <= number.length - 1; i++){
            array.push(number[i]);
        }
        array.pop();
        display.textContent = "";
        for(let i = 0; i <= array.length - 1; i++){
            display.textContent += array[i];
        }
        if(display.textContent == ""){
            display.textContent = "0";
            i = 1;
        }
    }
    function calculate(){
        var operation = display.textContent;
        var number = "";
        var array = [];
        var operator = [];
        var result = "";
        var array_sum = [];
        for(let i = 0; i < operation.length; i++){
            console.log("dealing with: " + operation[i]);
            if(operation[i] === "+" || operation[i] === "-" || operation[i] === "*" || operation[i] === "=" || operation[i] === "/"){
                console.log("its an op numbers before added!");
                operator.push(operation[i]);
                array.push(number);
                number = "";
            }
            else{
                number += operation[i];
            }
            if(i == operation.length - 1){
                if(number != ""){
                array.push(number);
                }
            }
        }
        console.log(array);
        console.log(operator);
        var index_Mul = 0;
        var index_div = 0;
        var final_result = 0;
        for( let i = 0; i < operator.length; i++){
            if(operator[i] == "-"){
                console.log("i is: " + i);
                console.log("replacing: " + array[i + 1] + ' with ' + " - " + array[i + 1])
                array[i + 1] = '-' + array[i + 1];
            }}
            for( let i = 0; i < operator.length; i++){
            if(operator[i] == "*" || operator[i] == "/"){
                console.log("found an op!!");
                if(operator[i] == "*"){
                    console.log("index is : " + index_Mul);
                    console.log("its a * !!");
                    console.log("multiplying " + array[i - index_Mul] + "*" + array[i + 1 - index_Mul]);
                    result = array[i - index_Mul] * array[i + 1 - index_Mul];
                    console.log("result to be added to sum is: " + result);
                    array.splice(i + 1 - index_Mul, 1);
                    // if(operator[i - 1] == "-"){
                    //     console.log("found a -!!");
                    //     result = result * (-1);
                    //     console.log("result is " + result);
                    // }
                    if(operator[i + 1] == "+" || operator[i + 1] == "-" || operator[i + 1] == "/" || i == operator.length - 1){
                        array_sum.push(result);
                        console.log("sum for multiply is : " + array_sum);
                    }
                    array[i - index_Mul] = result;
                    console.log(array);
                    index_Mul++;
                    index_div++;
                }
                else{
                    console.log("index is : " + index_div);
                    console.log("its a / !!");
                    console.log("dividing " + array[i - index_div] + "/" + array[i + 1 - index_div]);
                    result = array[i - index_div] / array[i + 1 - index_div];
                    console.log("result to be added to sum is: " + result);
                    array.splice(i + 1 - index_div, 1);
                    // if(operator[i - 1] == "-"){
                    //     console.log("found a -!!");
                    //     result = result * (-1);
                    //     console.log("result is " + result);
                    // }
                    if(operator[i + 1] == "+" || operator[i + 1] == "-" || operator[i + 1] == "*" || i == operator.length - 1){
                        array_sum.push(result);
                        console.log("sum for divide is : " + array_sum);
                    }
                    array[i - index_div] = result;
                    console.log(array);
                    index_div++;
                    index_Mul++;
                }
            }
            console.log(array);
        }
        
        for(let i = 0; i < array.length; i++){
            final_result += Number(array[i]);
        }
        if(final_result == 0){
            i = 1;
        }
        display.textContent = final_result;
        console.log('array sum is: ' + array_sum);
        console.log('array is: ' + array);
        console.log('op is : ' + operator);
        console.log('final result is: ' + display.textContent);
    }
    console.log('2.5' * '5');