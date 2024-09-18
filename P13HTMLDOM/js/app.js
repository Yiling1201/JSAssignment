
    const text = document.getElementById("text");
    text.innerHTML = "Elaine"; // 替換為你的名字
    text.style.color = "blue"; // 替換為你最喜歡的顏色


    // 宣告一個變數來儲存分數
    let score = 0;

    // 創建一個函數，用於增加分數
    function increaseBy(inputNumber) {
      score += inputNumber; // 將傳入的數字加到當前分數上
    }

    // 創建一個函數，用於更新分數顯示
    function updateScore() {
      const textElement = document.getElementById("text2"); // 取得顯示分數的元素
      textElement.innerHTML = `Score: ${score}`; // 更新顯示內容
    }

    // 監聽按鈕的點擊事件
    const buttonElement = document.getElementById("button0");
    buttonElement.addEventListener("click", function() {
      increaseBy(1); // 每次點擊增加 1 分
      updateScore();  // 更新分數顯示
    });
