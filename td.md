# TD February 10

## Exo 1

|a|

**Analyse du probleme**

*Entree* : Nombre reel

*Sortie* : valeur absolue du nombre reel

*Conception*
    * si nombre reel < 0, resultat = -a;
    * si nombre reel >= 0, resultat = a;

**Pseudo-code**
Debut
    Declarer resultat : reel;
    Declarer x : reel;

    Lire x;

    Si x < 0 ALORS
        resultat = x * (-1);
    SINON
        resultat = x;
    FIN SI
Fin

## Exo 2

swap

**Analyse du probleme**

*Entrees* :
    - variable 1
    - variable 2

*Sortie* : les valeurs de a et b sont echangees : a(t=1) = b(t=0) et b(t=1) = b(t=0)

*Conception*
    - Creons temp pour stocker la valeur initiale de a;

**Pseudo-code**
Debut
    Declarer temp : variable;
    Declarer variable1 : variable;
    Declarer variable2 : variable;

    Lire variable1;
    Lire variable2;

    temp = variable1;
    variable1 = variable2;
    variable2 = temp;
Fin

## Exo 3

puissance

**Analyse du probleme**

*Entrees*
    - base
    - exposant

*Sortie*
    - resultat de x^n

*Conception*
    - a^n = a * a * a * .... * a n fois

**Pseudo-code**
Debut
    Declarer resultat : reel positif;
    Declarer x : reel positif;
    Declarer n : entier positif;

    Lire x;
    Lire n;

    resultat = 1;
    Si n = 0
        resultat = 1;
    SINON
        Tant que n > 0
            resultat = resultat * x;
            n = n - 1;
        Fin tant que
    FIN SI
Fin

# Exo 4

Factorielle

**Analyse du probleme**

*Entree* : nombre entier

*Sortie* : factorielle du nombre entier

*Conception*
    * Si nombre entier > 0, resultat = a * (a-1) * (a-2) * ..... * 3 * 2 * 1
    * Si nombre entier = 0, resultat = 1
    * Si nombre entier < 0, resultat IMPOSSIBLE

**Pseudo-code**
Debut
    Declarer resultat : entier;
    Declarer x : entier;

    Lire x;
    resultat = x;
    
    Si x < 0 Alors
        resultat = NULL;
    SINON
        si x = 0 ou x = 1 Alors
            resultat = 1;
    SINON
        TANT QUE x > 1
            resultat = resultat * x
            x = x - 1;
        FIN TANT QUE
    FIN SI

    RETURN resultat;
Fin

# Exo 5 (a)

somme d'entier(formule)

**Analyse du probleme**

*Entree* : suite de nombres entiers par pas de 1, premier element est 1

*Sortie* : somme de la suite de nombre;

*Conception*
    * Somme = (n(n+1)) div 2 avec n est la borne superieur;

**Pseudo-code**
Debut
    Declarer resultat : entier;
    Declarer borne supérieure: entier;

    Lire dernier_nombre;
    resultat = 0;

    resultat = borne supérieure* (borne supérieure+ 1) / 2; 
Fin

# Exo 5 (b)

somme d'entier(iteration )

**Analyse du probleme**

*Entree* : suite de nombres entiers par pas de 1, premier element est 1

*Sortie* : somme de la suite de nombre;

*Conception*
    * Somme = 1 + 2 + 3 + 4 + ..... + n

**Pseudo-code**
Debut
    Declarer resultat : entier;
    Declarer borne_sup: entier;

    Lire borne_sup;
    resultat = 0;

    Pour i = 1 jusqu'a borne_sup par pas de 1 Faire
        resultat = resultat + i;
    FIN Pour

    RETURN resultat;
Fin

# Exo 6

Divison euclidienne

**Analyse du probleme**

*Entree* : 