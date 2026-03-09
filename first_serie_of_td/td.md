# TD February 10

## Exo 1

|a|

**Analyse du probleme**

*Entree* : Nombre reel

*Sortie* : valeur absolue du nombre reel

*Conception*
    * si nombre reel < 0, resultat = -a
    * si nombre reel >= 0, resultat = a

**Pseudo-code**
Debut
    Declarer resultat : reel
    Declarer x : reel

    Lire x

    Si x < 0 ALORS
        resultat = x * (-1)
    SINON
        resultat = x
    FIN SI
Fin

## Exo 2

swap

**Analyse du probleme**

*Entrees* :
    - variable 1
    - variable 2

*Sortie* : les valeurs de varaible1 et variable2 sont echangees

*Conception*
    - temp = variable1
    - variable1 = variable2
    - variable2 = temp

**Pseudo-code**
Debut
    Declarer temp : entier
    Declarer variable1 : entier
    Declarer variable2 : entier

    Lire variable1
    Lire variable2

    temp = variable1
    variable1 = variable2
    variable2 = temp
Fin

## Exo 3

puissance

**Analyse du probleme**

*Entrees*
    - base
    - exposant

*Sortie*
    - resultat de base^n

*Conception*
    - a^n = a * a * a * .... * a - a se repette n fois

**Pseudo-code**
Debut
    Declarer resultat : reel positif
    Declarer x : reel positif
    Declarer n : entier positif

    Lire x
    Lire n

    resultat = 1
    Si n != 0
        Tant que n > 0
            resultat = resultat * x
            n = n - 1
        Fin tant que
    FIN SI
Fin

# Exo 4

Factorielle

**Analyse du probleme**

*Entree* : nombre entier

*Sortie* : factorielle du nombre entier

*Conception*
    * Si nombre entier > 0 :
        - resultat = 1
        - faire une boucle pour i de 2 jusqu'a x et multiplier a chaque fois le resultat par i
    * Si nombre entier = 0, resultat = 1
    * Si nombre entier < 0, resultat IMPOSSIBLE

**Pseudo-code**
Debut
    Declarer resultat : entier
    Declarer x : entier

    Lire x
    resultat = 1
    
    Si x < 0 Alors
        AFFICHER "Indefinis"
    SINON
        POUR i = 2 jusqu'a x par pas de 1
            resultat = resultat * x
            x = x - 1
        FIN TANT QUE
    FIN SI

Fin

# Exo 5 (a)

somme d'entier(formule)

**Analyse du probleme**

*Entree* : suite de nombres entiers consecutif

*Sortie* : somme de la suite de nombre

*Conception*
    * Somme = (n(n+1)) div 2 avec n est le dernier element

**Pseudo-code**
Debut
    Declarer resultat : entier
    Declarer dernier_element: entier

    Lire dernier_element
    resultat = 0

    resultat = dernier_element * (dernier_element + 1) / 2
Fin

# Exo 5 (b)

somme d'entier(iteration )

**Analyse du probleme**

*Entree* : plus grand element entier n

*Sortie* : somme de la suite de nombre

*Conception*
    * initialiser resultat = 0
    * faire une boucle pour i de 1 jusqu'a dernier element et l'additionner(i) a notre resultat a chaque fois

**Pseudo-code**
Debut
    Declarer resultat : entier
    Declarer dernier_element: entier

    Lire dernier_element
    resultat = 0

    Pour i = 1 jusqu'a dernier_element par pas de 1 Faire
        resultat = resultat + i
    FIN Pour

    RETURN resultat
Fin

# Exo 6

Divison euclidienne

**Analyse du probleme**

*Entrees* :
    - a : dividende (entier)
    - b : diviseur (entier non nul)

*sorties* :
    - a : quotient
    - r : reste

*Conception* :
    * Initialisation : r = a , q = 0
    * tant que r > b, r = r-b et q++
    * si r < b, stop

**Pseudo-code**
Debut
    Declarer a  : entier
    Declarer b  : entier
    Declarer q  : entier
    Declarer r  : entier

    Lire a
    Lire b
    
    SI b = 0
        Afficher "Erreur"
    SINON
        r = a
        q = 0
        TANT QUE r >= b
            r = r - b
            q = q + 1
        FIN Tant que
    FIN SI
Fin

npm init -y
npm install prompt-sync