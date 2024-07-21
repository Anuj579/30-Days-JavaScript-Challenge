let score = 8;

switch (true) {
    case (score <= 100 && score >= 85):
        console.log("A");
        break;
    case (score <= 84 && score >= 70):
        console.log("B");
        break;
    case (score <= 69 && score >= 55):
        console.log("C");
        break;
    case (score <= 54 && score >= 40):
        console.log("D");
        break;
    default:
        console.log("F");
}
