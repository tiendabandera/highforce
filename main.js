document.addEventListener('DOMContentLoaded', function () {
    console.log('Proximamente.....');
    window.Ecwid.OnPageLoaded.add(function (page) {        
        function execute(params) {             
            var section = document.getElementById("section-guia-talla");
            var paragraph = document.createElement("p");
            var textNode = document.createTextNode("Yo estoy aquí");
            
            paragraph.appendChild(textNode);                   
            section.appendChild(paragraph);
            
            var button = document.createElement("button");                    
            var buttonText = document.createTextNode("Presiona aquí");
           
            button.appendChild(buttonText);
            
            button.onclick = function () {
                alert("aca estoy");
            };
            
            section.appendChild(button);
        }
        execute();
    });
});
