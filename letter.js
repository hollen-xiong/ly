let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '致我最爱的乖宝ly<此刻提笔，心里沉甸甸的。想起这个月多次因为我的疏忽，让你受了委屈，胸口就像堵了一团湿棉花。我保证，下次一定把耳朵竖得更高，心放得更软，当你情绪的“避风港”。<我在日历上圈出见面的日期，像个过冬的松鼠，数着天数过日子。计划着一步步拆除距离的栅栏，朝着你奔跑。宇宙很大，可我想在你的轨道做一颗小行星——因为你，才是我的引力中心。<原谅我的笨嘴拙舌，只能把心摊开在纸上。下次见面，请允许我用拥抱当面投递这颗滚烫的真心。<你一眨眼，<温驯的小鹿有跳动一下，<柔软的暖风有轻拂一下，<遥远的星星有闪烁一下，<我也有心动<却不止一下'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
