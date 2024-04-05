window.addEventListener('scroll', function() {
    var webDesignProject = document.getElementById('web-design-projects');
    var appDesignProject = document.getElementById('app-design-projects');
    var graphicDesignProject = document.getElementById('graphic-design-projects');
    var windowHeight = window.innerHeight;

    // Fonction pour vérifier si un élément est visible dans la fenêtre
    function checkVisibility(element, animation, delay) {
        var position = element.getBoundingClientRect();
        // Vérifier si l'élément est visible dans la fenêtre
        if (position.bottom >= 0) {
            // Ajouter la classe d'animation et le délai lorsque l'élément est visible
            element.classList.add('animate__animated', animation, 'opacity-0');
            element.style.animationDelay = delay;
            element.classList.remove('opacity-0');
        }
    }

    // Appliquer les animations aux projets individuels
    checkVisibility(webDesignProject, 'animate__fadeInLeft', '0.5s');
    checkVisibility(appDesignProject, 'animate__fadeInRight', '0.7s');
    checkVisibility(graphicDesignProject, 'animate__fadeInRight', '0.9s');
});
