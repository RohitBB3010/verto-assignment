
# Employee Data Management App

A simple web-based application to manage employee data, built with **React (frontend)** and **Node.js + SQLite (backend)**.  
The app allows users to **add, view, update, and delete employees**. Employees have attributes like **name, email, phone, role, and date of joining**.

## **Tech Stack**

### FRONTEND : React, Typescript, React-Query
### BACKEND : NodeJs, ExpressJs,SQLite
---

## **Features**

### Backend:
- Full CRUD API endpoints for employees (`/api/employees`).
- Uses SQLite for data persistence.
- Validation for email, phone, role, and date fields.

### Frontend:
- Display all employees in a table/list.
- Add new employees via a modal form.
- Edit existing employees with form prefilled.
- Delete employees directly from the list.
- Filter employees by **name, email, or role**.

---

## **Setup Instructions**

### 1. Clone the repository
```bash
git clone https://github.com/your-username/employee-data-management.git
cd verto-assignment
````

---

### 2. Set up the Backend (Node.js + SQLite)

```bash
cd verto_backend
npm install
npx prisma generate
```
* Start the backend server:

```bash
node app.js
```

* Backend URL: `http://localhost:5000`

**Available Endpoints:**

| Method | Endpoint                                   | Description           |
| ------ | ------------------------------------------ | --------------------- |
| GET    | /api/employees/fetch-employees             | Fetch all employees   |
| POST   | /api/employees/add-employee                | Add a new employee    |
| PUT    | /api/employees/update-employee/:employeeId | Update employee by ID |
| DELETE | /api/employees/delete-employee/:employeeId | Delete employee by ID |

---

### 3. Set up the Frontend (React)

```bash
cd verto_frontend
npm install
npm run dev
```

* Frontend URL: `http://localhost:5173` 


