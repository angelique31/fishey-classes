// const contactBtn = document.querySelector('.contact_button');
const lightboxClose = document.querySelector('.lightbox_close');
const lightbox = document.querySelector('.lightbox');

// 
/**
 * open modale
 */
// function launchModal() {
//     modalbg.style.display = 'block'; 
// }
  
// contactBtn.addEventListener('click', launchModal);

  
/**
   * close modale
   */
function closeModal() {
    lightbox.style.display = 'none'; 
}
  
lightboxClose.addEventListener('click', closeModal);
  




