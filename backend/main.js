document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('/api')
        .then(response => response.text())
        .then(data => {
            document.getElementById('data').innerText = data;
        });
        
});
