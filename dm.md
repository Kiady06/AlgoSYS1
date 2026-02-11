# Devoir Algo

## Division euclidienne

a = b*q + r

***Analyse du probleme***

*Donnes* : a et b (numerandes)

*Sorties* : q et r

*Conception* :
 - faire div de a par b
 - faire a mod b

**Pseudo Code**

Debut
    Declarer q : entier;
    Declarer r : entier;

    Lire a;
    Lire b;

    q = a div b;
    r = a % b;
Fin

## Valeur absolue

|a|

**Analyse du probleme**

*Donne* : a

*Sortie* : |a|

*Conception*
    Une valeure absolue represente la distance entre le chiffre et le point 0 par definition, et une distance doit etre positiove donc :
        * si a < 0, |a| = -a;
        * si a >= 0. |a| = a;

**Pseudo code**
Debut
    Declarer solution : entier;

    Lire a;

    Si a < 0 ALORS
        solution = a * (-1);
    SINON
        Si a >= 0 ALORS
            solution = a;
    FIN SI

    RETURN solution;
Fin

## Factorielle

a!

**Analyse du probleme**

*Donne* : a

*Sortie* : a!

*Conception*
    * Si a > 0, a! = a * (a-1) * (a-2) * ..... * 3 * 2 * 1
    * Si a = 0, a! = 1
    * Si a < 0, a! IMPOSSIBLE
**Pseudo-code**
Debut
    Declarer solution : entier;

    Lire a; 
    
    Si a < 0
        solution = NULL;
    SINON
        si a = 0
            solution = 1;
    SINON
        Si a = 1
            solution = 1;
    SINON
        solution = a * Factorielle(a - 1);

    RETURN solution;
Fin

## Nombre premier

a est premier ?

**Analyse du probleme**

*Donne* : a

*Sortie* : VRAI ou FAUX

*Conception*
    Utilisons la methode naive avec une petite optimisation, au lieu de diviser a par i de 2 jusqu'a a, on cherche jusqu'a SQRT(a);

**Pseudo-code**
Debut
    Declarer solution : boolean;

    Lire a;
    solution = VRAI;

    POUR i = 2 a SQRT(a) FAIRE
        Si (a % i == 0) ALORS
            solution = FAUX;
            Break;
        Fin Si
    FIN POUR

    Return solution;
Fin