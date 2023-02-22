let fetchRes = fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
fetchRes.then(res => res.json()).then(data => {
    for (let i = 0; i < data.data.length; i++) {
    var element = document.createElement('div')
    element.className = "column";
    element.innerHTML = 
    `<div class="Card">
        <div class="detail">Id :`+ data.data[i]['ID Nation'] + `</div>
        <div class="detail">Nation :`+ data.data[i]['Nation'] + `</div>
        <div class="detail">ID Year : `+ data.data[i]['ID Year'] + `</div>
        <div class="detail">Population : `+ data.data[i]['Population'] + `</div>
        <div class="detail">Year : `+ data.data[i]['Year'] + `</div>
    </div>`
    document.getElementsByClassName("appendData")[0].appendChild(element)
    }
});
