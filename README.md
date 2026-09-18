# Les Événements de France

Landing page de l'association **Les Événements de France**.

Site statique minimaliste (HTML/CSS/JS vanilla, aucune dépendance) avec un bouton
*Login* qui ouvre un menu vers les services internes de l'association :

- [n8n](https://n8n.lesevenementsdefrance.fr)
- [Supabase](https://supabase.lesevenementsdefrance.fr)

L'authentification a lieu sur ces services eux-mêmes ; la landing page ne fait
que pointer vers eux.

## Développement local

```bash
docker compose up --build
```

Le site est alors servi sur http://localhost:8090.

Sans Docker, il suffit d'ouvrir `index.html` dans un navigateur.

## Déploiement

Le déploiement est automatisé via GitHub Actions (`.github/workflows/deploy.yml`) :
à chaque push sur `main`, le site est synchronisé sur le serveur puis reconstruit
avec `docker compose up -d --build`.

Le serveur écoute en local sur `127.0.0.1:8090` ; c'est à Nginx Proxy Manager
de faire pointer `lesevenementsdefrance.fr` vers cette adresse (avec certificat SSL).

### Secrets GitHub requis

À configurer dans *Settings → Secrets and variables → Actions* du repo :

| Secret            | Description                                          |
|-------------------|-------------------------------------------------------|
| `DEPLOY_HOST`     | IP ou nom d'hôte du serveur                            |
| `DEPLOY_USER`     | Utilisateur SSH de déploiement                         |
| `DEPLOY_SSH_KEY`  | Clé privée SSH (correspondant à une clé autorisée sur le serveur) |
| `DEPLOY_PATH`     | Chemin absolu du repo sur le serveur                   |

## Licence

MIT — voir [LICENSE](LICENSE).
