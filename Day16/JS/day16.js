document.addEventListener('contextmenu', event => event.preventDefault());
var t = document.getElementById("table1");


var trs = t.getElementsByTagName("tr");
var tds = null;

for (var i=0; i<trs.length; i++)
{
    tds = trs[i].getElementsByTagName("td");
    for (var n=0; n<tds.length;n++)
    {
        tds[n].onclick=function() { alert(this.innerHTML+"seat is selected for book "); }
    }
}
var t = document.getElementById("table2");


var trs = t.getElementsByTagName("tr");
var tds = null;

for (var i=0; i<trs.length; i++)
{
    tds = trs[i].getElementsByTagName("td");
    for (var n=0; n<tds.length;n++)
    {
        tds[n].onclick=function() { alert(this.innerHTML+"seat is selected for book "); }
    }
}    
