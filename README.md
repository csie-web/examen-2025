# Subiectul 2, examen 2025, Tehnologii Web

## Modificați proiectul pentru a adăuga următorul comportament

## Clarificări generale:

- Funcționalitățile care nu pot fi demonstrate nu vor fi luate în considerare
- Acordarea punctajului începe de la 0.5 puncte

## Funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `comments`

### Clarificări

- Adăugați funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `comments`

### Punctaje detaliate

- posibiltiatea de sortare după un câmp - backend(0.25p)
- posibilitatea de sortare după `title` și `description` - frontend(0.25p)
- posibilitatea de filtrare după un câmp - backend(1p)
- posibilitatea de filtrare după `title` și `description` - frontend(0.25p)
- posibilitatea de navigare între pagini - backend (0.25p)
- posibilitatea de navigare între pagini - frontend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - backend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - frontend (0.25p)

## Operații pe comentarii

### Clarificări

- Adăugați o interfață de administrare pentru entitatea `User`. Interfață va fi accesibliă doar pentru un utilizator care are tipul `admin`
- Adăugați funcționalitate de adăugare, editare și ștergere a unui `User`
- Ștergerea unui utilizator va fi o operație soft-delete (ștergere logică). Aceasta constă în schimbarea unui utilizator enabled în disabled. Un utilizator care nu este enabled nu poate să se autentifice
- Un utilizator are un câmp `enabled`, care are valoarea default `true`. Când un utilizator este șters, valoarea acestui câmp va fi `false`
- La editarea unui utilizator, se poate lăsa câmpul `password` neschimbat, caz în care parola nu e afectată
- Interfață de adăugare a unui `User` este accesibilă din lista de `User`
- Rutele de navigare la lista de `User` și la adăugarea unui `User` trebuie să fie protejate (nu se poate ajunge la ele pentru un utilizator neautentificat)

### Punctaje detaliate

- navigare la lista de utilizatori - frontend (0.25p)
- navigarea la adăugarea unui utilizatori - frontend (0.25p)
- adăugarea unui utilizator - backend (0.25p)
- adăugarea unui utilizator - frontend (0.25p)
- editarea unui utilizator - backend (0.25p)
- editarea unui utilizator - frontend (0.25p)
- ștergerea unui utilizator - backend (0.25p)
- ștergerea unui utilizator - frontend (0.25p)
- controlul accesului la operațiile unui utilizator - backend (0.25p)
- controlul accesului unui utilizator care nu este enabled - (0.25p)
