document.addEventListener('DOMContentLoaded', function () {
    console.log('Ya estamos cambiando.....');
    window.Ecwid.OnPageLoaded.add(function (page) {        
        function execute(params) {             
            var section = document.getElementById("section-guia-talla");                
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
