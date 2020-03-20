const change_work_name = () => {
    
    //console.log("Invoked");
    const select = document.getElementById('select');
    const work_name = document.getElementById('workname');
    // const work_name_field = document.getElementById('worknamefield');

    //console.log(select.options[select.selectedIndex]);
    if(select.value === 'Student' || select.value === 'Faculty Member'){
        work_name.innerHTML = 'School/College Name';
        //console.log("??");
    }
    else{
        work_name.innerHTML = 'Company/Firm Name';
    }

}
