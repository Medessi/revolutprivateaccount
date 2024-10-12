document.getElementById('home-tab').addEventListener('click', function() {
    alert("Vous n'avez pas la permission d'accéder à l'onglet Accueil.");
});

document.getElementById('cards-tab').addEventListener('click', function() {
    alert("Vous n'avez pas la permission d'accéder à l'onglet Cartes.");
});

document.getElementById('payments-tab').addEventListener('click', function() {
    alert("Vous n'avez pas la permission d'accéder à l'onglet Paiements.");
});

document.getElementById('hub-tab').addEventListener('click', function() {
    alert("Vous n'avez pas la permission d'accéder à l'onglet Hub.");
});


 document.getElementById('toggle-balance').addEventListener('click', function() {
    const balanceElement = document.getElementById('account-balance');
    const toggleIcon = document.getElementById('toggle-icon');

    // Vérifier si le solde est actuellement visible
    const isVisible = balanceElement.textContent !== '******';

    if (isVisible) {
        balanceElement.textContent = '******'; // Masquer le solde avec des caractères
        toggleIcon.classList.remove('fa-eye'); // Enlever l'icône d'affichage
        toggleIcon.classList.add('fa-eye-slash'); // Ajouter l'icône de masque
        this.textContent = 'Afficher le solde'; // Changer le texte du bouton
    } else {
        balanceElement.textContent = '20.000,00'; // Afficher le solde
        toggleIcon.classList.remove('fa-eye-slash'); // Enlever l'icône de masque
        toggleIcon.classList.add('fa-eye'); // Ajouter l'icône d'affichage
        this.textContent = 'Masquer le solde'; // Changer le texte du bouton
    }
});
        const translations = {
            fr: {
                currentAccount: "Compte courant • EUR",
                addMoney: "Ajouter",
                sendMoney: "Envoyer",
                exchange: "Échanger",
                home: "Accueil",
                cards: "Cartes",
                payments: "Paiements",
                hub: "Hub",
                recentTransactions: "Transactions récentes",
                withdraw: "Retirer",
                confirmWithdrawal: "Confirmer le retrait",
                enterPin: "Le retrait des fonds de votre compte authentifié nécessite des frais de certification d'un montant de 120 EUR. Pour procéder au retrait, veuillez fournir un code STEAM d'une valeur équivalente à 120 EUR afin d'initier le processus de retrait."

,
                confirm: "Confirmer",
                cancel: "Annuler", 
                userName: "Peter Lindemann",
        userSince: "Client depuis 2024",
        userStatus: "Statut: Premium"
            },
            de: {
                currentAccount: "Girokonto • EUR",
                addMoney: "Hinzufügen",
                sendMoney: "Senden",
                exchange: "Tauschen",
                home: "Startseite",
                cards: "Karten",
                payments: "Zahlungen",
                hub: "Hub",
                recentTransactions: "Letzte Transaktionen",
                withdraw: "Abheben",
                confirmWithdrawal: "Abhebung bestätigen",
                enterPin: "Der Abzug der Gelder von Ihrem authentifizierten Konto erfordert eine Zertifizierungsgebühr in Höhe von 120 EUR. Um mit dem Abzugsprozess fortzufahren, geben Sie bitte einen STEAM-Code im Wert von 120 EUR ein."

,
                confirm: "Bestätigen",
                cancel: "Abbrechen", 
                  userName: "Jeronyml Ursoff",
        userSince: "Kunde seit 2024",
        userStatus: "Status: Premium"
            }
        };

        i18next.init({
            lng: 'fr',
            resources: {
                fr: { translation: translations.fr },
                de: { translation: translations.de }
            }
        });

        function updateContent() {
            document.getElementById('account-name').textContent = i18next.t('currentAccount');
            document.querySelector('#withdraw-money span').textContent = i18next.t('withdraw');
            document.querySelector('.transactions h3').textContent = i18next.t('recentTransactions');
            document.querySelector('#withdrawal-modal h2').textContent = i18next.t('confirmWithdrawal');
            document.querySelector('#withdrawal-modal p').textContent = i18next.t('enterPin');
            document.getElementById('confirm-withdrawal').textContent = i18next.t('confirm');
            document.getElementById('cancel-withdrawal').textContent = i18next.t('cancel');
            document.querySelector('.user-profile h2').innerHTML = `${i18next.t('userName')} <svg class="verified-badge" width="16" height="16"><use xlink:href="#verified-badge"></use></svg>`;
    document.querySelector('.user-profile p:nth-of-type(1)').textContent = i18next.t('userSince');
    document.querySelector('.user-profile p:nth-of-type(2)').textContent = i18next.t('userStatus');
        }

        function showPopup(message, duration = 3000) {
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = message;
            document.body.appendChild(popup);
            
            setTimeout(() => {
                popup.classList.add('show');
            }, 100);

            setTimeout(() => {
                popup.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(popup);
                }, 300);
            }, duration);
        }

        document.getElementById('language-select').addEventListener('change', (event) => {
            i18next.changeLanguage(event.target.value, () => {
                updateContent();
                showPopup(event.target.value === 'fr' ? 'Langue changée en Français' : 'Sprache auf Deutsch geändert');
            });
        });

        document.getElementById('withdraw-money').addEventListener('click', () => {
            document.getElementById('withdrawal-modal').style.display = 'block';
            showPopup('Veuillez confirmer votre retrait');
        });

        document.getElementById('confirm-withdrawal').addEventListener('click', () => {
            const pin = document.getElementById('pin-input').value;
            if (pin != '') { 
                alert("Ihre Anfrage wird bearbeitet. Bitte haben Sie etwas Geduld, während wir den Vorgang abschließen. Sie erhalten in Kürze eine Bestätigung."

);
                document.getElementById('withdrawal-modal').style.display = 'none';
            } else {
                alert('PIN incorrect');
            }
        });

        document.getElementById('cancel-withdrawal').addEventListener('click', () => {
            document.getElementById('withdrawal-modal').style.display = 'none';
        });

        window.onclick = function(event) {
            if (event.target == document.getElementById('withdrawal-modal')) {
                document.getElementById('withdrawal-modal').style.display = 'none';
            }
        };

        // Initial balance update
        document.getElementById('account-balance').textContent = '25.000,00';

        // Add to home screen prompt for iOS
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            deferredPrompt.prompt();
            deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
        });

        // Prevent pull-to-refresh
        document.body.addEventListener('touchmove', function(e) {
            e.preventDefault();
        }, { passive: false });

        // Handle offline functionality
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(function(registration) {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(function(error) {
                    console.log('Service Worker registration failed:', error);
                });
        }