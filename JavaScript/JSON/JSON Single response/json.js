let fetchRes= fetch('https://dummyjson.com/products/1');
fetchRes.then(res =>
res.json()).then(data => {
    document.getElementsByClassName("appendData")[0].innerHTML = 
    `<div class="Card">
        <div class="detail">ID :`+data.id+`</div>
        <div class="detail">Title :`+data.title+`</div>
        <div class="detail">Description : `+data.description+`</div>
        <div class="detail">Category : `+data.category+`</div>
        <div class="detail">Price : `+data.price+`</div>
    </div>`;
});
