//print odds 1-20
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}


//decreasing multiples of 3
for (var i = 100; i > 0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }


    //print the sequence
    for (var i = 4; i > -4; i -= 1.5) {
        console.log(i)
    }


    //Sigma
    function Sum1(num1 = 1, num2 = 100) {
        var sum = num1;
        var error = (num1 + " + ");
        for (var i = num1 + 1; i < num2; i++) {
            sum += i;
            error += (i + " + ");
        }
        sum += i;
        error += i;
        console.log(error + " = " + sum);
    }
    Sum1()


    //Factorial
    function product(num1 = 1, num2 = 12) {
        var correct = num1;
        var error = (num1 + " * ");
        for (var i = num1 + 1; i < num2; i++) {
            correct *= i;
            error += (i + " * ");
        }
        correct *= i;
        error += (i + " = ");
        console.log(error, correct);
    }
    product()
}
