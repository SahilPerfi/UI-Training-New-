
$(document).ready(function(){
var data = [
    {
        "ID": "001",
        "BRAND" : "Ford",
        "DEALERNAME" : "Jim Snead Ford",
        "STREETADDRESS" : "2401,West Man Street",
        "CITY" : "Waynesboro ",
        "STATE" : "VA ",
        "ZIPCODE" : "22980-1611 "
    },
 
    {
        "ID": "002",
        "BRAND" : " Ford",
        "DEALERNAME" : "Preston Ford",
        "STREETADDRESS" : "4313 Preston Road",
        "CITY" : "MD",
        "STATE" : "Hurlock",
        "ZIPCODE" : "21643-3706" 
    },
    {
        "ID": "003",
        "BRAND" : "Ford",
        "DEALERNAME" : "Norris Ford",
        "STREETADDRESS" : " 901 Merritt Blvd",
        "CITY" : " Baltimore",
        "STATE" : " MD ",
        "ZIPCODE" : " 21222-1491 "
    },
 
    {
        "ID": "004",
        "BRAND" : " Ford",
        "DEALERNAME" : "Tri-County Ford Inc.",
        "STREETADDRESS" : " 1348 Four LOcust Highway",
        "CITY" : "Keysville ",
        "STATE" : "VA ",
        "ZIPCODE" : "23947 " 
    },
    {
        "ID": "005",
        "BRAND" : " Ford",
        "DEALERNAME" : " Battlefield Ford",
        "STREETADDRESS" : " 8820 Centreville Rd ",
        "CITY" : "Manassas ",
        "STATE" : "VA ",
        "ZIPCODE" : " 20110-5258 "
    },
 
    {
        "ID": "006",
        "BRAND" : " Ford",
        "DEALERNAME" : " Thomassen Ford Inc.",
        "STREETADDRESS" : "100 South west St ",
        "CITY" : "Charles Town ",
        "STATE" : "WV",
        "ZIPCODE" : "25414-1658 " 
    },
    {
        "ID": "007",
        "BRAND" : " Ford",
        "DEALERNAME" : "Crouse Ford Sales Inc.",
        "STREETADDRESS" : "11 Antrim Boulevard ",
        "CITY" : "Taneytown ",
        "STATE" : "MD ",
        "ZIPCODE" : "21787-2209 "
    },
 
    {
        "ID": "008",
        "BRAND" : " Ford",
        "DEALERNAME" : " Jeff Balzers New Prague Ford",
        "STREETADDRESS" : "1181 280th street west ",
        "CITY" : "New Prague ",
        "STATE" : "MN ",
        "ZIPCODE" : "56071-4707 " 
    },
    {
        "ID": "009",
        "BRAND" : " Ford",
        "DEALERNAME" : " Hinder Ford Inc.",
        "STREETADDRESS" : " 505 S Philadelphis hlvd",
        "CITY" : " Aberdeen",
        "STATE" : "MD ",
        "ZIPCODE" : "21787-2209 "
    },
 
    {
        "ID": "010",
        "BRAND" : " Ford",
        "DEALERNAME" : " Jerry's Leedberg Ford",
        "STREETADDRESS" : " 847 East Market",
        "CITY" : "Leesburg ",
        "STATE" : "VA ",
        "ZIPCODE" : "20176-4404 " 
    }  
      ]

      $(".up").click(function(){
        $(".up").hide();
        $(".down").show();
      });
      
      $(".down").click(function(){
        $(".down").hide();
        $(".up").show();
      });

      for (var i = 0; i < data.length; i++) {
        var row = $('<tr><td>' + data[i].BRAND + '</td><td>' + data[i].DEALERNAME + '</td><td>' + data[i].STREETADDRESS +'</td><td>' + data[i].CITY+ '</td><td>' + data[i].STATE + '</td><td>' + data[i].ZIPCODE+'</td></tr>');
        $('#table').append(row);

    }

    $('.up,.down').click(function(){
        var table = $(this).parents('table').eq(0)
        var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc){rows = rows.reverse()}
        for (var i = 0; i < rows.length; i++){table.append(rows[i])}
    })
    function comparer(index) {
        return function(a, b) {
            var valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() }

})