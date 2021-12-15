# Grade Book App

## Overview

Some 🏫s provide utter 💩 tools for instructors to keep track of their students' grades. Some instructors resort to using standard spreadsheets to keep track of grades. This application provides the **back-end** for a better alternative in the form of a simple web app. It will allow instructors to add students and, create assignments and record grades for said students and assignments.

## Primary Objectives

- Add assignments. Said assignments will have a title and total points possible. Said assignments will get automatically added for each student with a `null` for the initial points earned.
- Add grades for an assignment by assigning points earned for each student.
- Access a student and see all of their grades (points earned) per assignment.

## Secondary Objectives

- Add students.
- Add additional admins, such as TAs that can manage grading.
- ✉️ or text a student.
- Allow admins to manage multiple classes.
- Create student logins so that they can see just their own grades.
- Allow students to submit links or attachments as assignment submissions.
- Allow admins to track attendance within the app.
- Add due dates and when things where submitted, if applicable.
- Exempt a student from an assignment.
- Add custom IDs to data instead of just Mongo's.

## Bonus Objectives

- Create a super-admin that manages multiple admins/instructors.
- In-app messaging.
- Deploy mobile versions.
- Import existing data from spreadsheets and/or 💩 apps.
- Update admin password via ✉️ or text 💬.

## Sample Data

The sample data only accounts for the Primary Objectives.
All ids will be generated by MongoDB.

### Student

```json
{
    "fname": "Jabari",
    "lname": "O'Kon",
    "email": "Leora_Runolfsdottir40@hotmail.com",
    "phone": "970-423-9497",
    "grades": []
  },
```

`"grades"` will reference `ObjectId`s of assignments.

### Admin

```json
{
  "username": "instructor",
  "password": "secrets!"
}
```

The password would be encrypted.

### Assignment

```json
{
  "title": "Assignment 1",
  "pointsPossible": 100,
  "students": []
}
```

`students` will reference `ObjectId`s of...students. Whenever an assignment is given, all students will be assigned.

## Routes

All routes will be prefaced with `/api`.
All routes will be protected via JWT after authenticating an Admin.

### Students

`/students`

Standard 4 routes...

### Admin Routes

`/admin`

`POST` - `/authenticate`
`POST` - `/register`
`PUT` - `/:id`

### Assignments

Standard 4 routes...

## External APIs

None ATM.
