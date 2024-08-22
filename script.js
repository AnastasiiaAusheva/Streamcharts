
    alert("Я змогла розв'язати цю задачу, ура!");


function showModal() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('modalContent').style.display = 'block';
    document.body.classList.add('modal-open');
}


window.onload = showModal;


document.getElementById('closeBtn').onclick = function() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('modalContent').style.display = 'none';
    document.body.classList.remove('modal-open');
};
