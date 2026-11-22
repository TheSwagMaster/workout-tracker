# Kit OpenCode — reprise du Workout Tracker

Ce kit ajoute des instructions et cinq profils d'agents au dépôt existant. Il ne modifie pas le code de l'application et n'ajoute aucune étape de déploiement.

## Installation sûre
1. Clone le dépôt GitHub dans `~/Projects/workout-tracker` avec GitHub Desktop ou `git clone`.
2. Dans le clone, vérifie l'état local : `git status --short --branch`.
3. Crée une branche de travail, par exemple `agent/audit-reprise`.
4. Décompresse ce kit et copie son contenu à la racine du clone. Si un `AGENTS.md`, un `opencode.jsonc` ou un dossier `.opencode` existe déjà, fusionne manuellement au lieu d'écraser.
5. Dans le Terminal, place-toi dans le clone puis lance `ollama launch opencode --model qwen3.5:9b` (ou `opencode` si ton modèle est déjà configuré).
6. Vérifie le modèle utilisé avec `/models` et l'agent par défaut `orchestrateur`.

## Premier prompt (audit sans modification)

```text
Nous reprenons ce dépôt existant. Commence uniquement par un audit en lecture seule.
Lis AGENTS.md et docs/BASELINE-REPRISE.md, vérifie l'état Git, puis délègue à analyste et qa.
Cartographie l'application, Firebase, la PWA, le contrat du Worker Cloudflare et le déploiement GitHub Pages.
N'édite aucun fichier, n'exécute aucune commande qui écrit ou supprime des données, ne touche pas à Firebase/Cloudflare et ne pousse rien.
Présente les faits, les inconnues, les risques de régression et un plan priorisé. Attends mon accord avant toute modification.
```

## Important
- Le modèle doit rester séquentiel sur une machine avec 24 Go de mémoire unifiée.
- Les agents peuvent être plus ou moins fiables selon le modèle local ; fais relire tous les changements.
- `apiKey` Firebase Web est un identifiant client public ; les règles Firestore et restrictions Firebase sont ce qui doit être vérifié. Ne partage jamais une clé Gemini ou une clé privée Firebase.
- Le code Cloudflare Worker n'est pas dans ce dépôt : demande son URL de dépôt ou une copie expurgée des secrets pour un audit complet.
- Aucun agent ne doit faire `git push`, merge, déployer sur Pages ou exécuter `wrangler deploy`.
