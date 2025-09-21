# Version 1, exam 2025, Web Technologies

## Modify the Project to Add the Following Behavior

## General Clarifications:

- Functionalities that cannot be demonstrated will not be considered.
- Scoring starts at 0.5 points.

## Filtering, Sorting, and Pagination Functionality for the `tasks` List Component

### Clarifications

- Add filtering, sorting, and pagination functionality to the `tasks` list component.

### Detailed Scoring

- Ability to sort by a field - backend (0.25p)
- Ability to sort by `title` and `description` - frontend (0.25p)
- Ability to filter by a field - backend (1p)
- Ability to filter by `title` and `description` - frontend (0.25p)
- Ability to navigate between pages - backend (0.25p)
- Ability to navigate between pages - frontend (0.25p)
- Ability to change page size - backend (0.25p)
- Ability to change page size - frontend (0.25p)

## Comment Operations

### Clarifications

- Add a new entity `Comment`. A `Comment` is an entity that has an `id`, `title`, and `description`. The `id` is numeric and serves as the primary key. `title` and `description` are string fields with a maximum length of 255 characters.
- A `Task` can have multiple `Comment`s.
- Each `Comment` has a `Permission` associated with the `User` who created it. The user who created the `Comment` can edit or delete it.
- A `User` can have permissions over an unlimited number of `Comment`s.
- Add functionality to create, edit, and delete a `Comment`.
- The interface for interacting with comments must be accessible from the `Task` list.
- The interface for adding a `Comment` must be accessible from the `Comment` list.
- Navigation routes to the `Comment` list and the `Comment` creation page must be protected (i.e., inaccessible to unauthenticated users).

### Detailed Scoring

- Navigation to the comments list - frontend (0.25p)
- Adding a new `Comment` entity - backend (0.25p)
- Navigation to the comment creation page - frontend (0.25p)
- Adding a comment - backend (0.25p)
- Adding a comment - frontend (0.25p)
- Editing a comment - backend (0.25p)
- Editing a comment - frontend (0.25p)
- Deleting a comment - backend (0.25p)
- Deleting a comment - frontend (0.25p)
- Access control for comment operations - backend (0.25p)
