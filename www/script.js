
var bgColors = new Array("black", "#583030", "red", "rgb(255, 115, 0)", "yellow", "green", "blue", "purple", "gray", "white", "goldenrod", "silver");
    
function changeLabel1(select) {
    document.getElementById('field-label1').style.backgroundColor = bgColors[select.value];
    digt1 = document.getElementsByTagName('select')[0].value;
    digt2 = document.getElementsByTagName('select')[1].value;
    mult = document.getElementsByTagName('select')[2].value;
    tol = document.getElementsByTagName('select')[3].value;
    resistText = digt1 + digt2;
    for (var i=0; i<mult; i++) {
        resistText += "0";
    }
    resistText = addFormat(resistText);
    resistText += " \u2126 \u00B1";
    if (tol == "10")
        resistText += "5%";
    else if (tol == "11")
        resistText += "10%";
    document.getElementById("resistorValue").innerHTML=resistText;
}

function changeLabel2(select) {
    document.getElementById('field-label2').style.backgroundColor = bgColors[select.value];
    digt1 = document.getElementsByTagName('select')[0].value;
    digt2 = document.getElementsByTagName('select')[1].value;
    mult = document.getElementsByTagName('select')[2].value;
    tol = document.getElementsByTagName('select')[3].value;
    resistText = digt1 + digt2;
    for (var i=0; i<mult; i++) {
        resistText += "0";
    }
    resistText = addFormat(resistText);
    resistText += " \u2126 \u00B1";
    if (tol == "10")
        resistText += "5%";
    else if (tol == "11")
        resistText += "10%";
    document.getElementById("resistorValue").innerHTML=resistText;
}

function changeLabel3(select) {
    document.getElementById('field-label3').style.backgroundColor = bgColors[select.value];
    digt1 = document.getElementsByTagName('select')[0].value;
    digt2 = document.getElementsByTagName('select')[1].value;
    mult = document.getElementsByTagName('select')[2].value;
    tol = document.getElementsByTagName('select')[3].value;
    resistText = digt1 + digt2;
    for (var i=0; i<mult; i++) {
        resistText += "0";
    }
    resistText = addFormat(resistText);
    resistText += " \u2126 \u00B1";
    if (tol == "10")
        resistText += "5%";
    else if (tol == "11")
        resistText += "10%";
    document.getElementById("resistorValue").innerHTML=resistText;
}

function changeLabel4(select) {
    document.getElementById('field-label4').style.backgroundColor = bgColors[select.value];
    digt1 = document.getElementsByTagName('select')[0].value;
    digt2 = document.getElementsByTagName('select')[1].value;
    mult = document.getElementsByTagName('select')[2].value;
    tol = document.getElementsByTagName('select')[3].value;
    resistText = digt1 + digt2;
    for (var i=0; i<mult; i++) {
        resistText += "0";
    }
    resistText = addFormat(resistText);
    resistText += " \u2126 \u00B1";
    if (tol == "10")
        resistText += "5%";
    else if (tol == "11")
        resistText += "10%";
    document.getElementById("resistorValue").innerHTML=resistText;
}

function addFormat(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}