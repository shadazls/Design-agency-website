document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, ''); // Remplace tous les caractères non numériques par une chaîne vide
});