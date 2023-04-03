//import like this
import './rufMenubar';

let rufMenubar = document.querySelector('ruf-menubar');
rufMenubar.addEventListener('selectChange', (event) => {
  console.log(event.detail.selectedItem);
  //any custom logic for required behavior
});
