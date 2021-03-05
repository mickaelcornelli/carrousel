function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function installEventHandler(selector, type, eventHandler)
{

    const domObject = document.querySelector(selector);
 
    domObject.addEventListener(type, eventHandler);
}