(function (window, document, undefined) {

    window.onload = init;

    function init() {

        var table = document.getElementById('list');

        table.style.width = '100%';
        table.style.marginTop = '7px';
        table.style.borderSpacing = '0';

        var widthPrct = ['15%', '10%', '8%', '10%'];

        function applyStylesheet(i, o, element, expState) {

            element.style.color = "white";

            if (element.nodeName == 'BUTTON') {

                element.style.backgroundColor = "#5973c7";
                element.style.padding = '5px 15px';
                element.style.outline = "none";
                element.style.outlineOffset = '0px';
                element.style.border = '0px';
                element.style.borderRadius = '12px';

            } else {
                element.style.backgroundColor = "#000000";
                element.style.fontWeight = "bold";
                element.style.padding = '7px';
                element.style.textAlign = 'center';

                if (i != 0) {
                    element.style.backgroundColor = (expState == "sim") ? "#2f9255" : "#ab362e";
                } else {
                    element.style.verticalAlign = "top";
                    element.style.width = widthPrct[o];
                }
            }

        }

        function applyColorOnOver(elem) {
            elem.style.backgroundColor = '#314a9c'
        }

        function removeColorOnOut(elem) {
            elem.style.backgroundColor = "#5973c7";
        }

        function applyColorOnClick(elem) {
            elem.style.backgroundColor = '#0e2d91'
            setTimeout(function (passedElem) {
                passedElem.style.backgroundColor = '#5973c7'
            }, 80, elem)
        }

        function genChildsAndDatas(conteudo) {

            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");

            var thd = function (i) { return (i == 0) ? "th" : "td"; };

            for (var i = 0; i < conteudo.length; i++) {

                var tr = document.createElement("tr");

                for (var o = 0; o < conteudo[i].length; o++) {

                    var t = document.createElement(thd(i));

                    applyStylesheet(i, o, t, conteudo[i][2]);

                    if (i > 0 && o + 1 == conteudo[i].length) {

                        let btn = document.createElement("button");

                        btn.onmouseover = function () { applyColorOnOver(btn) };
                        btn.onmouseout = function () { removeColorOnOut(btn) };
                        btn.onclick = function () { applyColorOnClick(btn) }

                        btn.appendChild(document.createTextNode(conteudo[i][o]));

                        applyStylesheet(i, o, btn, conteudo[i][2]);

                        t.appendChild(btn);
                    }
                    else {
                        t.appendChild(document.createTextNode(conteudo[i][o]));
                    }

                    tr.appendChild(t);
                }

                (i == 0) ? thead.appendChild(tr) : tbody.appendChild(tr);

            }

            table.appendChild(thead);
            table.appendChild(tbody);

        }
        

        /*
        temporary = []
        let datas = getLocalStorage();
        temporary[0] = ["Nome", "Telefone", "Experiência Prévia", "ações"]

        for (let i = 1; i < datas.length; i++) {
            temporary[i] = datas[i]
        }

        
        for (let index = 0; index < temporary.length; index++) {
            console.log(temporary[index])
        }

        fake = [
            ["Nome", "Telefone", "Experiência Prévia", "ações"],
            ["matheus", "+55 (99) 99999-9999", "sim", "alterar"],
            ["cristian", "+55 (88) 88888-8888", "não", "alterar"],
            ["pedro", "+55 (77) 77777-7777", "sim", "alterar"],
            ["henrique", "+55 (66) 66666-6666", "não", "alterar"],
            ["mariana", "+55 (55) 55555-5555", "não", "alterar"],
            ["angelica", "+55 (44) 44444-4444", "sim", "alterar"],
            ["lidia", "+55 (33) 33333-3333", "não", "alterar"],
            ["priscila", "+55 (22) 22222-2222", "sim", "alterar"],
            ["maria", "+55 (11) 11111-1111", "sim", "alterar"]
        ]

        for (let index = 0; index < fake.length; index++) {
            console.log(fake[index])
        }

        genChildsAndDatas([
                temporary
            ]
        )
        */
       
        genChildsAndDatas([
            ["Nome", "Telefone", "Experiência Prévia", "ações"],
            ["matheus", "+55 (99) 99999-9999", "sim", "alterar"],
            ["cristian", "+55 (88) 88888-8888", "não", "alterar"],
            ["pedro", "+55 (77) 77777-7777", "sim", "alterar"],
            ["henrique", "+55 (66) 66666-6666", "não", "alterar"],
            ["mariana", "+55 (55) 55555-5555", "não", "alterar"],
            ["angelica", "+55 (44) 44444-4444", "sim", "alterar"],
            ["lidia", "+55 (33) 33333-3333", "não", "alterar"],
            ["priscila", "+55 (22) 22222-2222", "sim", "alterar"],
            ["maria", "+55 (11) 11111-1111", "sim", "alterar"]
        ])

    }

})(window, document, undefined);