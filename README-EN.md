# Version 2, summer exam 2025, Web Technologies

## Modify the Project to Add the Following Behavior

## General Clarifications:

- Functionalities that cannot be demonstrated will not be considered.
- Scoring starts at 0.5 points.

## Filtering, Sorting, and Pagination Functionality for the `comments` List Component

### Clarifications

- Add filtering, sorting, and pagination functionality to the `comments` list component.

### Detailed Scoring

- Ability to sort by a field - backend (0.25p)
- Ability to sort by `email` and `type` - frontend (0.25p)
- Ability to filter by a field - backend (1p)
- Ability to filter by `email` and `type` - frontend (0.25p)
- Ability to navigate between pages - backend (0.25p)
- Ability to navigate between pages - frontend (0.25p)
- Ability to change page size - backend (0.25p)
- Ability to change page size - frontend (0.25p)

## User Management Operations

### Clarifications

- Add an administration interface for the `User` entity. This interface should be accessible only to users with the `admin` role.
- Add functionality to create, edit, and delete a `User`.
- User deletion should be a soft delete (logical deletion). This means changing a user’s status from enabled to disabled. A user who is not enabled cannot authenticate.
- A user has an `enabled` field, which defaults to `true`. When a user is deleted, this field should be set to `false`.
- When editing a user, the `password` field can be left unchanged, in which case the password remains unaffected.
- The interface for adding a `User` should be accessible from the `User` list.
- Navigation routes to the `User` list and the `User` creation page must be protected (i.e., inaccessible to unauthenticated users).

### Detailed Scoring

- Navigation to the user list - frontend (0.25p)
- Navigation to the user creation page - frontend (0.25p)
- Adding a user - backend (0.25p)
- Adding a user - frontend (0.25p)
- Editing a user - backend (0.25p)
- Editing a user - frontend (0.25p)
- Deleting a user - backend (0.25p)
- Deleting a user - frontend (0.25p)
- Access control for user operations - backend (0.25p)
- Access control for disabled users (ensuring they cannot authenticate) - backend (0.25p)
