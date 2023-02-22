function Armstrong() {
    var p,n,q,sum = 0;
    n = document.getElementById("Armstrong").value;
    q = n;
    for (i = 0; n > 0; i++) {
        p = n % 10;
        n = parseInt(n / 10);
        sum = sum + (p * p * p);
    }
    if (sum == q) {
        document.getElementById('display').innerHTML = "It is a Armstrong Number";
    }
    else {
        document.getElementById('display').innerHTML = "It is not a Armstrong Number";
    }
}