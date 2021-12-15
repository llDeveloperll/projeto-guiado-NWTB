var datasRaw = localStorage.getItem('dt')

var listDatas = ((datasRaw !== null) ? JSON.parse(datasRaw) : []);


/*
var fakeDatas = [
    {
        name: 'Ryan',
        tel: "999888",
        xp: false
    },
    {
        name: 'Julius',
        tel: "777666",
        xp: true
    },
    {
        name: 'Maria',
        tel: "555444",
        xp: false
    },
    {
        name: 'Denis',
        tel: "333222",
        xp: true
    }
];
*/

function applyClickEffect(element, state) {
    var color = ((state == "y") ? '#0e2d91' : '#5973c7');
    element.style.backgroundColor = color;
}

function refreshTable() {
    currentLines = [...document.querySelectorAll('table.list tbody .dynamic-content')]
    currentLines.forEach(element => {
        element.remove()
    });
}

function genList() {

    refreshTable();

    for (data in listDatas) {

        document.querySelector('table.list tbody').innerHTML += `
                <tr class="dynamic-content" style="
                    background-color: ${((data % 2 == 0) ? '#fff' : '#eee')};
                ">
                    <td>  
                        ${listDatas[data].name}
                    </td>
                    <td>
                        ${listDatas[data].phone}
                    </td>
                    <td>
                        ${(listDatas[data].exp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>')}
                    </td>
                    <td>
                        <button class="btn" style="
                            background-color: #5973c7;
                            padding: 5px 15px;
                            outline: none;
                            outline-offset: 0px;
                            border: 0;
                            border-radius: 12px;
                            color: white;
                            font-weight: bold;
                        "
                        onclick="deleteUser(${data})"
                        onmouseover="applyClickEffect(this,'y')"
                        onmouseout="applyClickEffect(this,'n')"
                        > Excluir </button>
                    </td>
                </tr>
                `
    };
};

function deleteUser(userIndex) {
    listDatas.splice(userIndex, 1);
    genList();
    localStorage.setItem('dt', JSON.stringify(listDatas))
}

genList();