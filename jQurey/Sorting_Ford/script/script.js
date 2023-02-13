var count = '';
$(document).ready(function() {
    displaydata();
    count = 0;
});
function displaydata() {
    var data = [{
            "brand": "Ford9",
            "dealerName": "Jim snead ford ",
            "streetAddress": "2401 West Man street 5",
            "city": "Waynesboro",
            "state": "VA",
            "zipCode": "22990-1611 "
        },
        {
            "brand": "Ford1",
            "dealerName": "Preston Ford",
            "streetAddress": "4313 preston Road ",
            "city": "Hurlock",
            "state": "MD",
            "zipCode": "21643-3706"
        },
        {
            "brand": "Ford6",
            "dealerName": "Norris Ford",
            "streetAddress": "9010 Merritt Blvd ",
            "city": "Baltimore",
            "state": "MD",
            "zipCode": "21222-1491"
        },
        {
            "brand": "Ford2 ",
            "dealerName": "Tri-Country Ford Inc",
            "streetAddress": "1348 Four Locust Highway",
            "city": "Keysvile",
            "state": "VA",
            "zipCode": "23947-0000"
        },
        {
            "brand": "Ford4",
            "dealerName": "Battlefield Ford ",
            "streetAddress": "8810  Centreville Rd.",
            "city": "Aberdeen",
            "state": "VA",
            "zipCode": "20110-5258"
        }, 
        {
            "brand": "Ford7",
            "dealerName": "Thomassen Ford Inc. ",
            "streetAddress": "1000  South West St",
            "city": "Charles Town",
            "state": "WV",
            "zipCode": "25414-1658"
        },
        {
            "brand": "Ford0",
            "dealerName": "Crouse Ford Sales Inc. ",
            "streetAddress": "8840  Centreville Rd.",
            "city": "Keysville",
            "state": "VA",
            "zipCode": "20110-5258"
        },
        {
            "brand": "Ford3",
            "dealerName": "Battlefield Ford ",
            "streetAddress": "8820  Centreville Rd.",
            "city": "Manassas",
            "state": "VA",
            "zipCode": "20110-5258"
        }
    ];
    for (var i = 0; i < data.length; i++) {
        var row1 = $('<tr><td>' + data[i].brand + '</td><td>' + data[i].dealerName + '</td><td>' +
            data[i].streetAddress + '</td><td>' + data[i].city + '</td><td>' + data[i].state + 
            '</td><td>' + data[i].zipCode + '</td></tr>');
        $('tbody').append(row1);
    }
    // ------------------brand-------------------------------
    $(".up").click(function() {
        function SortBybrand(x, y) {
            return ((x.brand == y.brand) ? 0 : ((x.brand > y.brand) ? 1 : -1));
        }
        data.sort(SortBybrand);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5, .up1,.up2, .up3,.up4,.up5").show();
    })
    count++;
    $(".down").click(function() {
        function SortBybrand(x, y) {
            return ((x.brand == y.brand) ? 0 : ((x.brand < y.brand) ? 1 : -1));
        }
        data.sort(SortBybrand);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state +
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down1,.down2,.down3,.down4,.down5,.up,.up1,.up2, .up3,.up4,.up5").show();
        $(".down").hide();
        count++;
    })
    // --------------------------------Dealername--------------------------------------
    $(".up1").click(function() {
        function SortBydealerName(x, y) {
            return ((x.dealerName == y.dealerName) ? 0 : ((x.dealerName > y.dealerName) ? 1 : -1));
        }
        data.sort(SortBydealerName);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up1").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5, .up,.up2, .up3,.up4,.up5").show();
    })
    count++;
    $(".down1").click(function() {
        function SortBydealerName(x, y) {
            return ((x.dealerName == y.dealerName) ? 0 : ((x.dealerName < y.dealerName) ? 1 : -1));
        }
        data.sort(SortBydealerName);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down,.down2,.down3,.down4,.down5, .up,.up1,.up2, .up3,.up4,.up5").show();
        $(".down1").hide();
        count++;
    })
    // ----------------------------------------------StreetAddress-------------------------------
    $(".up2").click(function() {
        function SortBystreetAddress(x, y) {
            return ((x.streetAddress == y.streetAddress) ? 0 : ((x.streetAddress > y.streetAddress) ? 1 : -1));
        }
        data.sort(SortBystreetAddress);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up2").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5,.up,.up1, .up3,.up4,.up5").show();
    })
    count++;
    $(".down2").click(function() {
        function SortBystreetAddress(x, y) {
            return ((x.streetAddress == y.streetAddress) ? 0 : ((x.streetAddress < y.streetAddress) ? 1 : -1));
        }
        data.sort(SortBystreetAddress);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down, .down1,.down3,.down4,.down5,.up,.up1,.up2, .up3,.up4,.up5").show();
        $(".down2").hide();
        count++;
    })
    // --------------------------------------------city----------------------------------
    $(".up3").click(function() {
        function SortBycity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city > y.city) ? 1 : -1));
        }
        data.sort(SortBycity);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' 
            + data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
            '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up3").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5,.up, .up1,.up2,.up4,.up5").show();
    })
    count++;
    $(".down3").click(function() {
        function SortBycity(x, y) {
            return ((x.city == y.city) ? 0 : ((x.city < y.city) ? 1 : -1));
        }
        data.sort(SortBycity);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down, .down1,.down2,.down4,.down5,.up,.up1,.up2, .up3,.up4,.up5").show();
        $(".down3").hide();
        count++;
    })
    // ----------------------------------------------city---------------------------------------
    $(".up4").click(function() {
        function SortBystate(x, y) {
            return ((x.state == y.state) ? 0 : ((x.state > y.state) ? 1 : -1));
        }
        data.sort(SortBystate);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up4").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5,.up, .up1,.up2, .up3,.up5").show();
    })
    count++;
    $(".down4").click(function() {
        function SortBystate(x, y) {
            return ((x.state == y.state) ? 0 : ((x.state < y.state) ? 1 : -1));
        }
        data.sort(SortBystate);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state +
                 '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down, .down1,.down2,.down3,.down5,.up,.up1,.up2, .up3,.up4,.up5").show();
        $(".down4").hide();
        count++;
    })
    // ------------------------------------------------------ZipCode-----------------------------------------------
    $(".up5").click(function() {
        function SortByzipCode(x, y) {
            return ((x.zipCode == y.zipCode) ? 0 : ((x.zipCode > y.zipCode) ? 1 : -1));
        }
        data.sort(SortByzipCode);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".up5").hide();
        $(".down, .down1,.down2,.down3,.down4,.down5,.up, .up1,.up2, .up3,.up4,").show();
    })
    count++;
    $(".down5").click(function() {
        function SortByzipCode(x, y) {
            return ((x.zipCode == y.zipCode) ? 0 : ((x.zipCode < y.zipCode) ? 1 : -1));
        }
        data.sort(SortByzipCode);
        $('tbody').html('');
        for (var n = 0; n < data.length; n++) {
            var row = $('<tr><td>' + data[n].brand + '</td><td>' + data[n].dealerName + '</td><td>' +
                data[n].streetAddress + '</td><td>' + data[n].city + '</td><td>' + data[n].state + 
                '</td><td>' + data[n].zipCode + '</td></tr>');
            $('tbody').append(row);
        }
        $(".down, .down1, .down2, .down3, .down4, .up, .up1, .up2, .up3,.up4,.up5").show();
        $(".down5").hide();
        count++;
    })
}