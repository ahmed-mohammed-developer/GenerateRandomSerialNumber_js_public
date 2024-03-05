let btn = document.querySelector(".generate");
let ser = document.querySelector(".serial");

btn.onclick = function () {
     let charcters = "123456789asdfghjklmnbvcxzqwertyuiopASDFGHJKLQWERTYUIOPZXCVBNM";
     let chCount = 15;
     let randomSerial = "";
     for (let i = 0; i < chCount; i++){
          randomSerial += charcters[Math.floor(Math.random() * charcters.length)];
     }
     ser.innerHTML = randomSerial;
} 