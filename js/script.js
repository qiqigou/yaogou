const gifs = [
  "img/g1.gif", "img/g2.gif", "img/g3.gif", "img/g4.gif", "img/g5.gif",
  "img/g6.gif", "img/g7.gif", "img/g8.gif", "img/g9.gif", "img/g10.gif", "img/g11.gif"
];
const happyGif = "img/gs.gif";
const angryGif = "img/gb.gif";

const subs = [
  "瑶瑶最好了不气不气嘛（づ￣3￣）づ╭❤～",
  "瑶瑶可好最好！",
  "哄哄！",
  "buzbuz好瑶瑶嘛！",
  "瑶瑶不许生气嘛 ╥﹏╥...",
  "瑶瑶是最好的！o(*￣▽￣*)ブ",
  "瑶瑶超级乖巧！",
  "瑶瑶小可爱最最最棒啦～(*≧▽≦)",
  "瑶瑶小zzu我们去回民街玩嘛",
  "瑶瑶笑笑~ ✨٩(ˊᗜˋ*)و✨",
  "瑶瑶开心开心韬韬也开心～(๑˃̵ᴗ˂̵)و"
];

let currentIndex = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dogImage = document.getElementById("dogImage");
const mainText = document.getElementById("mainText");
const subText = document.getElementById("subText");

noBtn.onclick = () => {
  currentIndex++;

  dogImage.src = gifs[currentIndex % gifs.length];
  subText.textContent = subs[currentIndex % subs.length];

  let yesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  let noSize = parseFloat(window.getComputedStyle(noBtn).fontSize);

  yesSize = Math.min(yesSize * 1.1, 32);
  noSize = Math.max(noSize * 0.9, 5);

  yesBtn.style.fontSize = yesSize + "px";
  noBtn.style.fontSize = noSize + "px";

  let yesFlex = parseFloat(yesBtn.style.flex || 1);
  let noFlex = parseFloat(noBtn.style.flex || 1);

  yesFlex = Math.min(yesFlex * 1.1, 8.0);
  noFlex = Math.max(noFlex * 0.9, 0.1);

  yesBtn.style.flex = yesFlex.toFixed(2);
  noBtn.style.flex = noFlex.toFixed(2);

  if (noSize <= 5.01) {
    dogImage.src = angryGif;
    mainText.textContent = "垃圾瑶瑶 tui！";
    subText.textContent = "大胆何其大胆，tui你嘴里😠";

    yesBtn.disabled = true;
    noBtn.disabled = true;

    yesBtn.textContent = "🙄";
    noBtn.textContent = "🙅‍♂️";

    yesBtn.style.animation = "shake 0.3s ease-in-out 3";
    noBtn.style.animation = "shake 0.3s ease-in-out 3";
  }
};

yesBtn.onclick = () => {
  dogImage.src = happyGif;
  mainText.textContent = "我们和好了～";
  subText.textContent = "小狗也高兴地蹦起来啦！🐶💖";
  yesBtn.textContent = "耶耶耶🎉";
  yesBtn.disabled = true;
  noBtn.style.display = "none";
};
