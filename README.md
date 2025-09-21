# Subiectul 1, examen 2025, Tehnologii Web

## Modificați proiectul pentru a adăuga următorul comportament

## Clarificări generale:

- Funcționalitățile care nu pot fi demonstrate nu vor fi luate în considerare
- Acordarea punctajului începe de la 0.5 puncte

## Funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `tasks`

### Clarificări

- Adăugați funcționalitate de filtrare, sortare și paginare pentru componenta de listă a de `tasks`

### Punctaje detaliate

- posibiltiatea de sortare după un câmp - backend(0.25p)
- posibilitatea de sortare după `title` și `description` - frontend(0.25p)
- posibilitatea de filtrare după un câmp - backend(0.25p)
- posibilitatea de filtrare după `title` și `description` - frontend(0.25p)
- posibilitatea de navigare între pagini - backend (0.25p)
- posibilitatea de navigare între pagini - frontend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - backend (0.25p)
- posibilitatea de schimbare a dimensiunii paginii - frontend (0.25p)

## Operații pe comentarii

### Clarificări

- Adăugați o nouă entitate `Comment`. `Comment` este o entitate care are un `id`, `title`, `description`. `id` este numeric și reprezintă cheia primară. `title` și `description` sunt string-uri de 255 de caracter. Un `Task` are mai multe `Comment`. Pentru un `Comment` există un `Permission` pentru `User`-ul care l-a creat. `User`-ul care a creat `Comment`-ul poate să îl editeze sau să îl șteargă. Un `User` poate avea permisiuni asupra unui număr nelimitat de `Comment`
- Adăugați funcționalitate de adăugare, editare și ștergere a unui `Comment`
- Interfața de interacțiune cu comentariile trebuie să fie accesibilă din lista de `Task`-uri
- Interfață de adăugare a unui `Comment` este accesibilă din lista de `Comment`
- Rutele de navigare la lista de `Comment` și la adăugarea unui `Comment` trebuie să fie protejate (nu se poate ajunge la ele pentru un utilizator neautentificat)

### Punctaje detaliate

- navigare la lista de comentarii - frontend (0.25p)
- adăugarea unei noi entități `Comment` - backend (0.25p)
- navigarea la adăugarea unui comentariu - frontend (0.25p)
- adăugarea unui comentariu - backend (0.25p)
- adăugarea unui comentariu - frontend (0.25p)
- editarea unui comentariu - backend (0.25p)
- editarea unui comentariu - frontend (0.25p)
- ștergerea unui comentariu - backend (0.25p)
- ștergerea unui comentariu - frontend (0.25p)
- controlul accesului la operațiile unui comentariu - backend (0.25p)
