document.addEventListener('DOMContentLoaded', function () {    
    window.Ecwid.OnPageLoaded.add(function (page) {
        function execute(params) {
            var section = document.getElementById("section-guia-talla");
            var button = document.createElement("button");
            var buttonText = document.createTextNode("Presiona aquí");            

            button.appendChild(buttonText);

            button.style.padding = '10px 20px';
            button.style.fontSize = '16px';
            button.style.backgroundColor = '#4CAF50';
            button.style.color = 'white';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            button.style.margin = '10px';

            button.onclick = function () {
                alert("aca estoy");
            };

            section.appendChild(button);
            console.log(params);
        }
        execute(page);        
    });
});