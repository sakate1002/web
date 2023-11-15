const kakugen_items = [
    "人生の問題を解決するには、<br>まず針箱を整頓せよ（カーライル）",
    "常識とは、18歳までに身に付けた偏見の<br>コレクションである（アインシュタイン）",
    "人はその制服どおりの人間になる<br>（ナポレオン）",
    "神は水だけを造った。<br>しかし人はワインを作った（ユーゴー）",
    "善にも強ければ、悪にも強いというのが、<br>いちばん強力な性格である（ニーチェ）"
]

const test = kakugen_items.length
const num = Math.floor(Math.random() * test);
const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");

btn.addEventListener("click", function() {
    const num = Math.floor(Math.random() * test );
    disp.innerHTML = kakugen_items[num];
  });