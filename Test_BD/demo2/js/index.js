var direc = "L";

function move() {

    var ipt = document.querySelector(".order");
    var iptValue = ipt.value;
    //position of car
    switch (iptValue) {
        case "TL":
            leftMove();
            break;
        case "TR":
            rightMove();
            break;
        case "GO":
            goStrait();
            break;
        case "TB":
            backMove();
            break;
        default:
            console.log("invalid order!");
            break;
    }

}

function leftMove() {
    var car = document.querySelector(".car");
    // var carLeft = car.offsetLeft;
    // var carTop = car.offsetTop;

    switch (direc) {
        case "T":
            car.className = car.className.split("toTop").join("") + " toLeft";
            direc = "L"
            break;
        case "L":
            car.className = car.className.split("toLeft").join("") + " toBottom";
            direc = "B"
            break;
        case "B":
            car.className = car.className.split("toBottom").join("") + " toRight";
            direc = "R"
            break;
        case "R":
            car.className = car.className.split("toRight").join("") + " toTop";
            direc = "T"
            break;
        default:
            console.log("Please input valid order!");
            break;
    }
}

function rightMove() {
    var car = document.querySelector(".car");
    // var carLeft = car.offsetLeft;
    // var carTop = car.offsetTop;

    switch (direc) {
        case "T":
            car.className = car.className.split("toTop").join("") + " toRight";
            direc = "R"
            break;
        case "L":
            car.className = car.className.split("toLeft").join("") + " toTop";
            direc = "T"
            break;
        case "B":
            car.className = car.className.split("toBottom").join("") + " toLeft";
            direc = "L"
            break;
        case "R":
            car.className = car.className.split("toRight").join("") + " toBottom";
            direc = "B"
            break;
        default:
            console.log("Please input valid order!");
            break;
    }
}

function backMove() {
    var car = document.querySelector(".car");
    // var carLeft = car.offsetLeft;
    // var carTop = car.offsetTop;

    switch (direc) {
        case "T":
            car.className = car.className.split("toTop").join("") + " toBottom";
            direc = "B"
            break;
        case "L":
            car.className = car.className.split("toLeft").join("") + " toRight";
            direc = "R"
            break;
        case "B":
            car.className = car.className.split("toBottom").join("") + " toTop";
            direc = "T"
            break;
        case "R":
            car.className = car.className.split("toRight").join("") + " toLeft";
            direc = "L"
            break;
        default:
            console.log("Please input valid order!");
            break;
    }
}

function goStrait() {
    var car = document.querySelector(".car"); //返回匹配的第一个元素
    var topPos = car.offsetTop;
    var leftPos = car.offsetLeft;

    switch (direc) {
        case "T":
            if (topPos - 50 > 0) {
                car.style.top = topPos - 50 + "px";

            } else {
                console.log("到底啦")
            }
            break;
        case "B":
            if (topPos + 50 < 550) { car.style.top = topPos + 50 + "px" } else {
                console.log("到底啦")
            }
            break;
        case "L":
            if (leftPos - 50 > 6) { car.tyle.left = leftPos - 50 + "px" } else {
                console.log("到底啦")
            }
            break;
        case "R":
            if (leftPos + 50 < 550) {
                car.style.left = leftPos + 50 + "px";
            } else {
                console.log("到底啦")
            }
            break;
        default:
            console.log("到底啦！");
            break;
    }
}