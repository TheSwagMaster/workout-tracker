# Baseline de reprise — Workout Tracker

> État des lieux établi à partir du dépôt public `TheSwagMaster/workout-tracker`, branche `main`, consulté le 22 novembre 2026. À reconfirmer sur le clone local avant toute action.

## Faits observés
- Le dépôt contient une application statique centrée sur `index.html` (environ 56 Ko / 403 lignes affichées par GitHub), avec CSS intégré et un script JavaScript `type="module"`.
- Les modules Firebase Web SDK sont chargés depuis `gstatic` (version 10.12.2 dans le fichier consulté).
- Firebase Authentication est utilisé pour la connexion par email/mot de passe.
- Cloud Firestore est initialisé avec une persistance locale (`persistentLocalCache`).
- Les collections de premier niveau visibles dans le code sont `exercises`, `programs`, `workouts`, `exercise_logs` et `user_settings`, avec notamment le document `user_settings/main`.
- L'application enregistre une URL `aiUrl` dans `user_settings/main` et adresse des requêtes POST à cette URL. Les requêtes visibles transmettent un Firebase ID token comme Bearer token. Des modes `tips` et `usage` sont visibles, ainsi qu'une requête du coach avec contexte et derniers messages.
- Le service worker `sw.js` met en cache le shell statique de la PWA et certaines ressources `gstatic`.
- Le dépôt comprend un manifeste PWA et des icônes.
- Le README observé ne contient qu'un titre. Aucun `package.json`, règle Firestore, code Cloudflare Worker ou workflow GitHub Actions n'était visible dans l'arborescence consultée.

## Inconnues à ne pas inventer
- Les règles Firestore réellement déployées et la séparation éventuelle des données par utilisateur.
- La configuration exacte de GitHub Pages (source, domaine et options).
- Le code, les secrets, la validation Firebase ID token, les quotas et le modèle Gemini du Worker Cloudflare.
- Les paramètres Firebase Authentication (domaines autorisés, fournisseurs activés) et les sauvegardes de production.
- L'état réel de l'application déployée et la présence d'éventuelles modifications locales non poussées.

## Vérifications préalables
1. Cloner le dépôt et contrôler `git status`.
2. Créer une branche de travail distincte de `main`.
3. Exporter les données depuis l'application et sauvegarder le dépôt avant toute évolution sensible.
4. Consulter les règles Firestore dans Firebase Console ou leur dépôt source.
5. Identifier le dépôt du Worker Cloudflare et vérifier qu'aucun secret n'est commité. Ne jamais copier la clé Gemini dans le frontend.
6. Confirmer dans GitHub Settings > Pages comment le site est publié avant de modifier les fichiers de déploiement.

## Règle de non-régression
Le premier travail de l'agence est un audit en lecture seule. Pas de migration de framework, de schéma Firestore, d'hébergement ou de Worker sans demande et validation explicites.
