const table = document.getElementById("list");

console.log(table)



/*
function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");
    var thd=function(i){return (i==0)?"th":"td";};
    for (var i=0;i<conteudo.length;i++) {
        var tr = document.createElement("tr");
        for(var o=0;o<conteudo[i].length;o++){
        var t = document.createElement(thd(i));
        var texto=document.createTextNode(conteudo[i][o]);
        t.appendChild(texto);
        tr.appendChild(t);
        }
        (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
}

var fakeDatas = [
    ["Nome", "Telefone","Experiência Prévia"],
    ["matheus",  "+55 (99) 99999-9999","sim"],
    ["cristian", "+55 (88) 88888-8888","sim"],
    ["pedro",    "+55 (77) 77777-7777","não"],
    ["henrique", "+55 (66) 66666-6666","não"]
]

rt = criarTabela(fakeDatas)

console.log(rt)

table.appendChild(rt);
*/