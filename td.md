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

    Lire A;
    Lire B;

    temp = A;
    A = B;
    B = temp;
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
    - repetons l'operaion en prenant n comme compteur principale et en le decrementant jusqu'a 1

**Pseudo-code**
Debut
    Declarer resultat : entier;

    Lire x;
    Lire n;
    resultat = 1;

    
        
    FIN pour 
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
    Declarer solution : entier;
    Declarer x : entier;

    Lire x; 
    
    Si x < 0
        solution = NULL;
    SINON
        si x = 0
            solution = 1;
    SINON
        Si x = 1
            solution = 1;
    SINON
        solution = x * Factorielle(x - 1);

    RETURN solution;
Fin

# Exo 5 (a)

somme d'entier(formule)

**Analyse du probleme**

*Entree* : suite de nombres entiers par pas de 1, premier element est 1

*Sortie* : somme de la suite de nombre;

*Conception*
    * Somme = (n(n+1)) div 2 avec n est le dernier chiffre;

**Pseudo-code**
Debut
    Declarer resultat : entier;

    Lire dernier_nombre;

    resultat = dernier_nombre(dernier_nombre + 1) / 2; 
Fin

# Exo 5 (b)

somme d'entier(fomba gasy)

*Entree* : suite de nombres entiers par pas de 1, premier element est 1

*Sortie* : somme de la suite de nombre;

*Conception*
    * Somme = 1 + 2 + 3 + 4 + ..... + n

**Pseudo-code**
Debut
    Declarer resultat;

    Lire dernier_nombre;
    resultat = 0;

    Pour i = 1 jusqu'a dernier_nombre par pas de 1
        resultat = resultat + i;
    FIN Pour

    RETURN resultat;
Fin