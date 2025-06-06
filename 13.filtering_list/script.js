function onSearch() {
    var input = document.getElementById("inp");
    var filter = input.value.toUpperCase();
    var list = document.getElementById("statelist").getElementsByTagName("li");

    Array.from(list).forEach(function(el) {
        var text = el.textContent || el.innerText;
        el.style.display = text.toUpperCase().includes(filter) ? "" : "none";
    });
}