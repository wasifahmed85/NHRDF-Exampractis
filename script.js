setInterval(() => {
    const date = new Date();
    document.getElementById("updateTime").innerHTML = date.toLocaleString();
}, 1000);
