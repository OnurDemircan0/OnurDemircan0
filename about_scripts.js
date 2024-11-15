function showMore() {
    document.getElementById('fullText').style.display = 'block';
    document.getElementById('moreLink').style.display = 'none';
    document.getElementById('lessLink').style.display = 'block';
}

function showLess() {
    document.getElementById('fullText').style.display = 'none';
    document.getElementById('lessLink').style.display = 'none';
    document.getElementById('moreLink').style.display = 'block';
}
