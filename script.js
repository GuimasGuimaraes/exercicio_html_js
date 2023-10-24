function validarFormulario() {
            let campoA = document.getElementById("campoA").value;
            let campoB = document.getElementById("campoB").value;

            
            campoA = parseFloat(campoA);
            campoB = parseFloat(campoB);

            if (campoB > campoA) {
            
                document.getElementById("mensagem").textContent = "Formulário válido. B é maior que A.";
            } else {
            
                document.getElementById("mensagem").textContent = "Formulário inválido. B deve ser maior que A.";
            }
        }