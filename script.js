// NUMBER
// const num = 12;
// console.log('number:', num);

// const str = 'abdujabbor';
// console.log('string:', str);

// const bln = true;
// console.log('boolean:', bln);

// let undefinedVareable;
// console.log('undefined:', undefinedVareable);

// const nullVareable = null;
// console.log('null:', nullVareable);

// const sbl = Symbol('uniqueId')
// console.log('symbol:', sbl);

// const bigInt = 1234567890n
// console.log('bigInt:', bigInt);


// PARSIENT && PARSEFLOAT

// const age = '24';
// console.log(age);
// console.log(Number(age));
// console.log(parseInt(age));
// console.log(parseFloat(age));

// const age = '23';
// const ageNumber = Number(age);
// console.log(ageNumber);

// const amount = '123.34';
// console.log(amount);
// console.log(Number(amount));
// console.log(parseInt(amount));// bu method onlik string sonlarni butun sonlarga ogirib beradi
// console.log(parseFloat(amount)); // bu method butun va onlik sonlarni saqlab striingni numberga otkazadi


// // STRING

// const age = 23;
// console.log(String(age));
// console.log(age.toString());

// // BOOLEAN

// console.log(Boolean(0));
// console.log(Boolean(1));


// COERTION, CONCATINaTIOn

// console.log('10' + 10); //number stringa aylanadi
// console.log(10 + '10'); //number stringa aylanadi
// console.log('5' + 5); // javobi 55 boladi concatination boladi
// console.log('50' - 2); // 48 boladi + dan boshqa operatorlar arifmetik yani matematik hisob kitob qiladi

// console.log(true + 5); // true = 1: 6
// console.log(false + 5); // false = 0: 5


// trueth && falsey
// FALSE
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// TRUETHY
// false qiymatiga ega bolmagan barcha qiymatlar true ga teng misol
// console.log(Boolean(true));
// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean('hello'));
// console.log(Boolean(' '));
// console.log(Boolean([]));
// console.log(Boolean({}));

// ASOSIY OPERATORLAR
// const sum = 5 + 3;
// console.log(sum);

// const isEqual = 5 === 5;
// console.log(isEqual);

// const str = '5'
// const num = +str; // '5' {matinni} 5 {son}ga ozgartiradi
// console.log(num); // 5

// const num = 5
// const neg = -str; // qiymatni inkor qiladi
// console.log(neg); // -5

// const a = 5 // a ga 5 qiymati tayinlandi
// console.log(a); // 5

// let a = 5
// a += 3 // a = a + 3
// console.log(a); // 8

// let a = 10
// a -= 3 // a = a - 3
// console.log(a); // 7

// let a = 3
// a *= 4 // a = a * 4
// console.log(a); // 12

// let a = 20
// a /= 4 // a = a / 4
// console.log(a); // 5

// let a = 100
// a %= 3 // a = a % 3
// console.log(a); // 1 qoldiq

// MANTIQIY BOOLEAN

// const isAdult = true
// const hasTicket = true

// console.log(isAdult && hasTicket);

// const isStudent = false
// const isSenior = true

// console.log(isStudent || isSenior);

// const isMember = false
// console.log(!isMember);

// const age = 23
// const hasTicket = true

// console.log(age >= 18 && hasTicket);

// SWITCH CASE
// const num = 2
// let output;

// switch (num){
//   case 1:
//     output = 'bir';
//   break
//   case 2:
//     output = 'ikki';
//   break
// default:
//   case 3:
//     output = 'topilmadi'
//   break
// }
// console.log(`qiymat ${output}`);

// TERNERY OPERATOR
// const num = 5
// const result = num > 0 ? 'positive' : 'negative'
// console.log(result);


// // ARRAYS
// const fruits = ['apple', 'greape', 'cherry', 'banana']
// fruits.push('strowberry')
// console.log(fruits); // ['apple', 'greape', 'cherry', 'banana', 'strowberry'] push() methodi oxiriga yangi element qoshadi


// const fruits = ['apple', 'greape', 'cherry', 'banana']
// const removed = fruits.pop()
// console.log(fruits);// natija ['apple', 'greape', 'cherry'] pop() methodi oxirgi elementdan bitta olib tashlaydi


// const fruits = ['apple', 'greape', 'cherry', 'banana']
// const removed = fruits.shift()
// console.log(fruits); // natija ['greape', 'cherry', 'banana'] shift() methodi elementning boshidan bitta olib tashlaydi


// const fruits = ['apple', 'greape', 'cherry', 'banana']
// const add = fruits.unshift('strowberry')
// console.log(fruits);// natija ['strowberry', 'apple', 'greape', 'cherry', 'banana'] unshift() methodi elementning boshiga bitta element qoshadi



// const fruits = ['apple', 'greape', 'cherry', 'banana']
// const changeFruit = fruits.reverse()
// console.log(fruits); // natija ['banana', 'cherry', 'greape', 'apple'] reverce() methodi elementlarning ketma ketligini alishtirish yani teskari tartibga otkazishda qollaniladi


