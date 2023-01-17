//收藏本站
function AddFavorite(title, url)
{
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("自动添加不会搞，别想了。\n加入收藏失败，请手动在右上角点击进行添加");
        }
    }
}

// 原始代码
const confettiShower = [];
const numConfettis = 50;
const container = document.getElementById("xuna");
const colors = [
"#f2abe7",
"#9fa3ec",
"#86d2e1 ",
"#fec31e "];


class Confetti {
  constructor(x, y, w, h, c) {
    this.w = Math.floor(Math.random() * 10 + 5);
    this.h = this.w * 1;
    this.x = Math.floor(Math.random() * 100);
    this.y = Math.floor(Math.random() * 100);
    this.c = colors[Math.floor(Math.random() * colors.length)];
  }
  create() {
    var newConfetti = '<div class="confetti" style="bottom:' + this.y + '%; left:' + this.x + '%;width:' +
    this.w + 'px; height:' + this.h + 'px;"><div class="rotate"><div class="askew" style="background-color:' + this.c + '"></div></div></div>';
    container.innerHTML += newConfetti;
  }}
;

function animateConfetti() {
  for (var i = 1; i <= numConfettis; i++) {
    var confetti = new Confetti();
    confetti.create();
  }
  var confettis = document.querySelectorAll('.confetti');
  for (var i = 0; i < confettis.length; i++) {
    var opacity = Math.random() + 0.1;
    var animated = confettis[i].animate([
    { transform: 'translate3d(0,0,0)', opacity: opacity },
    { transform: 'translate3d(20vw,100vh,0)', opacity: 1 }],
    {
      duration: Math.random() * 3000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000) });

    confettiShower.push(animated);
  }
}

animateConfetti();