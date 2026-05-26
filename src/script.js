const title = document.querySelector("#title");             // 頁面標題
const pet = document.querySelector("#pet");                 // 寵物本體
const dialog = document.querySelector("#dialog");           // 對話文字
const text_box = document.querySelector("#input_name");     // 姓名輸入框
const button = document.querySelector("#submit_name");      // 姓名提交鈕

let pet_name = "";          // 寵物名稱

let click_times = 0;        // 點擊寵物的次數
let pet_times = 0;          // 撫摸寵物的次數
let click_timer = null;     // 點擊的歸零倒數
let pet_timer = null;       // 撫摸的歸零倒數

// 事件對應函式
function handle_name_button(){
    if(text_box.value){
        pet_name = text_box.value;
        title.textContent = "這是" + pet_name + " :D";
        text_box.classList.add("is-hidden");
        button.classList.add("is-hidden");
    }
}

function handle_click(){
    click_times++;

    if(click_times <= 3){ dialog.textContent = "嗨。" }
    else if(click_times <= 6){ dialog.textContent = "你要幹嘛？" }
    else{ dialog.textContent = "滾 ==" }

    if(click_timer){ clearTimeout(click_timer); }
    click_timer = setTimeout(reset_click_timer, 10000);
}

function handle_move(){
    pet_times++;

    if(pet_times <= 2){ dialog.textContent = "咪。" }
    else if(pet_times <= 8){ dialog.textContent = "咪咪咪。" }
    else{ dialog.textContent = "咪 ==" }

    if(pet_timer){ clearTimeout(pet_timer); }
    pet_timer = setTimeout(reset_pet_timer, 10000);
}

function reset_click_timer(){ click_times = 0; }

function reset_pet_timer(){ pet_times = 0; }

// 連結事件與函式
button.addEventListener("click", handle_name_button);
pet.addEventListener("click", handle_click);
pet.addEventListener("mouseenter", function (){});
pet.addEventListener("mouseleave", handle_move);