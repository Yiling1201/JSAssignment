
    const text = document.getElementById("text0");
    text.innerHTML = "Elaine"; // 名字
    text.style.color = "blue"; // 顏色


    // 宣告一個變數來儲存分數
    let score = 0;


    // 創建一個函數，用於计数
    function increaseBy(inputNumber) {
    return  score+= inputNumber; // 將傳入的數字加到當前分數上
    }

    // 創建一個函數，用於顯示
    function updateScore() {
      const text2 = document.getElementById("text2"); // 取得顯示分數的元素
    return  text2.innerHTML = `Score: ${score}`; // 更新顯示內容
    }

    // 按鈕的點擊
    const button0 = document.getElementById("button0");
    button0.addEventListener("click", () => {
      increaseBy(1); // 每次點擊增加 1 分
      updateScore();  // 更新分數顯示();});


    });