// const fruits = ['apple', 'greape', 'cherry', 'banana']
// // const part = fruits.slice(1, 3) // natija ['greape', 'cherry']
// // const part = fruits.slice(2) // natija ['cherry', 'banana']
// const part = fruits.slice(-3, -1) // natija ['greape', 'cherry']
// console.log(part);
// console.log(fruits);


// const fruits = ['apple', 'greape', 'cherry', 'banana']
// // const removed  = fruits.splice(1, 2)
// // fruits.splice(1, 0, 'ananas', 'kivi') // natija ['apple', 'ananas', 'kivi', 'greape', 'cherry', 'banana']
// fruits.splice(1, 2, 'ananas', 'kivi')
// console.log(fruits);
// // console.log(removed);

// const number = [1, 2, 3, 4, 5]
// const result = number.find(num => num > 3)
// console.log(result);


// const number = [1, 2, 3, 4, 5]
// const result = number.filter(num => num > 3)
// console.log(result);


// OBJECTS
// ozgartirish
// const enjeneer = {
//   name : 'abdujabbor',
//   age: 22,
//   language: ['english', 'python', 'js']
// }
// enjeneer.age = 23

// console.log(enjeneer);

// oobyect elementlarini ochirish
// const enjeneer = {
//     name : 'abdujabbor',
//     age: 22,
//     language: ['english', 'python', 'js']
//   }

//   delete enjeneer.age
//   console.log(enjeneer);


// const enjeneer = {
//   name : 'abdujabbor',
//   age: 22,
//   language: ['english', 'python', 'js']
// }
// console.log(enjeneer.name);

// const obj1 = {name: 'abdujabbor', age: 22}
// const obj2 = obj1

// obj2.age = 23
// console.log(obj1);
// console.log(obj2);



// SPRED REST OPERATOR

// const fruits = ['olma', 'banan', 'olcha']
// const newFruits = [...fruits, 'anor', 'kivi']
// console.log(newFruits);
// console.log(fruits);

// const jsFremvorks = ['react', 'vue', 'angular']
// const pythonFremvorks = ['Django', 'restApi']

// const mergetFremvorks = [...jsFremvorks, ...pythonFremvorks]
// console.log(mergetFremvorks);

// REST OPERATOR
// function sum(...number){
//   let sum = 0;
//   for(let i = 0; i < number.length; i++) {
//     sum += number[i]
//   }
//   return sum
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7));


// TEMPLATE LITERAL

// UZS USD CALC

// const uzs = document.querySelector(".uzsValue");
// const usd = document.querySelector(".usdValue");
// const btn = document.querySelector(".btn");

// const rate = 12052.5; // 1 USD = 12 052.5 so‘m

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   const uzsValue = Number(uzs.value);
//   const usdValue = Number(usd.value);

//   // Agar foydalanuvchi UZS kiritsa — USD hisoblanadi
//   if (uzsValue && !usdValue) {
//     usd.value = (uzsValue / rate).toFixed(2);
//   }
//   // Agar foydalanuvchi USD kiritsa — UZS hisoblanadi
//   else if (usdValue && !uzsValue) {
//     uzs.value = (usdValue * rate).toFixed(0);
//   }
//   // Agar ikkisi ham to‘ldirilgan yoki bo‘sh bo‘lsa
//   else {
//     alert("Iltimos, faqat bittasini kiriting (UZS yoki USD).");
//   }
// });



// // SLIDER
// const slides = document.querySelectorAll('.slide')
// const dots = document.querySelectorAll('.dot')
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')

// let currentIndex = 0


// function showSlide(index){
//   if (index >= slides.length) currentIndex = 0;
//   if (index < 0) currentIndex = slides.length - 1;

//   slides.forEach(slide => slide.classList.remove("active"))
//   slides[currentIndex].classList.add("active")

//   dots.forEach(dot => dot.classList.remove('active'));
//   dots[currentIndex].classList.add('active');
// }


// function nextSlide(){
//   currentIndex++
//   showSlide(currentIndex)
// }


// function prevSlide(){
//   currentIndex--
//   showSlide(currentIndex)
// }
// next.addEventListener('click', nextSlide)
// prev.addEventListener('click', prevSlide)


// dots.forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     currentIndex = index;
//     showSlide(currentIndex);
//   });
// })

// showSlide(currentIndex)


// MONTH PROGRAM

// /* script.js */
// const monthEl = document.getElementById('month');
// const yearEl = document.getElementById('year');
// const btn = document.getElementById('calc');
// const out = document.getElementById('result');


// // Default yil — joriy yil
// const now = new Date();
// yearEl.value = now.getFullYear();


// function daysInMonth(year, monthIndex){
// return new Date(year, monthIndex + 1, 0).getDate();
// }


// function countFridays(year, monthIndex){
// const days = daysInMonth(year, monthIndex);
// let count = 0;
// const fridays = [];
// for(let d = 1; d <= days; d++){
// const dt = new Date(year, monthIndex, d);
// if(dt.getDay() === 5){
// count++;
// fridays.push(d);
// }
// }
// return {count, fridays};
// }


