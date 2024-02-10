let form = document.forms['Forma'];
let menu = form.konkurencija;
let tableBody = document.querySelector('table tbody');

form.onchange = function a() {
    let optionValue = menu.value;


    tableBody.innerHTML = "";

    if (optionValue === "Muski") {
         addTableRow(1,"Arsic Niksa","26.09.2004","14321","3","1140","1140");
         addTableRow(2,"Novakovic Novak","10.02.2001","5093","2","800","800");
         addTableRow(3,"Belosevic Petar","20.08.2003","15877","4","590","730");
         addTableRow(4,"Jovanovic Nikola","10.05.2004","14368","7","630","711");
         addTableRow(5,"Radovanovic Tadija","26.04.2000","14394","2","490","490");
         addTableRow(6,"Licina Luka","24.07.2004","17132","9","280","455");
         addTableRow(7,"Zekic Miljan","12.07.1988","1044","1","450","450");
         addTableRow(8,"Komnenic Andrej","21.01.2005","14245","6","360","445");
         addTableRow(9,"Pavlovic Ognjen","12.04.2002","9767","4","400","425");
         addTableRow(10,"Jevtovic Oliver","25.03.2000","18800","6","160","411");
         addTableRow(11,"Petrov Vanja","11.09.2004","12864","3","400","400");
         addTableRow(12,"Ljubojevic Aleksandar","01.08.2002","10989","4","350","395");
         addTableRow(13,"Smiljanic Aleksa","12.11.2005","13928","6","200","366");
         addTableRow(14,"Juhas Kristijan","04.06.2001","7313","1","350","360");
         addTableRow(15,"Jovovic Nikola","22.12.2006","13859","1","350","350");
        
    } else if (optionValue === "Zenski") {
        addTableRow(1,"Arsic Anastasija","04.08.2006","16512","4","900","1040");
        addTableRow(2,"Mihaljevic Tara","14.07.2006","13993","2","700","700");
        addTableRow(3,"Maksimovic Simona","19.07.2000","8068","5","540","540");
        addTableRow(4,"Stanisic Lana","22.07.2004","12654","2","470","470");
        addTableRow(5,"Vasic Lea","25.05.2006","14704","3","390","470");
        addTableRow(6,"Popovski Milica","10.01.2006","15903","1","450","450");
        addTableRow(7,"Petkovic Lana","03.08.2007","18017","1","450","450");
        addTableRow(8,"Markovic Andjelija","17.03.2006","13608","3","360","420");
        addTableRow(9,"Stojanovic Leonita","28.05.2005","16210","7","360","417");
        addTableRow(10,"Luzajic Natasa","23.03.1998","7200","6","380","381");
        addTableRow(11,"Prokic Milica","12.09.2004","14489","6","240","370");
        addTableRow(12,"Jankovic Iva","04.04.2006","16707","2","350","350");
        addTableRow(13,"Djurasic Marija","21.06.2003","13096","7","220","341");
        addTableRow(14,"Miscevic Maja","21.06.2005","15179","2","320","320");
        addTableRow(15,"Antonic Milica","18.05.2005","17925","2","300","290");
    }

};

function addTableRow(rang,igrac, datRodj, id, ukt, ukp, rlp) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    cell1.textContent = rang;
    cell2.textContent = igrac;
    cell3.textContent = datRodj;
    cell4.textContent = id;
    cell5.textContent = ukt;
    cell6.textContent = ukp;
    cell7.textContent = rlp;
}
