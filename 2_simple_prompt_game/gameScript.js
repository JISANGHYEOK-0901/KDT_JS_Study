// ############ 숫자 맞추기 게임 ############
// 1) 유저 최초 입력을 Random 넘버를 입력받기
// 2) 0에서 해당 넘버 사이의 유저 입력을 반복적으로 받으며 정답일 경우 게임 종료
// 3) 시도횟수를 화면에 표시
// 4) 현재까지의 최고 기록도 화면에 표시

const paragraph = document.querySelector("p");
const startButton = document.getElementById("startButton");

let RanNum;
let i;
let bestAttempt;

const startGame = () => {
  RanNum = Math.round(Math.random() * 100);
  console.log(RanNum);
  i = 1;
  bestAttempt = 101;

  while (true) {
    let userInput = prompt(
      `${i}번째 시도 여기에 값을 입력하세요!\nq 입력시 종료`
    );

    if (userInput === "q") {
      paragraph.textContent = `숫자 맞추기에 실패하셨습니다.`;
      return;
    } else if (isNaN(userInput)) {
      alert("숫자를 입력해야 합니다.");
      continue;
    } else if (RanNum == userInput) {
      alert("정답입니다.");

      if (i < bestAttempt) {
        bestAttempt = i;
      }
      paragraph.textContent = `${bestAttempt}번째가 최고 기록입니다.`;
      return;
    }

    userInput = Number(userInput);
    console.log(`입력한 값은 ${userInput} 입니다!`);

    i++;
  }
};

startButton.addEventListener("click", startGame);
