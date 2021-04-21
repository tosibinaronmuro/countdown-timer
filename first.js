let menuToggle=document.querySelector('.list_items')
let listUl=document.querySelector('.list-item-ul')
let body=document.getElementsByTagName('body')
let menu=document.querySelector('.menu');
let searchToggle=document.querySelector('.searchh')
let search=document.querySelector('.search')


// listUl.style.display='none'
menu.addEventListener('click', click=()=>{
    
    
    if ( menuToggle.classList.contains('list_items')){
        // listUl.style.display='none'
        // body[0].style.backgroundColor='blue'
        menuToggle.classList='list_items-off'
        listUl.style.display='flex'
    }
    else{
        listUl.style.display='flex'
        menuToggle.classList='list_items '
        // body[0].style.backgroundColor='red'
    }
   
})

searchToggle.addEventListener('click',clickk=()=>{
    if(search.classList.contains('search')){
        // body[0].style.backgroundColor='blue'
        search.classList='found'
    }
    else{
        // body[0].style.backgroundColor='red'
        search.classList='search'
    }
    
     
})

function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 840) {
      // Then log this message to the console
      
      menuToggle.className='list_items';
      search.style.display='flex';
      
    }
    listUl.style.display='flex';
search.style.display='flex'
  }
  
  // Add a listener for when the window resizes
  window.addEventListener('resize', checkMediaQuery);
 


//   week days and months
const months=[
    "January",
    "February", 
    "March", 
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const weekdays=[
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
let countdown=document.querySelector('.countdown')
let giveaway=document.querySelector('.giveaway')
// let days=document.querySelector('.days')
// let hours=document.querySelector('.hours')
// let minutes=document.querySelector('.minutes')
// let seconds=document.querySelector('.seconds')
let time=document.querySelectorAll('.countdown h3')
let futureDate= new Date(2021,3,28,12,30,0)
// console.log(futureDate)
const year=futureDate.getFullYear()
const hour=futureDate.getHours()
const minute=futureDate.getMinutes()
const second=futureDate.getSeconds()
const day=futureDate.getDay()
const dayss=futureDate.getDate()
const month=futureDate.getMonth()
// console.log(weekdays[day])
const realMonth=months[month]
const realDay=weekdays[day-1]

 
giveaway.textContent= `giveaway ends on ${realDay}, ${dayss} ${realMonth} ${year}, ${hour}:${minute}pm`
let timer=futureDate.getTime()
// 
// console.log(timer)

let getRemainingTime=()=>{
    // calculation
    let timerPresent=new Date().getTime()
    
    let substraction=timer-timerPresent
    // console.log(substraction)
    let h3Days=substraction/86400000;
    h3Dayss=Math.floor(h3Days)
    // console.log(h3Days)
    let h3Hours=(h3Days % 1)*24
    h3Hourss=Math.floor(h3Hours)
    let h3Mins=(h3Hours%1)*60
    h3Minss=Math.floor(h3Mins)
    let h3Sec=(h3Mins %1)*60
    h3Secc=Math.floor(h3Sec)
    // console.log(h3Sec)


    // assigning it to html
    // console.log(time)
    time[0].textContent=h3Dayss
    time[1].textContent=h3Hourss
    time[2].textContent=h3Minss
    time[3].textContent=h3Secc
 
    if(substraction<=1){
        clearInterval(count)
        countdown.innerHTML=`<h4 class='expired'>sorry this offer has expired</h4>`
    }
}
//countdoan
let count=setInterval(getRemainingTime,1000)
 getRemainingTime()
// // 
// menu.addEventListener('click', click=()=>{
    
//     if ( menuToggle.classList.contains('list_items')){
//         // menuToggle.style.display="none";
//         menuToggle.className='list_items-off';
//         search.style.display='none'
         
//     }
//    else {
//         menuToggle.className='list_items';
//         search.style.display='none'
//     }
// })

// searchToggle.addEventListener('click',clickk=()=>{
//     if ( menuToggle.classList.contains('list_items')){
         
//         menuToggle.className='list_items-off';
//         search.style.display='flex';
//         listUl.style.display='flex'
    
         
//     }
//     else {
//         menuToggle.className='list_items';
//         search.style.display='flex';
//         listUl.style.display='none'
//     }
     
// })