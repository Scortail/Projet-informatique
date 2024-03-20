document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', displayParagraphs);
});

function displayParagraphs() {
    var textInput = document.getElementById("textInput").value;
    var paragraphContainer = document.getElementById("paragraphContainer");
    
    // Supprimer les paragraphes précédents
    paragraphContainer.innerHTML = '';
    
    // Découper le texte en paragraphes
    var paragraphs = textInput.split(/\n\s*\n/);
    
    // Afficher les paragraphes
    paragraphs.forEach(function(paragraphText) {
        var paragraph = document.createElement("div");
        paragraph.classList.add("paragraph");
        paragraph.textContent = paragraphText;
        paragraphContainer.appendChild(paragraph);
    });
}
