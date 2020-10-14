function insert(num) {
    if (num === '.' && document.getElementById("output").value.includes('.')) return
    document.getElementById("output").value = document.getElementById("output").value + num;
    if (num === '+') {
        document.getElementById("input").value = operation() + "+";
        document.getElementById("output").value = "";
    }
    else if (num === '-'){
        document.getElementById("input").value = operation() + "-";
        document.getElementById("output").value = "";
    }
    else if (num === '*'){
        document.getElementById("input").value = operation() + "*";
        document.getElementById("output").value = "";
    }
    else if (num === '/'){
        document.getElementById("input").value = operation() + "/";
        document.getElementById("output").value = "";
    }
    else if (num === '!'){
        document.getElementById("input").value = operation() + "!";
        document.getElementById("output").value = "";
    }
    else if (num === "√"){
        document.getElementById("output").value = Math.sqrt(parseFloat(document.getElementById("output").value));
    }
    else if (num === '='){
        document.getElementById("output").value = operation();
        document.getElementById("input").value = "";
    }
}



function operation() {
    a = document.getElementById("input").value;
    b = document.getElementById("output").value;
    opr = a.substring(a.length-1, a.length);
    if (a === "") {
        a = 0;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (opr === "+" || opr === "") {
        return a+b;
    }
    else if (opr === "-") {
        return a-b;
    }
    else if (opr === "*") {
        return a*b;
    }
    else if (opr === "/") {
        return a/b;
    }
    else if (opr === "!") {
        c = 1;
        for (let i = 2; i <= a; i++) {
            c *= i;
        }
        return c;
    }
    else {
        return a;
    }
}

function clean() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

function back() {
    var exp = document.getElementById("output").value;
    document.getElementById("output").value = exp.substring(0, exp.length-1);
}