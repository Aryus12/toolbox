# ToolBox500 — répertoire de 500 outils web

**Auteur et signature du projet : AYI AYITE ARYUS OBATOBY.**

Application React 19 + TypeScript + Vite. Le projet contient un catalogue de **500 outils** répartis en 21 catégories, des liens directs vers des services externes réels, une connexion Supabase et une interface responsive/PWA.

## Démarrage sous Windows

1. Extraire le ZIP.
2. Ouvrir CMD ou PowerShell dans le dossier `ToolBox500`.
3. Exécuter `npm install`.
4. Exécuter `npm run dev`.
5. Ouvrir l'adresse locale indiquée par Vite.

Le fichier `.env` est préconfiguré avec l'URL du projet et une clé Publishable. Si tu recrées le fichier, copie `.env.example` vers `.env` puis ajoute la clé Publishable depuis Supabase > Project Settings > API Keys. Ne jamais utiliser la clé `service_role` dans le navigateur.

## Catalogue Supabase

La base Supabase initiale contient les 300 premières fiches. Le projet front-end complète automatiquement les entrées manquantes depuis son registre local, pour afficher 500 outils même avant l’application de la migration d’extension. Pour synchroniser Supabase, exécutez la migration ci-dessous :

1. Ouvrir le projet ToolBox500 dans Supabase.
2. Ouvrir **SQL Editor** puis créer une nouvelle requête.
3. Copier le contenu de `supabase/migrations/20261113020000_expand_catalogue_to_500.sql`.
4. Exécuter la requête.
5. Vérifier avec :

```sql
select count(*) from public.tools where is_active = true;
```

Le script est réexécutable : il met à jour les fiches existantes par `slug` au lieu de créer des doublons. Il ne modifie pas les profils, les rôles, les favoris ni l'historique.

**Important :** le frontend utilise le catalogue local intégré comme solution de repli si Supabase est momentanément inaccessible. Les favoris sont synchronisés pour les outils présents dans Supabase et restent locaux pour les outils de secours.

## Ce qui est intégré

- 21 catégories et 500 fiches d'outils avec recherche et filtres.
- 500 fiches de catalogue avec identifiants stables, réparties selon les besoins de chaque catégorie.
- Une destination HTTPS spécialisée définie individuellement pour chaque carte dans `src/toolLinks.ts`.
- La catégorie IA référence de vrais services spécialisés : QuillBot, LanguageTool, Copy.ai, Notion AI, ChatGPT, QuestionWell, Semrush, DeepL Write, Goblin Tools, Jasper, Grammarly et Taskade.
- Les autres catégories pointent vers des services établis adaptés à la tâche : iLoveIMG, iLovePDF, VEED, Kapwing, 123apps, CodePen, JSONLint, Buffer, HubSpot, Ahrefs, Desmos, Coolors, etc.
- Authentification Supabase par e-mail, profil, favoris et historique pour les outils publiés en base.
- Mode visiteur et favoris locaux.
- Thème sombre/clair, responsive, manifest et service worker.

## Fonctionnement des liens externes

ToolBox500 est un répertoire/portail : cliquer sur une carte ouvre le site du fournisseur dans un nouvel onglet du navigateur. Le traitement n'est pas exécuté dans la PWA et les données ne sont pas transmises à Supabase par ToolBox500. Le fournisseur externe applique ses propres conditions, limites gratuites, publicités, exigences de compte et règles de confidentialité.

Chaque outil possède une URL dédiée dans `src/toolLinks.ts`. Plusieurs outils peuvent partager un même fournisseur lorsque celui-ci propose plusieurs fonctions. Une destination peut évoluer ou devenir indisponible : les liens doivent donc être revérifiés périodiquement. Les liens ont été sélectionnés pour correspondre à la fonction annoncée, mais la vérification automatique de disponibilité HTTP n'a pas pu être menée à terme dans cet environnement.

La PWA sert de tableau de bord et de catalogue. Le catalogue distant, l'authentification et la synchronisation Supabase nécessitent Internet ; les sites externes nécessitent également une connexion Internet.

## Commandes

- `npm run dev` : développement
- `npm run build` : vérification TypeScript et compilation de production
- `npm run preview` : prévisualisation du build

## Sécurité

- Clé Publishable uniquement dans le frontend.
- Aucune clé secrète ou `service_role` dans `.env` ou le dépôt.
- Les tables privées restent protégées par RLS.
- Les outils de hash, mot de passe et traitement local sont exécutés dans le navigateur ; ne pas utiliser une page compromise ou un appareil partagé pour des secrets sensibles.

## Ouverture des outils externes
Les cartes du catalogue ouvrent maintenant une destination web externe dans un nouvel onglet. La PWA reste le tableau de bord ToolBox500 ; les opérations sont exécutées par les sites tiers, pas dans ToolBox500. Une connexion Internet est donc nécessaire pour utiliser ces services. Les liens sont centralisés dans `src/toolLinks.ts` et les URLs de base du catalogue sont enregistrées dans `tools.external_url` avec `access_type = 'external_link'`.

Important : certains services regroupent plusieurs fonctions sur une même page ou demandent un compte. Vérifiez leurs conditions, limites gratuites, politique de confidentialité et disponibilité avant d'y déposer des documents sensibles.

## Positionnement du produit

ToolBox500 est un **catalogue indépendant de services web**. Il ne développe pas et n'héberge pas les outils référencés : chaque fiche présente un besoin, une courte description et un lien direct vers le site de l'éditeur. L'ouverture se fait dans un nouvel onglet du navigateur. Les comptes sont facultatifs et servent notamment à synchroniser les favoris.

Le catalogue comporte 500 fiches réparties en 21 catégories. Les destinations sont définies dans `src/toolLinks.ts` (500 correspondances explicites) ; les éditeurs tiers peuvent modifier leurs URL, leur disponibilité, leurs conditions ou leurs tarifs sans préavis. ToolBox500 ne garantit donc pas la gratuité des services tiers.


## Extension à 500 outils

Le catalogue local contient désormais 500 fiches dans 21 catégories, avec 50 entrées dans « Applications ChatGPT & intégrations ». Cette rubrique référence des services connus (Google, Microsoft, GitHub, Notion, Slack, Canva, Stripe, etc.) : leur présence dans ToolBox500 ne signifie pas qu’une application ChatGPT native est disponible pour tous les comptes. La connexion dépend des applications officiellement proposées dans ChatGPT, du forfait et de la région.

Pour synchroniser les 200 nouvelles fiches avec Supabase, exécuter `supabase/migrations/20261113020000_expand_catalogue_to_500.sql` dans l’éditeur SQL du projet. La migration est idempotente sur les slugs.


## Référencement naturel (SEO)

- Balises title, description, robots, Open Graph et Twitter Cards en français.
- Données structurées Schema.org `WebSite` et `WebApplication`.
- Icône SVG, image de partage social et fichier `robots.txt`.
- Le build génère `sitemap.xml` et complète `robots.txt` si `VITE_SITE_URL` est défini, ou si Vercel fournit `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL`.
- Avant mise en production, définir `VITE_SITE_URL=https://votre-domaine.tld` dans les variables d’environnement Vercel. Ajouter ensuite le domaine et le sitemap dans Google Search Console et Bing Webmaster Tools.
- Les fiches sont actuellement affichées dans une SPA : pour obtenir des pages de catégories/outils indexables individuellement, une évolution SSR/prérendu avec URLs propres sera nécessaire.

Signature du code : AYI AYITE ARYUS OBATOBY.
