const balls = document.getElementsByClassName('ball');
//Event Handler Property= (onmousemove)
// Interface= (MouseEvent)
document.onmousemove = (event) => {
// Retrieves the x-coordinate of the mouse cursor
  // relative to the client area of the window, excluding window decorations or scroll bars."
  //interior width of the window in pixels (could also include scroll bar)
  //How does an object return something? "inner width returns the wdith of the window's layout viewport"
  //why id tje innerWidth/innerHiels divides the client x/y?????
  //maybe relative coordinates?

  //window.innerWidth returns the width of the viewport

  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  //for loop, i is starting point, 2 is stoping point & increent by 1
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;

    //Does transform have a value as a sring with oporators in js file?
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
