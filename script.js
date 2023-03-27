const slideImg = (img) => {
  document.querySelector(".img").src = img;
};
const backgroundColor = (color) =>{
    let bgColor  = document.querySelector('.container');
    bgColor.style.background = color;
}
const backgroundBox = (color) =>{
    let bgColor  = document.querySelector('.info__img');
    bgColor.style.background = color;
}
