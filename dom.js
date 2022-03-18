const button = document.getElementById('buttonColor');
const body = document.getElementsByTagName('body')[0];
const button2 = document.createElement('button');
const textButton2 = document.createTextNode('Warna Random');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
// harus diberikan indeks 0 karna getElementsByTagName mengembalikan nilai yang berisi array
button.addEventListener('click', function() {
  // body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru-muda');
  body.classList.toggle('biru-muda');
});

// masukkan textButton2 kedalam textButton2
button2.appendChild(textButton2);

// input button2 setelah button
button.after(button2);

// tambah attribute id pada button2
button2.setAttribute('id', 'button2');

// tambah attribute type pada button2
button2.setAttribute('type', 'button');

button2.addEventListener('click', function() {
  const r = Math.round(Math.random()*255 + 1);
  const g = Math.round(Math.random()*255 + 1);
  const b = Math.round(Math.random()*255 + 1);

  body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// gunakan event 'input' untuk mengubah nilai slider
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',100)';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// cursor movement
document.body.addEventListener('mousemove', function(event) {
  // posisi mouse
  // gunakan clientX untuk mengetahui coordinat x  pada mouse
   // event.clientX;
  // gunakan clientY untuk mengetahui coordinat y  pada mouse
  // event.clientY;
  // gunakan window.innerWidth untuk mengetahui ukuran lebar browser
  const xPos = Math.round((event.clientX/window.innerWidth) * 255);
  const yPos = Math.round((event.clientY/window.innerHeight) * 255);

  document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});
