// Selectionner de la balise qui a la classe hidden
const $section = document.querySelector('.hidden')
// Selectionner de la balise qui a l'ID show-link
const $linkshow = document.querySelector('#show-link')
// Ajout d'un écouteur d'évènement'click' sur le lien sélectionné
$linkshow.addEventListener('click', event => {
    // neutralisation du comportement par défaut de cet évènement (refresh page)
    event.preventDefault();
    // ajout/retrait de la classe "hidden" sur la section
    $section.classList.toggle("hidden");
})