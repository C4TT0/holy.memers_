document.getElementById('open').addEventListener('click', () => {
    document.getElementById('content').style.right = '0';
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('content').style.right = '-400px';
})

document.querySelectorAll('.content ul li a').forEach((e) => {
    e.addEventListener('click', () => {
        document.getElementById('content').style.right = '-400px';
    })
})