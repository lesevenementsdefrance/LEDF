# Les Événements de France

Landing page de l'association **Les Événements de France**.

Site statique minimaliste (HTML/CSS/JS vanilla, aucune dépendance) avec un bouton
*Login* qui ouvre un menu vers les services internes de l'association :

- [n8n](https://n8n.lesevenementsdefrance.fr)
- [Supabase](https://supabase.lesevenementsdefrance.fr)

L'authentification a lieu sur ces services eux-mêmes ; la landing page ne fait
que pointer vers eux.

## Développement local

Aucune dépendance : ouvrir `index.html` dans un navigateur suffit.

## Déploiement

Le serveur sert `lesevenementsdefrance.fr` avec un nginx natif (+ Certbot pour le
SSL), en statique, directement depuis `/var/www/lesevenementsdefrance.fr`.

Le déploiement est automatisé via GitHub Actions (`.github/workflows/deploy.yml`) :
à chaque push sur `main`, les fichiers statiques sont synchronisés par `rsync`
dans ce dossier — pas de build, pas de conteneur.

### Secrets GitHub requis

À configurer dans *Settings → Secrets and variables → Actions* du repo :

| Secret            | Description                                          |
|-------------------|-------------------------------------------------------|
| `DEPLOY_HOST`     | IP ou nom d'hôte du serveur                            |
| `DEPLOY_USER`     | Utilisateur SSH de déploiement                         |
| `DEPLOY_SSH_KEY`  | Clé privée SSH (correspondant à une clé autorisée sur le serveur) |
| `DEPLOY_PATH`     | `/var/www/lesevenementsdefrance.fr`                    |

## Licence

MIT — voir [LICENSE](LICENSE).
