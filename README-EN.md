# Version 4, summer exam 2025, Web Technologies

## Modify the Project to Add the Following Behavior

## General Clarifications:

- Functionalities that cannot be demonstrated will not be considered.
- Scoring starts at 0.5 points.

## Filtering, Sorting, and Pagination Functionality for the `taskStatuses` List Component

### Clarifications

- Add filtering, sorting, and pagination functionality to the `taskStatus` list component.

### Detailed Scoring

- Ability to sort by a field - backend (0.25p)
- Ability to sort by `label` and `description` - frontend (0.25p)
- Ability to filter by a field - backend (1p)
- Ability to filter by `label` and `description` - frontend (0.25p)
- Ability to navigate between pages - backend (0.25p)
- Ability to navigate between pages - frontend (0.25p)
- Ability to change page size - backend (0.25p)
- Ability to change page size - frontend (0.25p)

## User Group Operations

### Clarifications

- Add a new entity `UserGroup`. `UserGroup` is an entity that has an `id`, `name`, and `enabled`. The `id` is numeric and serves as the primary key. `name` and `description` are string fields with a maximum length of 255 characters.
- The `UserGroup` list is accessible from the admin dashboard.
- Add functionality to create, edit, and delete a `UserGroup`.
- The interface for adding a `UserGroup` should be accessible from the `UserGroup` list.
- Navigation routes to the `UserGroup` list and the `UserGroup` creation page must be protected (i.e., inaccessible to unauthenticated users).

### Detailed Scoring

- Adding a new `UserGroup` entity - backend (0.25p)
- Navigation to the `UserGroup` list - frontend (0.25p)
- Navigation to the `UserGroup` creation page - frontend (0.25p)
- Adding a `UserGroup` - backend (0.25p)
- Adding a `UserGroup` - frontend (0.25p)
- Editing a `UserGroup` - backend (0.25p)
- Editing a `UserGroup` - frontend (0.25p)
- Deleting a `UserGroup` - backend (0.25p)
- Deleting a `UserGroup` - frontend (0.25p)
- Access control for `UserGroup` operations - backend (0.25p)
