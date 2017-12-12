var direc = "T";

function move() {

    var ipt = document.querySelector(".order");
    var iptValue = ipt.value;
    //position of car
    switch (iptValue) {
        case "GL":
            leftGo();
            break;
        case "GR":
            rightGo();
            break;
        case "GT":
            topGo();
            break;
        case "GB":
            backGo();
            break;
        case "ML":
            turnLeftGo();
            break;
        case "MR":
            turnRightGo();
            break;
        case "MT":
            turnTopGo();
            break;
        case "MB":
            turnBottomGo();
            break;
        default:
            console.log("invalid order!");
            break;
    }
}

function leftGo() {
    var car = document.querySelector(".car");
    if (car.offsetLeft - 50 > 6) {
        car.style.left = car.offsetLeft - 50 + "px";
        // car.style.transform = "translateX(-50px)";
    } else {
        console.log("到底啦！");
    }
}

function rightGo() {
    var car = document.querySelector(".car");
    if (car.offsetLeft + 50 < 556) {
        // car.style.transform = "translateX(50px)";
        car.style.left = car.offsetLeft + 50 + "px";

    } else {
        console.log("到底啦！");
    }
}

function topGo() {
    var car = document.querySelector(".car");
    if (car.offsetTop - 50 > 0) {
        car.style.top = car.offsetTop - 50 + "px";
    } else {
        console.log("到底啦！");
    }
}

function backGo() {
    var car = document.querySelector(".car");
    if (car.offsetTop + 50 <= 500) {
        car.style.top = car.offsetTop + 50 + "px";
    } else {
        console.log("到底啦！");
    }
}

function turnLeftGo() {
    console.log(direc);
    var car = document.querySelector('.car');
    car.style.animationName = "tl";
    leftGo();
}

function turnRightGo() {
    console.log(direc);
    var car = document.querySelector('.car');
    car.style.animationName = "tr";
    rightGo();
}

function turnTopGo() {
    var car = document.querySelector('.car');
    console.log(direc);
    car.style.animationName = "tb";
    topGo();
}

function turnBottomGo() {
    console.log(direc);
    var car = document.querySelector('.car');
    car.style.animationName = "tt";
    backGo();
}