let userPercentage = prompt("enter your percentage: ");
userPercentage = Number(userPercentage);

if (userPercentage > 100) {
    alert("invalid percentage");
    console.log("invalid percentage");

} else if (userPercentage >= 90) {
    alert("your grade is: A++");
    console.log("your grade is: A++");

} else if (userPercentage >= 80) {
    alert("your grade is: A1");
    console.log("your grade is: A1");

} else if (userPercentage >= 70) {
    alert("your grade is: A");
    console.log("your grade is: A");

} else if (userPercentage >= 60) {
    alert("your grade is: B");
    console.log("your grade is: B");

} else if (userPercentage >= 50) {
    alert("your grade is: C");
    console.log("your grade is: C");

} else if (userPercentage >= 40) {
    alert("your grade is: D");
    console.log("your grade is: D");

} else if (userPercentage >= 0) {
    alert("your Failed");
    console.log("your Failed");

} else {
    alert("invalid percentage");
    console.log("invalid percentage");
}
