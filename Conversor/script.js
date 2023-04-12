const divRoot = document.getElementById('root');
var rootWidth = divRoot.clientWidth;
var rootHeight = divRoot.clientHeight;


const resize = () => {
  console.log('resize');
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var proportion = windowHeight / windowWidth;
  
  if (proportion > 0.5652) {
    divRoot.style.width = (windowWidth / 100) * 90 + 'px';
    divRoot.style.height = divRoot.clientWidth / 0.5625 + 'px';
    rootWidth = divRoot.clientWidth;
    rootHeight = divRoot.clientHeight;
  } else {
    divRoot.style.height = (windowHeight / 100) * 90 + 'px';
    divRoot.style.width = divRoot.clientHeight * 0.5625 + 'px';
    rootWidth = divRoot.clientWidth;
    rootHeight = divRoot.clientHeight;
  }
  
}

resize();

window.addEventListener('resize', () => {
  console.log('resize');
  resize();
});


