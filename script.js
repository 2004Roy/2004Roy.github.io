const sideMenu=document.querySelector('#sideMenu');
const navBar= document.querySelector("nav");
const navLinks= document.querySelector("nav ul");
function openMenu(){
    sideMenu.style.transform='translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform='translateX(16rem)'
}


window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    if (document.documentElement.classList.contains('dark')) {
      navBar.classList.add('backdrop-blur-lg', 'shadow-sm');
      navBar.classList.remove('bg-white/50');
    } else {
      navBar.classList.add('bg-white/50', 'backdrop-blur-lg', 'shadow-sm');
    }
    navLinks.classList.remove('bg-white/50', 'shadow-sm');
  } else {
    navBar.classList.remove('bg-white/50', 'backdrop-blur-lg', 'shadow-sm');
    navLinks.classList.add('bg-white/50', 'shadow-sm');
  }
});



// ------------light mode & dark mode----------------------


// if(localStorage.theme==='dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
//     document.documentElement.classList.add('dark')
// }
// else{
//     document.documentElement.classList.remove('dark')
// }


// function toggleTheme(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.theme='dark';
//     }else{
//         localStorage.theme='light';
//     }
// }











if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}



// ------------scroll and refresh---------------


function scrollAndRefresh() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      location.reload();
    }, 600); // 600ms = wait for scroll animation before refresh
  }
