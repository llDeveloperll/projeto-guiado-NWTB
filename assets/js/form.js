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

    var datasRaw = localStorage.getItem('dt');

    var listDatas = ((datasRaw != null) ? JSON.parse(datasRaw) : []);

    if (param.target.elements['phone'].value.replace(/[-() ]/g, '').length < 10) {
        alert('Número inválido!')
        return false
    }

    if (id !== null) {

        listDatas[id] = {
            'name': param.target.elements['name'].value,
            'phone': param.target.elements['phone'].value,
            'exp': getExpValue()
        };

    } else {

        listDatas.push({
            'name': param.target.elements['name'].value,
            'phone': param.target.elements['phone'].value,
            'exp': getExpValue()
        });

    }
    
    localStorage.setItem('dt', JSON.stringify(listDatas));

    document.getElementById('home').click()

}

var urlP = new URL(window.location.href)
var id = urlP.searchParams.get("listDatas")

if (id !== null) {
    var datasRaw = localStorage.getItem('dt')
    var listDatas = ((datasRaw != null) ? JSON.parse(datasRaw) : []);

    document.getElementById('name').value = listDatas[id].name;
    document.getElementById('phone').value = listDatas[id].phone;

    var xpState = (listDatas[id].exp) ? 'yes' : 'no';
    document.getElementById('exp-' + xpState).checked = true;

}