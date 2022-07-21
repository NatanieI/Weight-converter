var input = document.getElementById('input');
var result = document.getElementById('result');
var unitInput = document.getElementById('unitInput');
var unitResult = document.getElementById('unitResult');
var unitInputValue, unitResultValue;

input.addEventListener("keyup", myResult);
unitInput.addEventListener("change", myResult);
unitResult.addEventListener("change", myResult);

unitInputValue = unitInput.value;
unitResultValue = unitResult.value;

function myResult() {
    unitInputValue = unitInput.value;
    unitResultValue = unitResult.value;

    if(unitInputValue === "milligram" && unitResultValue === "milligram") {
        result.value = input.value;
    } else if(unitInputValue === "milligram" && unitResultValue === "decagram") {
        result.value = Number(input.value) * 0.0001;
    } else if(unitInputValue === "milligram" && unitResultValue === "gram") {
        result.value = Number(input.value) * 0.001;
    } else if(unitInputValue === "milligram" && unitResultValue === "kilogram") {
        result.value = Number(input.value) * 0.000001;
    }

    if(unitInputValue === "decagram" && unitResultValue === "milligram") {
        result.value = Number(input.value) * 10000;
    } else if(unitInputValue === "decagram" && unitResultValue === "decagram") {
        result.value = input.value;
    } else if(unitInputValue === "decagram" && unitResultValue === "gram") {
        result.value = Number(input.value) * 10;
    } else if(unitInputValue === "decagram" && unitResultValue === "kilogram") {
        result.value = Number(input.value) * 0.01;
    }

    if(unitInputValue === "gram" && unitResultValue === "milligram") {
        result.value = Number(input.value) * 1000;
    } else if(unitInputValue === "gram" && unitResultValue === "decagram") {
        result.value = Number(input.value) * 0.1;
    } else if(unitInputValue === "gram" && unitResultValue === "gram") {
        result.value = input.value;
    } else if(unitInputValue === "gram" && unitResultValue === "kilogram") {
        result.value = Number(input.value) * 0.001;
    }

    if(unitInputValue === "kilogram" && unitResultValue === "milligram") {
        result.value = Number(input.value) * 1000000;
    } else if(unitInputValue === "kilogram" && unitResultValue === "decagram") {
        result.value = Number(input.value) * 100;
    } else if(unitInputValue === "kilogram" && unitResultValue === "gram") {
        result.value = Number(input.value) * 1000;
    } else if(unitInputValue === "kilogram" && unitResultValue === "kilogram") {
        result.value = input.value;
    }
}