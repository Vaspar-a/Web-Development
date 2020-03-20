let flag = 0;

const oncart = () => {
    const span = document.getElementById('cart-no');
    const p_cont = document.querySelector('header h3>span>p');
    const display_value = getComputedStyle(span, null).getPropertyValue('display');

    // console.log(span.style.display + "no");
    if (display_value === 'none') {
        span.style.display = 'block';
        p_cont.innerHTML = 1;
    }
    else if (display_value === 'block') {
        p_cont.innerHTML = parseInt(p_cont.textContent) + 1;
        flag = parseInt(p_cont.textContent);
    }
    else {
        console.log('Try Again');
    }

}

const onmobilecart = () => {
    const span = document.getElementById('cart-mob-no');
    const p_cont = document.querySelector('header li>a>span>p');
    const display_value = getComputedStyle(span, null).getPropertyValue('display');

    // console.log(span.style.display + "no");
    if (display_value === 'none') {
        span.style.display = 'block';
        p_cont.innerHTML = 1;
    }
    else if (display_value === 'block') {
        p_cont.innerHTML = parseInt(p_cont.textContent) + 1;
    }
    else {
        console.log('Try Again');
    }
}

const openmenu = () => {
    const menubar = document.querySelector('.menu-ul');
    menubar.classList.toggle('menu-active');

    const span = document.getElementById('cart-mob-no');
    const p_cont = document.querySelector('header li>a>span>p');

    if(flag){
        span.style.display = 'block';
        p_cont.innerHTML = flag;
        console.log('Done');
    }
    else    
        console.log('Err');
}

const input_value = () =>{
    const input_value = document.getElementsByTagName('input');
    console.log(input_value[0].value);
    let sum = 0;
    for(let i=0; i<16; i++){
        if(input_value[i].value !== '' && parseInt(input_value[i].value) > 1)
            sum += parseInt(input_value[i].value);
    }
        p_cont.innerHTML = parseInt(p_cont.innerHTML) + sum;
    // set_display_value(display_value);
}

const stopinc = () => {
    const p_cont = document.querySelector('header h3>span>p');
    const span = document.getElementById('cart-no');
    p_cont.innerHTML = parseInt(p_cont.textContent) - 1;
    if(parseInt(p_cont.textContent) <= 1){
        span.style.display = '';
        console.log('?');
    }
    console.log(p_cont.innerHTML);
}



// const set_display_value = (value) =>{
//     if(value === 'block')
//         flag = true;
//     else 
//         flag = false;
// }