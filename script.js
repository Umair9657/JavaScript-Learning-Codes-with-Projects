// Generatre random colours
/*const randomColor = function(){
        const hex = '0123456789ABCDEF'
        let color = '#'
        for(let i =0; i<6; i++){
            color += hex[Math.floor(Math.random() *16)];
        }
        return color;
}

const startRandomColor = function(){
    document.body.style.backgroundColor = randomColor()
};

const stopRandomColor =function(){
                      
}
const str = document.getElementById("str").addEventListener('click',startRandomColor);

const stp = document.getElementById("stp").addEventListener('click', stopRandomColor)*/


//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 2000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#str').addEventListener('click', startChangingColor);

document.querySelector('#stp').addEventListener('click', stopChangingColor);

