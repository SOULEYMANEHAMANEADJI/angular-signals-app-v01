# Angular Signals App V01

Une application Angular utilisant des **Signals** pour une gestion réactive fine des produits.

## Prérequis

- Node.js et npm installés
- Angular CLI installé (`npm install -g @angular/cli`)

## Installation

1. Cloner le dépôt ou télécharger le projet.
2. Installer les dépendances Angular :
   ```bash
   npm install
   ```
3. Ajouter Bootstrap avec Angular :
   ```bash
   ng add @ng-bootstrap/ng-bootstrap
   ```

## Démarrage de l'application

Pour démarrer l'application, exécutez la commande suivante :

```bash
ng serve
```

## Structure du Projet

- **components/** : Contient les composants Angular tels que `product`, `products`, `add-product`, `dash-board`, etc.
- **services/** : Contient le service `product.service.ts` pour la gestion des produits.
- **models/** : Contient les modèles de données, par exemple, `product.models.ts`.

## Composants Principaux

- **AddProductComponent** : Formulaire pour ajouter un produit avec validation des champs.
- **DashBoardComponent** : Vue de tableau de bord affichant des statistiques sur les produits.
- **ProductComponent** : Composant gérant l'affichage d'un produit individuel.
- **ProductsComponent** : Affiche la liste des produits et permet de les sélectionner.
- **ProductsListComponent** : Affiche la liste des produits avec des fonctionnalités telles que la suppression et la sélection.

## Utilisation des Signals

Le projet utilise les **Angular Signals** pour une gestion fine et réactive des données, optimisant les calculs dépendants des modifications de l'état.

## Auteurs

Créé par Mine HAS.
