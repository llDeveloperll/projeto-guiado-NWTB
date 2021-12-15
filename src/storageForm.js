
function isAnValidInput(element) {

    if (element.value == "") {
        console.log('err')
        element.focus();
        return false;
    }

    return true;
}

function displayRadioValue() {

    var ele = document.getElementsByTagName('input');

    var result = ''

    for (i = 0; i < ele.length; i++) {

        if (ele[i].type == "radio") {

            if (ele[i].checked) {

                result = ele[i].value

            }
        }
    }
    return result
}

function setLocalStorage() {

    let name = document.getElementById('name');
    let phoneNumber = document.getElementById('phone')
    let exp = displayRadioValue()
    /*localStorage.clear()*/

    if (isAnValidInput(name) && isAnValidInput(phoneNumber)) { 
        console.log("passed",name,phoneNumber,exp)

        var newDatas = [
            name.value, 
            phoneNumber.value, 
            exp
        ]

        if (localStorage.getItem('datas') === null) {
            localStorage.setItem('datas', JSON.stringify(newDatas))
        } else {
            var sumDatas = [];
            var oldData = JSON.parse(localStorage.getItem('datas')) 

            sumDatas.push(oldData)
            sumDatas.push(newDatas)
            
            localStorage.setItem('datas',JSON.stringify(sumDatas))
        }
    }
}

function getLocalStorage() {
    var temp = JSON.parse(localStorage.getItem('datas'))
    
    return temp
}

/*getLocalStorage()*/