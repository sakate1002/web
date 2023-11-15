document.getElementById("first").innerHTML="書き換えました";

const btn = document.getElementById("btn")
btn.addEventListener("mouseover", function(){
  alert("送信してよろしいですか？");
})