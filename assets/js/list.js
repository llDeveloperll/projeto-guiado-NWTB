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
                            margin-right: 15px;
                        "
                        onclick="deleteUser(${data})"
                        onmouseover="applyClickEffect(this,'y')"
                        onmouseout="applyClickEffect(this,'n')">Excluir
                    </button>
                        
                    <a  style="
                            color: white;
                            background-color: #5973c7;
                            text-decoration: none;
                            border: 0px solid rgb(44, 221, 197);
                            padding: 5px 15px;
                            font-size: 14.1px;
                            font-weight: bold;
                            border-radius: 12px;
                        "
                        href="./src/form.html?listDatas=${data}"
                        onmouseover="applyClickEffect(this,'y')"
                        onmouseout="applyClickEffect(this,'n')">Editar
                    </a>
                </td>
            </tr>
        `;

    };
};

function deleteUser(userIndex) {
    listDatas.splice(userIndex, 1);
    genList();
    localStorage.setItem('dt', JSON.stringify(listDatas));
};

genList();