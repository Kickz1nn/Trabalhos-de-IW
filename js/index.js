function Calcular() {
    nome = document.getElementById("nome").value;
    horas = document.getElementById("h/a").value;
    aulas = document.getElementById("hr").value;
    total = parseInt(aulas)*parseInt(horas);

    altxt = document.getElementById("txtalt").value = nome + ", você tem " + total + " Horas de aula";
    
}
