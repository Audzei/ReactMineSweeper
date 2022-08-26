export const revealed = (arr, x, y, newNonMinesCount) => {
    console.log(arr[x][y]);
    if (arr[x][y].revealed) {
      return;
    }
    let flipped = [];
    flipped.push(arr[x][y]);
    while (flipped.length !== 0) {
      let single = flipped.pop();
  
      if (!single.revealed) {
        newNonMinesCount--;
        single.revealed = true;
      }
  
      if (single.value !== 0) {
        break;
      }  
      
      if (
        single.x > 0 &&
        single.y > 0 &&
        arr[single.x - 1][single.y - 1].value === 0 &&
        !arr[single.x - 1][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y - 1]);
      }
      if (
        single.x < arr.length - 1 &&
        single.y < arr[0].length - 1 &&
        arr[single.x + 1][single.y + 1].value === 0 &&
        !arr[single.x + 1][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y + 1]);
      }
      if (
        single.x < arr.length - 1 &&
        single.y > 0 &&
        arr[single.x + 1][single.y - 1].value === 0 &&
        !arr[single.x + 1][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y - 1]);
      }
      if (
        single.x > 0 &&
        single.y < arr[0].length - 1 &&
        arr[single.x - 1][single.y + 1].value === 0 &&
        !arr[single.x - 1][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y + 1]);
      }
  
      // Одиночки

      if (
        single.x > 0 &&
        arr[single.x - 1][single.y].value === 0 &&
        !arr[single.x - 1][single.y].revealed
      ) {
        flipped.push(arr[single.x - 1][single.y]);
      }
      if (
        single.x < arr.length - 1 &&
        arr[single.x + 1][single.y].value === 0 &&
        !arr[single.x + 1][single.y].revealed
      ) {
        flipped.push(arr[single.x + 1][single.y]);
      }
      if (
        single.y > 0 &&
        arr[single.x][single.y - 1].value === 0 &&
        !arr[single.x][single.y - 1].revealed
      ) {
        flipped.push(arr[single.x][single.y - 1]);
      }
      if (
        single.y < arr[0].length - 1 &&
        arr[single.x][single.y + 1].value === 0 &&
        !arr[single.x][single.y + 1].revealed
      ) {
        flipped.push(arr[single.x][single.y + 1]);
      }
  
      // Начальное раскрытие
      if (
        single.x > 0 &&
        single.y > 0 &&
        !arr[single.x - 1][single.y - 1].revealed
      ) {
        //Верхний левый раскрытие
  
        arr[single.x - 1][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.y > 0 && !arr[single.x][single.y - 1].revealed) {

        // Верх раскрытие
        arr[single.x][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x < arr.length - 1 &&
        single.y > 0 &&
        !arr[single.x + 1][single.y - 1].revealed
      ) {
        //Верхний правый раскрытие
        arr[single.x + 1][single.y - 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.x > 0 && !arr[single.x - 1][single.y].revealed) {
        //Лево раскрытие
        arr[single.x - 1][single.y].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.x < arr.length - 1 && !arr[single.x + 1][single.y].revealed) {
        // Право раскрытие
        arr[single.x + 1][single.y].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x > 0 &&
        single.y < arr[0].length - 1 &&
        !arr[single.x - 1][single.y + 1].revealed
      ) {
        // Нижний левый раскрытие
        arr[single.x - 1][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (single.y < arr[0].length - 1 && !arr[single.x][single.y + 1].revealed) {
        //Низ раскрытие
        arr[single.x][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
  
      if (
        single.x < arr.length - 1 &&
        single.y < arr[0].length - 1 &&
        !arr[single.x + 1][single.y + 1].revealed
      ) {
        // Нижний правый раскрытие
        arr[single.x + 1][single.y + 1].revealed = true;
        newNonMinesCount--;
      }
    }
    return { arr, newNonMinesCount };
  };