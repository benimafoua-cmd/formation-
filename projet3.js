document.addEventListener('DOMContentLoaded', () => {
    
    /* --- ANIMATION DES FILIÈRES --- */
    // Active l'animation d'affichage pour toutes les cartes de filières
    const cards = document.querySelectorAll('.filiere-card');
    cards.forEach(card => {
        card.classList.add('animate-in');
    });

    /* --- SIMULATION DU FORMULAIRE DE CONTACT --- */
    const form = document.getElementById('trainingForm');
    const notification = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        // Bloque le rechargement automatique de la page
        e.preventDefault(); 

        // Récupération des valeurs entrées par l'utilisateur
        const name = document.getElementById('fullname').value;
        const filiere = document.getElementById('filiereSelect').value;

        // Configuration et affichage du message de succès personnalisé
        notification.innerHTML = `✨ Merci <strong>${name}</strong> ! Votre demande d'inscription pour la filière <strong>${filiere}</strong> a bien été simulée avec succès. Notre équipe vous répondra sous 24h.`;
        notification.style.display = 'block';

        // Remise à zéro des champs du formulaire
        form.reset();

        // Fermeture automatique de l'alerte après 6 secondes
        setTimeout(() => {
            notification.style.display = 'none';
        }, 6000);
    });
});