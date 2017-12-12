function initial(num) {
    var iptObj = document.getElementById("name" + num);
    var iptValue = iptObj.value;
    var fatherLi;
    var spanNode;
    fatherLi = iptObj.parentNode;
    fatherLi = fatherLi.parentNode;
    console.log(fatherLi);
    spanNode = fatherLi.lastElementChild;
    console.log(spanNode.innerHTML);
    //initial className;
    spanNode.innerHTML = "请输入名称";
    spanNode.className = spanNode.className.split("warn").join("").split("info").join("");

    iptObj.className = iptObj.className.split("error").join("").split("valid").join("");
    console.log("finish initialation!");
    return 1;
}



function verifyIpt(num) {
    var iptObj = document.getElementById("name" + num);
    var iptValue = iptObj.value;
    var fatherLi;
    var spanNode;
    fatherLi = iptObj.parentNode;
    fatherLi = fatherLi.parentNode;
    spanNode = fatherLi.lastElementChild;

    //initial className;
    // spanNode.className = spanNode.className.split("warn").join("");
    // iptObj.className = iptObj.className.split("error").join("");
    //verify the input text
    //isNull?
    if (iptValue === "") {
        spanNode.innerHTML = "名称输入为空!";
        spanNode.className += " warn";
        iptObj.className += " error";
        console.log("Null Input!");
        return 1;
    }
    //legal input?
    var text = iptValue.split("");
    var len = 0;
    var cn = /[\u4e00-\u9fa5]/;
    var qj = /[\uff00-\uffef]/;
    text.forEach(function(element) {
        if (cn.test(element) || qj.test(element)) {
            len += 2;
        } else {
            len += 1;
        }
    });
    if (len >= 4 && len <= 16) {
        iptObj.className += " valid";
        spanNode.innerHTML = "名称格式正确";
        spanNode.className += "info";
        return 1;
    }
    if (len < 4) {
        iptObj.className += " error";
        spanNode.innerHTML = "名称太短！";
        spanNode.className += "warn";
        return 1;
    }
    if (len > 16) {
        iptObj.className += " error";
        spanNode.innerHTML = "名称太长！";
        spanNode.className += "warn";
        return 1;
    }
}