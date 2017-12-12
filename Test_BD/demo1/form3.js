window.onload = init;

function init() {
    var radioList = document.getElementsByClassName("school");
    var schoolList = document.getElementsByClassName("school-list")[0];
    var departName = document.getElementsByClassName("depart-name")[0];


    radioList[0].onclick = function() {
        console.log("a")
        schoolList.style.display = "block";
        departName.style.display = "none";
        var locationList = document.getElementsByClassName("location")[0];
        locationList.onchange = function() {
            console.log(locationList.value);
            switch (locationList.value) {
                case "wuhan":
                    wuhan();
                    break;
                case "xiamen":
                    xiamen();
                    break;
                case "nanjin":
                    wuhan();
                    break;
                case "beijing":
                    xiamen();
                    break;
                default:
                    document.getElementsByClassName("school-name")[0].options.length = 0;
                    console.log("invalid selection");
                    break;
            }


        }

        function wuhan() {
            var nameList = document.getElementsByClassName("school-name")[0];
            console.log(nameList);
            nameList.options.length = 0;
            var nameArr = ["华中科技大学", "武汉大学", "武汉理工"];
            var valuelist = ["huake", "wuhan", "wuhanligong"]
                // var optlist = new Array(3);
            for (var i = 0; i < nameArr.length; i++) {
                var opt = document.createElement("option");
                opt.value = valuelist[i];
                opt.innerHTML = nameArr[i];
                nameList.appendChild(opt);
            }
        }

        function xiamen() {
            var nameList = document.getElementsByClassName("school-name")[0];
            nameList.options.length = 0;
            var nameArr = ["华中科技大学", "武汉大学", "武汉理工"];
            var valuelist = ["huake", "wuhan", "wuhanligong"]
                // var optlist = new Array(3);
            for (var i = 0; i < nameArr.length; i++) {
                var opt = document.createElement("option");
                opt.value = valuelist[i];
                opt.innerHTML = nameArr[i];
                nameList.appendChild(opt);
            }
        }

    };

    radioList[1].onclick = function() {
        console.log("b")
        departName.style.display = "block";
        schoolList.style.display = "none";
    };

}