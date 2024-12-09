//获取开始按钮元素
const startButton = document.getElementById('start');
const submitBtn = document.getElementById('submitBtn');
const resultTimes = document.getElementById('times');
const randNumBtn = document.getElementById('randNum');
const resultBtn = document.getElementById('result')
let answer;

submitBtn.disabled = true;//未点击开始 不能点击提交
//开始按钮
startButton.addEventListener('click', function () {
    
    //生成随机数
    answer = Math.floor(Math.random() * 100);
    submitBtn.disabled = false; //点击开始后，可以提交自己猜测的数字
    resultTimes.value = 10;
    
    randNumBtn.value = null;
    
    resultBtn.value = null;
});

let guessNum;//用户猜测的数字
let count = 10;//每轮最多有10次机会
//提交按钮
submitBtn.addEventListener('click', function () {
    // console.log('用户点击提交按钮')

    //获取用户输入框input元素
    const inputElement = document.getElementById('randNum');
    //获取用户输入框input元素的值
    guessNum = inputElement.value;

    count--
    resultTimes.value = count;
    
    if (guessNum > answer) {
        resultBtn.value = "输入数字过大！"
    } else if (guessNum < answer) {
        resultBtn.value = "输入数字过小！"
    } else {
        resultBtn.value = "恭喜你猜对了！"
    }
    if (count == 0) {
        resultBtn.value = "很遗憾游戏失败！"
        count = 10;
        submitBtn.disabled = true;
    }
});