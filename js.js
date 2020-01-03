 var btn = document.getElementById('btn');
 var small = document.getElementById('num');
 var rand = Math.floor(Math.random() * 11);
 var input = document.getElementById('number01');
 check = null;
 var count = 0;
 btn.addEventListener('click', function() {
     if (input.value.length > 0) {
         check = true;
         small.innerText = "";
         input.style.border = "1px solid #ccc";
     } else {
         check = false;
         small.innerText = "mời nhập số";
         small.style.color = "red";
         input.style.border = "1px solid red";
     }
     if (check) {
         count++
         if (!isNaN(input.value)) {
             if (input.value == rand) {
                 small.innerText = "chúc mừng bạn đã đoán đúng";
             } else if (input.value < rand) {
                 small.innerText = "cần lớn hơn";
             } else if (input.value > rand) {
                 small.innerText = "cần nhỏ hơn";
             }
         } else {
             alert('bạn phải nhập số');
         }
         document.querySelector('p').innerText = `bạn đã đoán ${count} lần`
     }
 })