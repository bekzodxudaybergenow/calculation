let process = document.querySelector('.process');
let nums = document.querySelectorAll('.num');
let action = document.querySelectorAll('.action');
let removeBtn = document.querySelector('.remove');
let backspaceBtn = document.querySelector('.backspaceBtn');
let markTemp;


// Raqamlarni tanlab olish
nums.forEach((num) => {
    num.addEventListener('click', (e) => {
        process.textContent += e.target.textContent;
    })
})

// Hisoblash belgilarini tanlash. Agar biror belgi process(oynachada) bo'lsa ikkinchisini qo'shmidi(markTemp misol: +, /)
action.forEach((item) => {
    item.addEventListener('click',(e) => {
        if(!process.textContent.includes(markTemp)) {
            markTemp = e.target.textContent;
            process.textContent += markTemp;
        }
    })
})



/* Bu yerda hisoblash amallari va process(oynachadagi) matnlarni split orqali arrayga aylantirdim. split(mark) - bu
split(bu yerga belgilar keladi va shular orasida listlarga ajraladi) [[1], [2]]. Shart listimiz teng bo'lsa 2ga ishliydi, undan ko'p amallar hozircha berolmimiz :) */ 

function count(){
    let mark = markTemp;
    if(process.textContent.split(mark).length == 2) {
        let num1 = +process.textContent.split(mark)[0];
        let num2 = +process.textContent.split(mark)[1];
    
        switch (mark) {
            case '+':
                process.textContent = '';
                process.textContent += num1 + num2;
                break;
            case '-':
                process.textContent = '';
                process.textContent += num1 - num2;
                break;
            case '*':
                process.textContent = '';
                process.textContent += num1 * num2;
                break;
            case '/':
                process.textContent = '';
                process.textContent += num1 / num2;
                break;
            case '%':
                process.textContent = '';
                process.textContent += num1 % num2;
                break;
        }
    }
}

// (c) clear - tozalash tugmamiz!
removeBtn.addEventListener('click', () => {
    process.textContent = '';
})

// (backspace) bir marta orqaga qaytish tugmamiz! Split orqali ohirgi indexni olib tashladim va join orqali birlashtirdim
backspaceBtn.addEventListener('click', () => {
    let temp = process.textContent.split('');
    temp.pop();
    process.textContent = temp.join('');
})


