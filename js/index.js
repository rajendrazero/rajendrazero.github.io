
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let colorIcon = document.querySelector('#color-icon');
let navbar2 = document.querySelector('.navbar2');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let navbar2_a = document.querySelectorAll('navbar2 a')
const root = document.documentElement; // Mendapatkan elemen root (<html>)
const rootStyles = getComputedStyle(root); // Mendapatkan semua gaya yang dihitung dari elemen root
const mainColor = rootStyles.getPropertyValue('--main-color').trim(); // Mengambil nilai dari variabel --main-color dan menghapus spasi tambahan
console.log(mainColor); // Mencetak nilai variabel ke konsol

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
      })
    }
  })
}

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

colorIcon.onclick = () => {
  colorIcon.classList.toggle('bx-x');
  navbar2.classList.toggle('active');
}

// Mengubah nilai variabel CSS ketika tombol diklik
  function color(name) {
    root.style.setProperty('--main-color', name);
}

//mengembalikan input nol saata pesan sudah di kirim 
window.onbeforceunload = () => {
  for (const form of document.getElementsByTagName("form")){
    form.reset();
  }
}
        
        
      
      
      
      
      
 /*pemakaian yang dulu*/

 //        // Mengubah nilai variabel CSS ketika tombol diklik
//         document.getElementById('changeColorBtn').addEventListener('click', () => {
//             root.style.setProperty('--main-color', '#e74c3c');
//             console.log('New main color set to: #e74c3c');
//         });

// function color(name){
//   document.body.classList.toggle(name);
// }


/*// Toggle red mode
function toggleRedMode() {
    document.body.classList.toggle('red-mode');
}

// Toggle purpel mode
function togglePurpelMode() {
    document.body.classList.toggle('purpel-mode');
}

// Toggle yellow mode
function toggleYellowMode() {
    document.body.classList.toggle('yellow-mode');
}

// Toggle green mode
function toggleGreenMode() {
    document.body.classList.toggle('green-mode');
} */