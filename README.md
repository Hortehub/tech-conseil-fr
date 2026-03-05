# ⚡ TechConseil FR — Blog Affiliation Amazon

Blog d'affiliation Amazon automatisé — niche **Tech & High-Tech**

---

## 🚀 DÉPLOIEMENT RAPIDE (15 minutes)

### Étape 1 — Mettre le site en ligne sur Vercel (GRATUIT)

1. Créez un compte sur [vercel.com](https://vercel.com) (gratuit)
2. Installez Vercel CLI :
   ```bash
   npm install -g vercel
   ```
3. Dans le dossier du projet :
   ```bash
   vercel login
   vercel --prod
   ```
4. Votre site sera en ligne sur : `tech-conseil-fr.vercel.app` 🎉

---

### Étape 2 — Configurer votre Tag Amazon Partenaires

1. Inscrivez-vous sur [affiliate-program.amazon.fr](https://affiliate-program.amazon.fr)
2. Obtenez votre Tag (ex: `monsite-21`)
3. Remplacez `techconseils-21` par votre tag dans :
   - `app/articles/[slug]/page.js` (ligne ~15)
   - `data/articles.js` (si besoin)

---

### Étape 3 — Importer le workflow n8n

1. Ouvrez votre instance n8n
2. Allez dans **Workflows → Import from file**
3. Importez le fichier `n8n-workflow.json`
4. Configurez la variable `ANTHROPIC_API_KEY` dans n8n :
   - Settings → Variables → Ajouter `ANTHROPIC_API_KEY`
5. Activez le workflow ✅

---

## 📁 Structure du projet

```
tech-conseil-fr/
├── app/
│   ├── page.js              # Page d'accueil
│   ├── layout.js            # Layout global
│   ├── globals.css          # Styles (thème dark)
│   └── articles/
│       └── [slug]/
│           └── page.js      # Template article dynamique
├── data/
│   └── articles.js          # 📝 Vos articles (à enrichir)
├── n8n-workflow.json        # 🤖 Workflow automatisation n8n
├── vercel.json              # ⚙️ Config déploiement Vercel
└── package.json
```

---

## 🤖 Comment fonctionne l'automatisation n8n

Le workflow génère automatiquement des articles 3x par semaine :

```
⏰ Planification (Lun/Mer/Ven 9h)
        ↓
📋 Sélection du sujet (aléatoire ou manuel)
        ↓
🤖 Claude API — Génération article SEO (1800-2200 mots)
        ↓
📝 Parsing et extraction des données produits
        ↓
✅ Contrôle qualité (>800 mots)
        ↓
📤 Publication (brouillon → à valider)
```

### Déclencher manuellement un article :
```bash
curl -X POST https://[votre-n8n]/webhook/generate-article \
  -H "Content-Type: application/json" \
  -d '{
    "motCle": "meilleur clavier mécanique 2025",
    "categorie": "PC & Laptops",
    "type": "comparatif",
    "budget": "50-200€"
  }'
```

---

## 📝 Ajouter un article manuellement

Éditez `data/articles.js` et ajoutez un objet avec cette structure :

```js
{
  slug: "nom-url-article",
  titre: "Titre SEO de l'article",
  description: "Meta description 155 chars...",
  categorie: "PC & Laptops",
  date: "Mars 2025",
  tempsLecture: "7 min",
  image: "💻",
  motCle: "mot-clé principal",
  produits: [
    {
      rang: 1,
      nom: "Nom du produit",
      asin: "B0XXXXXXXX",    // ← ASIN Amazon
      prix: "299€",
      note: 4.6,
      avis: 1234,
      badge: "Choix de la rédaction",
      accroche: "Sous-titre court",
      description: "Description 100 mots...",
      pointsForts: ["Point 1", "Point 2"],
      pointsFaibles: ["Point 1"]
    }
  ],
  criteres: [{ titre: "Critère", texte: "Explication..." }],
  faq: [{ question: "Question ?", reponse: "Réponse..." }]
}
```

Puis redéployez :
```bash
vercel --prod
```

---

## 💰 Sujets d'articles prioritaires (PC & Laptops)

| Mot-clé | Volume est. | Difficulté | Priorité |
|---------|-------------|------------|----------|
| meilleur pc portable 2025 | 8 000/mois | Moyenne | ⭐⭐⭐ |
| meilleur écran pc | 5 500/mois | Faible | ⭐⭐⭐ |
| meilleur clavier mécanique | 4 200/mois | Faible | ⭐⭐⭐ |
| pc portable etudiant | 6 800/mois | Moyenne | ⭐⭐⭐ |
| meilleure souris gaming | 3 900/mois | Faible | ⭐⭐ |
| meilleur SSD NVMe | 2 800/mois | Faible | ⭐⭐ |
| pc bureau gaming pas cher | 4 100/mois | Moyenne | ⭐⭐ |

---

## ⚖️ Mention légale obligatoire

> *En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.*

Cette mention est déjà intégrée dans chaque article et dans le footer.

---

## 📊 Roadmap

- [x] Site statique Next.js déployé sur Vercel
- [x] 3 articles d'exemple (PC, Casques, Smartphones)
- [x] Workflow n8n automatisation Claude AI
- [ ] Connecter WordPress REST API pour publication auto
- [ ] Ajouter Pinterest automation (épingles auto)
- [ ] Intégrer Google Analytics 4
- [ ] Ajouter sitemap.xml dynamique
- [ ] Newsletter automatique hebdomadaire

---

*TechConseil FR — Blog affiliation Amazon automatisé par IA*
