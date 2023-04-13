INSERT INTO department (name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role (title, salary, department_id) 
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Samantha', 'Ahn', 1, Null),
('Roye', 'Ban', 2, 1),
('Kristina', 'Ahn', 3, Null),
('Tom', 'Allen', 4, 3),
('John', 'Doe', 5, Null),
('Paul', 'Doe', 6, 5),
('Alexis', 'San Javier', 7, Null),
('David', 'Claiborn', 8, 7);