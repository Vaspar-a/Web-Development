const nameval = () => {
    const regex = /^[a-zA-Z ]{1,}$/;
    const name = document.getElementById('name');
    if (!regex.test(name.value)){
        alert('Please enter proper name');
        // name.focus();
        console.log('name-true');
        return false;
    }
    else{
        console.log('name-false');
        return true;
    }
}

const emailval = () => {
    const regex = /^[0-9a-z._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const email = document.getElementById('email');
    if (!regex.test(email.value)){
        alert('Please enter proper email');
        // email.focus();
        console.log('email-true');
        return false;
    }
    else{
        console.log('email-false');
        return true;
    }
}

const urlval = () => {
    const regex = /^[(https|http)][:]\/\/[^\s$.?#].[^\s]*$/;
    const url = document.getElementById('url');
    if (!regex.test(url.value)){
        alert('Please enter proper url');
        // url.focus();
        console.log('url-true');
        return false;
    }
    else{
        console.log('url-false');
        return true;
    }
}

const adval = () => {
    const regex = /^[a-zA-Z]{1,}$/;
    const address = document.getElementById('address');
    if (!regex.test(address.value)){
        alert('Please enter proper address');
        // address.focus();
        console.log('ad-true');
        return false;
    }
    else{
        console.log('ad-false');
        return true;
    }
}

const telval = () => {
    const regex = /^[0-9]{10}$/;
    const telephone = document.getElementById('telephone');
    if (!regex.test(telephone.value)){
        alert('Please enter proper telephone');
        // telephone.focus();
        console.log('tel-true');
        return false;
    }
    else{
        console.log('tel-false');
        return true;
    }
}

const submitval = () => {
    console.log('submitval');
    setTimeout(nameval,1000);
    setTimeout(emailval,1000);
    setTimeout(urlval,1000);
    setTimeout(adval,1000);
    setTimeout(telval,1000);
    // nameval();
    // emailval();
    // urlval();
    // adval();
    // telval();
}