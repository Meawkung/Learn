let jobs = document.getElementsByName("job");
var option = document.createElement("option");
option.value = "Other";
option.innerText = "อื่นๆ";
jobs[0].appendChild(option);

const sticks = document.querySelectorAll("#stick1,#stick2,#stick3")
sticks.forEach(stick => {
    stick.style.verticalAlign = "top";
    // stick.style.backgroundColor = "#ffffcc";
});