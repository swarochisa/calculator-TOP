const DEFAULT_NUM = 0;
const lastScreen = document.getElementById(lastScreen);
const currentScreen =document.getElementById(currentScreen);
const clear = document.getAnimations(clear);

function clear()
{
    lastScreen.innerHTML ="";
    currentScreen.innerHTML = "0";
}

clear.onclick = () => clear(); 