// function monthName(idx){
// return monthEl.options[idx].text;
// }


// function showResult(){
// const monthIndex = parseInt(monthEl.value, 10);
// const year = Number(yearEl.value) || now.getFullYear();
// const days = daysInMonth(year, monthIndex);
// const {count, fridays} = countFridays(year, monthIndex);


// out.innerHTML = `
// <div style="display:flex; justify-content:space-between; gap:12px; align-items:center; flex-wrap:wrap">
// <div>
// <div class="meta">
// <div class="pill">Oy: ${monthName(monthIndex)} ${year}</div>
// <div class="pill">Kunlar soni: ${days}</div>
// <div class="pill">Juma kuni: ${count}</div>
// </div>
// <div style="margin-top:8px" class="small">Jumalarning sanalari: ${fridays.length ? fridays.join(', ') : 'Yo\'q'}</div>
// </div>
// </div>
// `;
// }


// btn.addEventListener('click', showResult);
// yearEl.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') showResult(); });
// monthEl.addEventListener('change', showResult);
// showResult();


const wrapper = document.querySelector('.wrapper')
const email = document.getElementById('email')
const password = document.getElementById('password')

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

async function getDate() {
  try {
    const res = await fetch(baseUrl)
    const data = await res.json()

    data.forEach(item => {
      const newWrapper = document.createElement('div')
      newWrapper.innerHTML = `
        <p>${item.name}</p>
        <p>${item.username}</p>
        <p>${item.email}</p>
        <p>${item.address.street}</p>
        <p>${item.address.suite}</p>
        <p>${item.address.city}</p>
        <p>${item.address.zipcode}</p>
      `

      wrapper.appendChild(newWrapper)
    });
  } catch (error) {
    console.error('xatolik bor:', error);
  }
}
getDate()































// WITH AXIOS

// const api = axios.create({
//   baseURL: 'https://6915c7f4465a9144626d8feb.mockapi.io/getValue'
// })
// // GET SOROVI



// function getMessage() {
//   api.get('/')
//     .then(res => {
//       const data = res.data;

//       wrapper.innerHTML = ""

//       data.forEach(item => {
//         const newWrapper = document.createElement('div')
//         newWrapper.innerHTML = `
//       <p>${item.email}</p>
//       <p>${item.password}</p>
//       `
//         wrapper.appendChild(newWrapper)
//       });
//     })
//     .catch(err => {
//       console.error('GET error:', err)
//     })

// }



// // POST SOROVI
// function addMessage() {

//   const newMessage = {
//     email: email.value.trim(),
//     password: password.value.trim()
//   }

//   api.post('/', newMessage)
//   .then(() => {
//     email.value = ''
//     password.value = ''
//     getMessage()
//   })
//   .catch(err => {
//     console.error('POST error:', err)
//   })
// }


// // DELETE SOROVI
// const delId = 1
// function deleteMessage(){
//   api.delete(`/${delId}`)
//   .then(() => {
//     getMessage()
//   })
//   .catch(err => console.error("DELETE error:", err));
// }


// const upId = 1
// // PUT SOROVi
// function updateMessage(){

//   const newMessage = {
//     email: email.value.trim(),
//     password: password.value.trim()
//   }

//   api.put(`/${upId}`, newMessage)
//   .then(() => {
//     email.value = ''
//     password.value = ''
//     getMessage()
//   })
//   .catch(err => console.error("PUT error:", err));
// }





















// // GET SOROVI
// function showData() {
//   fetch(baseUrl)
//   .then(res => res.json())
//   .then(data => {
//     wrapper.innerHTML = ""
//     data.forEach(item => {
//       const newWrapper = document.createElement('div')
//       newWrapper.innerHTML = `
//       <p>${item.email}</p>
//       <p>${item.password}</p>
//       `
//       wrapper.appendChild(newWrapper)
//     });
//   })

// }

// // POST SOROVI
// function sendMessage() {

//   const newMessage = {
//     email: email.value.trim(),
//     password: password.value.trim()
//   }

//   fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newMessage)
//   })
//     .then(response => response.json())
//     .then(addedUser => {
//       const newWrapper = document.createElement('div')
//       newWrapper.innerHTML = `
//       <p>${addedUser.email}</p>
//       <p>${addedUser.password}</p>
//       `
//       wrapper.appendChild(newWrapper)
//       email.value = ''
//       password.value = ''
//     })
// }



// // PUT SOROVI
// function editMessage() {
//   const id = 1
//   const newMessage = {
//     email: email.value.trim(),
//     password: password.value.trim()
//   }

//   fetch(`${baseUrl}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newMessage)
//   })
//   .then(() => {
//     showData()
//       email.value = ''
//       password.value = ''
//   })
// }


// // DELETE SOROVI
// function deleteMessage() {
//   const id = 5
//   fetch(`${baseUrl}/${id}`, {
//     method: 'DELETE',
//   })
//     .then(() => {
//       showData()
//       email.value = ''
//       password.value = ''
//     })
// }
