# Instructions du projet — Workout Tracker

## Contexte confirmé dans le dépôt
- Application web statique/PWA servie comme fichiers, sans framework de build visible.
- L'interface et la logique sont principalement dans `index.html` (JavaScript module et CSS intégrés).
- `manifest.webmanifest` et `sw.js` portent le comportement PWA/offline.
- Le client utilise Firebase Authentication et Cloud Firestore via le SDK Web chargé depuis `gstatic`.
- Le client enregistre une URL de Cloudflare Worker dans `user_settings/main.aiUrl`. Les appels au Worker transmettent un Firebase ID token dans `Authorization: Bearer ...`.
- Le Worker Gemini n'est pas présent dans ce dépôt public tel qu'inspecté.

## Règles impératives
1. **Ne migre pas** vers React, Next.js, Vite, TypeScript, Supabase ou une autre plateforme sans demande explicite.
2. Préserve GitHub Pages comme hébergement du frontend et Cloudflare Worker comme service IA existant. Ne remplace pas ces services par Vercel ou un autre fournisseur.
3. Préserve la PWA : `manifest.webmanifest`, icônes et `sw.js`. Si les fichiers du shell PWA changent, vérifie la stratégie de cache et propose un bump du nom de cache `wt-v1`.
4. Préserve les collections Firestore actuellement utilisées : `exercises`, `programs`, `workouts`, `exercise_logs`, `user_settings` et le document `user_settings/main`, sauf décision explicite avec plan de migration et sauvegarde.
5. Ne lance jamais la fonction de seed, d'import, de suppression ou de modification de données contre le projet Firebase de production pour tester. Utilise une sauvegarde, un projet de test ou Firebase Emulator Suite.
6. Avant de toucher au modèle de données, demande à consulter les règles Firestore réelles. Elles ne sont pas présentes dans ce dépôt. Le code client seul ne permet pas de conclure sur les droits réels.
7. La clé `apiKey` de la configuration Firebase Web est un identifiant client public. Ne la traite pas comme une clé serveur et ne la copie pas dans des secrets. En revanche, ne place jamais une clé Gemini, une clé de service Firebase ou un secret Cloudflare dans `index.html`, Git ou les prompts.
8. Le Worker Cloudflare est externe à ce dépôt. Ne prétends pas l'avoir audité ni modifié. Demande son dépôt ou son code expurgé si une intervention côté Worker est nécessaire.
9. Respecte le contrat d'API frontend/Worker : méthode POST, Firebase ID token en Bearer, modes existants (`tips`, `usage`) et requêtes de coach. Toute modification doit être compatible ou accompagnée d'une migration coordonnée.
10. Fais des changements minimaux et ciblés. N'ajoute aucune dépendance npm ni chaîne de build sans justification et accord.
11. Ne publie jamais, ne pousse jamais vers `main` et ne déploie jamais sans validation explicite de l'utilisateur. Travaille sur une branche dédiée.
12. N'écrase jamais les modifications non commitées de l'utilisateur. Commence par `git status` et résume les changements existants.
13. Les données d'entraînement et l'historique sont précieux : recommande un export JSON depuis l'application avant tout changement touchant Firestore.
14. Tout conseil généré par IA sur l'exercice ou la technique doit rester présenté comme indicatif et être vérifié par l'utilisateur.

## Procédure par défaut
- Commencer en lecture seule : cartographier le code, les écrans, les données, les appels Firebase/Worker et le déploiement actuel.
- Écrire un rapport d'audit avant de modifier du code.
- Proposer un plan court et demander l'accord avant les changements.
- Après accord : modifier sur une branche, comparer le diff, exécuter les contrôles possibles et fournir les limites des tests.
- Déploiement manuel après accord explicite uniquement.
