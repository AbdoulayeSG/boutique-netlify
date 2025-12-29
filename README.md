# 🛍️ Boutique E-commerce Statique

Site e-commerce moderne et élégant avec système d'administration intégré, sans backend nécessaire.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Fonctionnalités

- 🎨 **Design moderne et responsive** avec effets d'animation au scroll
- 🔐 **Authentification admin** par ID et mot de passe
- 📦 **Gestion complète des produits** (CRUD)
- 🖼️ **3 méthodes d'upload d'images** : Catbox, local (base64), URL
- 💰 **Prix en FCFA** avec affichage formaté
- 📱 **Commande WhatsApp** directe depuis chaque produit
- 💾 **Stockage localStorage** - aucun serveur nécessaire
- ⚡ **Site 100% statique** - hébergement gratuit possible
- 🎭 **Animations fluides** et effets visuels éclatants

## 🚀 Démo

![Screenshot](screenshot.png)

## 📋 Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de code (VS Code, Sublime Text, etc.)
- Optionnel : Un serveur local (Live Server pour VS Code)

## 🔧 Installation

### 1. Cloner le repository
```bash
git clone https://github.com/votre-username/boutique-ecommerce.git
cd boutique-ecommerce
```

### 2. Structure du projet
```
boutique-ecommerce/
├── index.html              # Page publique (vitrine)
├── admin.html             # Page d'authentification admin
├── styles.css             # Styles du site public
├── admin/
│   └── cms/
│       └── index.html     # Interface de gestion des produits
├── products/
│   └── products.json      # Base de données (optionnel)
├── static/
│   └── images/
│       └── uploads/       # Dossier pour images uploadées
└── README.md
```

### 3. Ouvrir le site

**Option A : Serveur local (recommandé)**
```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx http-server
```

**Option B : Extension VS Code**
- Installer "Live Server"
- Clic droit sur `index.html` → "Open with Live Server"

**Option C : Directement dans le navigateur**
- Double-cliquer sur `index.html`

## 🎯 Utilisation

### Configuration initiale

#### 1. Modifier les identifiants admin

Dans `admin.html`, ligne 177-180 :
```javascript
const ADMIN_CREDENTIALS = {
    username: 'admin',        // ← Changez ceci
    password: 'admin123'      // ← Changez ceci
};
```

#### 2. Configurer le numéro WhatsApp

Dans `index.html`, dans le `<script>`, ligne 2 :
```javascript
const WHATSAPP_NUMBER = "221771234567"; // Format : indicatif + numéro (sans +)
```

**Exemples :**
- Sénégal : `221771234567`
- France : `33612345678`
- Côte d'Ivoire : `2250701234567`

### Administration du site

#### Accéder à l'admin

1. Allez sur `/admin.html` ou `/admin`
2. Connectez-vous avec vos identifiants
3. Cliquez sur "Ouvrir le CMS"

#### Ajouter un produit

1. Cliquez sur **"+ Ajouter un produit"**
2. Remplissez les informations :
   - **Nom** : Nom du produit
   - **Prix** : Prix en FCFA (sans décimales)
   - **Description** : Description détaillée
   - **Image** : Choisissez une méthode d'upload :
     - 🌐 **Catbox** : Hébergement gratuit permanent
     - 📁 **Local** : Stockage dans le site (max 2MB)
     - 🔗 **URL** : Coller un lien d'image existant
3. Cliquez sur **"Enregistrer"**

#### Modifier un produit

1. Cliquez sur **"✏️ Modifier"** sur le produit
2. Modifiez les champs souhaités
3. Cliquez sur **"Enregistrer"**

#### Supprimer un produit

1. Cliquez sur **"🗑️ Supprimer"** sur le produit
2. Confirmez la suppression

### Pour les clients

1. Visitez la page d'accueil
2. Parcourez les produits avec animations au scroll
3. Cliquez sur **"🛒 Commander sur WhatsApp"**
4. Le message est pré-rempli avec le nom et prix du produit
5. Envoyez directement au vendeur !

## 🎨 Personnalisation

### Modifier les couleurs

Dans `styles.css`, lignes 1-9 :
```css
:root {
    --primary: #0a0a0a;      /* Noir principal */
    --secondary: #f5f5f0;    /* Beige clair */
    --accent: #d4af37;       /* Or/doré */
    --text: #1a1a1a;         /* Texte foncé */
    --text-light: #6b6b6b;   /* Texte gris */
}
```

### Modifier les polices

Dans `styles.css`, ligne 16 :
```css
@import url('https://fonts.googleapis.com/css2?family=VotrePolice');
```

### Modifier les animations

Dans `styles.css`, ajustez les valeurs de `transition` et `animation-delay`.

## 🔒 Sécurité

⚠️ **Important** :

- Les identifiants admin sont stockés côté client (pas sécurisé pour production)
- Le localStorage est visible dans les outils développeur
- **Pour un usage professionnel**, migrez vers une solution avec backend

**Recommandations :**
- Changez les identifiants par défaut
- N'utilisez pas pour des données sensibles
- Considérez Firebase, Supabase, ou un backend classique pour plus de sécurité

## 📦 Déploiement

### Netlify (gratuit)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Votre site est en ligne ! 🎉

### Vercel (gratuit)
```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Poussez votre code sur GitHub
2. Settings → Pages
3. Source : main branch
4. Votre site sera sur `https://username.github.io/repo-name`

### Hébergement traditionnel

Uploadez tous les fichiers via FTP sur votre hébergeur.

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styles et animations
- **JavaScript (Vanilla)** - Logique
- **localStorage** - Stockage de données
- **Catbox.moe** - Hébergement d'images
- **WhatsApp API** - Commandes directes

## 📱 Compatibilité

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS & Android)

## 🐛 Problèmes connus

- **Upload Catbox échoue** : Utiliser l'upload local ou coller un lien
- **Images lourdes en base64** : Limite de 2MB pour éviter de surcharger localStorage
- **Pas de synchronisation multi-appareils** : Les données sont stockées localement

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez (`git commit -m 'Add AmazingFeature'`)
4. Pushez (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Roadmap

- [ ] Export/Import des produits en JSON
- [ ] Système de catégories
- [ ] Panier multi-produits
- [ ] Intégration paiement (Stripe, PayPal)
- [ ] Multi-langues
- [ ] Mode sombre
- [ ] Recherche et filtres
- [ ] Statistiques de ventes

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Votre Nom**
- GitHub: [@votre-username](https://github.com/votre-username)
- Email: votre.email@example.com

## 🙏 Remerciements

- Fonts : [Google Fonts](https://fonts.google.com/)
- Images de démo : [Unsplash](https://unsplash.com/)
- Hébergement d'images : [Catbox.moe](https://catbox.moe/)
- Inspiration design : [Dribbble](https://dribbble.com/)

## ⭐ Support

Si ce projet vous aide, n'hésitez pas à lui donner une ⭐ !

---

**Fait avec ❤️ pour les entrepreneurs du e-commerce**
