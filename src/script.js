const pet = document.querySelector("#pet");         // 找到 ID 為 pet 的物件並指派為變數
const dialog = document.querySelector("#dialog");   // 找到 ID 為 dialog 的物件並指派為變數

// 偵測點擊事件
pet.addEventListener("click", function(){ dialog.textContent = "你點了他一下。"; });