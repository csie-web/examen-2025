# Subiectul 4, examen 2025, Tehnologii Web

## Modificați proiectul pentru a adăuga următorul comportament

## Clarificări generale:

- Funcționalitățile care nu pot fi demonstrate nu vor fi luate în considerare
- Acordarea punctajului începe de la 0.5 puncte

## Funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `taskStatuses`

### Clarificări

- Adăugați funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `taskStatus`

### Punctaje detaliate

- posibiltatea de sortare după un câmp - backend(0.25p)
- posibilitatea de sortare după `label` și `description` - frontend(0.25p)
- posibilitatea de filtrare după un câmp - backend(1p)
- posibilitatea de filtrare după `label` și `description` - frontend(0.25p)
- posibilitatea de navigare între pagini - backend (0.25p)
- posibilitatea de navigare între pagini - frontend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - backend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - frontend (0.25p)

## Operații pe comentarii

### Clarificări

- Adăugați o nouă entitate `UserGroup`. `UserGroup` este o entitate care are un `id`, `name`, și `enabled`. `id` este numeric și reprezintă cheia primară. `label` și `description` sunt string-uri de 255 de caractere.
- Lista de `UserGroup` este accesibilă din dashboard-ul de admin
- Adăugați funcționalitate de adăugare, editare și ștergere a unui `UserGroup`
- Interfață de adăugare a unui `UserGroup` este accesibilă din lista de `UserGroup`
- Rutele de navigare la lista de `UserGroup` și la adăugarea unui `UserGroup` trebuie să fie protejate (nu se poate ajunge la ele pentru un utilizator neautentificat)

### Punctaje detaliate

- adăugarea unei noi entități `UserGroup` - backend (0.25p)
- navigare la lista de userGroup - frontend (0.25p)
- navigarea la adăugarea unui userGroup - frontend (0.25p)
- adăugarea unui userGroup - backend (0.25p)
- adăugarea unui userGroup - frontend (0.25p)
- editarea unui userGroup - backend (0.25p)
- editarea unui userGroup - frontend (0.25p)
- ștergerea unui userGroup - backend (0.25p)
- ștergerea unui userGroup - frontend (0.25p)
- controlul accesului la operațiile unui userGroup - backend (0.25p)
