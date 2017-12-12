var allGood = true;

function init(num) {
    var iptObj = document.getElementsByClassName("ipt" + num)[0];
    var liTag = document.getElementsByTagName('li')[num - 1];
    var spanNode = liTag.lastElementChild;
    iptObj.className = iptObj.className.split("error").join("").split("good").join("");
    spanNode.className = spanNode.className.split("warn").join("").split("wish").join("");

    var iptId = iptObj.id;
    switch (iptId) {
        case "name":
            spanNode.innerHTML = "请输入姓名";
            break;
        case "psd":
            spanNode.innerHTML = "请输入密码";
            break;
        case "psd1":
            spanNode.innerHTML = "请再次输入密码";
            break;
        case "email":
            spanNode.innerHTML = "请输入合法邮箱";
            break;
        case "phone":
            spanNode.innerHTML = "请输入电话号码";
            break;
        default:
            alert("invalid id name");
            break;
    }

}

function verify(num) {
    var iptObj = document.getElementsByClassName("ipt" + num)[0];
    var liTag = document.getElementsByTagName("li")[num - 1];
    var spanNode = liTag.lastElementChild;

    var iptId = iptObj.id;
    switch (iptId) {
        case "name":
            verifyName(iptObj, spanNode);
            break;
        case "psd":
            verifyPsd(iptObj, spanNode);
            break;
        case "psd1":
            verifyPsd1(iptObj, spanNode);
            break;
        case "email":
            verifyEmail(iptObj, spanNode);
            break;
        case "phone":
            verifyPhone(iptObj, spanNode);
            break;
        default:
            alert("no verify element");
            break;
    }
}

function verifyName(iptObj, spanNode) {
    var iptValue = iptObj.value;
    if (iptValue === "") {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "输入不能为空！";
        allGood = false;
        return -1;
    }
    // var arr = iptValue.split("");
    var reg = new RegExp("^[0-9a-zA-Z\_]+$");
    if (iptValue.length < 4) {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "名称太短！";
        allGood = false;
        return -1;
    }
    if (iptValue.length > 16) {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "名称太长！";
        allGood = false;
        return -1;
    }
    if (!reg.test(iptValue)) {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "名称必须为数字字母或下划线！";
        allGood = false;
        return -1;
    }
    iptObj.className += " good";
    spanNode.className += " wish";
    spanNode.innerHTML = "合法名称！";
}

function verifyPsd(iptObj, spanNode) {
    var iptValue = iptObj.value;
    if (iptValue === "") {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "输入不能为空！";
        allGood = false;
        return -1;
    }
    if (iptValue.length === 6) {
        iptObj.className += " good";
        spanNode.className += " wish";
        spanNode.innerHTML = "密码合法！";
    } else {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "请输入合法密码！";
        allGood = false;
    }
}

function verifyPsd1(iptObj, spanNode) {
    var iptValue = iptObj.value;
    var psdValue = document.getElementById("psd").value;
    if (iptValue === "") {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "输入不能为空！";
        allGood = false;
        return -1;
    }
    if (iptValue === psdValue) {
        iptObj.className += " good";
        spanNode.className += " wish";
        spanNode.innerHTML = "正确！";
    } else {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "密码不一致！";
        allGood = false;
    }
}

function verifyEmail(iptObj, spanNode) {
    var myReg = /^[-_0-9a-zA-Z]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    var iptValue = iptObj.value;
    if (iptValue === "") {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "输入不能为空！";
        allGood = false;
        return -1;
    }
    if (myReg.test(iptValue)) {
        iptObj.className += " good";
        spanNode.className += " wish";
        spanNode.innerHTML = "合法邮箱！";
    } else {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "不合法邮箱！";
        allGood = false;
        return -1;
    }
}

function verifyPhone(iptObj, spanNode) {
    var iptValue = iptObj.value;
    var myReg = /^[1][0-9]{9}$/;
    if (iptValue === "") {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "输入不能为空！";
        allGood = false;
        return -1;
    }
    if (myReg.test(iptValue)) {
        iptObj.className += " good";
        spanNode.className += " wish";
        spanNode.innerHTML = "合法电话！";
    } else {
        iptObj.className += " error";
        spanNode.className += " warn";
        spanNode.innerHTML = "不合法电话！";
        allGood = false;
    }
}

function go() {
    if (allGood) {
        alert("the registed information is submited！");
    } else {
        alert("invalid registed information!");
    }
}