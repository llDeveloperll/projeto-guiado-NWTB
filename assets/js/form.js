function getExpValue() {
    
    var ele = document.getElementsByTagName('input');

    var result = ''

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type == "radio") {

            if (ele[i].checked) {

                result = (ele[i].value == "true")

            }
        }
    }
    return result
    
}


function registerForm(param) {
    param.preventDefault();

    var datasRaw = localStorage.getItem('dt')

    var listDatas = ((datasRaw != null) ? JSON.parse(datasRaw) : []);

    listDatas.push({
        'name': param.target.elements['name'].value,
        'phone': param.target.elements['phone'].value,
        'exp': getExpValue()
    });
    
    localStorage.setItem('dt', JSON.stringify(listDatas));

    document.getElementById('home').click()

}