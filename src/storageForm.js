
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

    document.querySelector('.submit-form').addEventListener('click', () => {
        let name = document.getElementById('name');
        let phoneNumber = document.getElementById('phone')
        let exp = displayRadioValue()
        /*localStorage.clear()*/
        if (isAnValidInput(name) && isAnValidInput(phoneNumber)) { 
            console.log("passed",name,phoneNumber,exp)
            localStorage.setItem(localStorage.length + 1, [
                name.value, 
                phoneNumber.value, 
                exp, 
                "alterar"
            ])
        }
    })
}

function getLocalStorage() {
    let temp = {}

    for (i = 0; i <= localStorage.length; i++) {
        console.log(localStorage.getItem(i))
    }

    return temp
}

getLocalStorage()

