INSERT INTO department (name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role (title, salary, department_id) 
VALUES
    -- Sales department
    ('Sales Manager', 100000, 1),
    ('Sales Representative', 60000, 1),
    ('Sales Associate', 40000, 1),

    -- Engineering department
    ('Engineering Manager', 120000, 2),
    ('Software Engineer', 90000, 2),
    ('Network Engineer', 85000, 2),

    -- Finance department
    ('Finance Manager', 110000, 3),
    ('Financial Analyst', 75000, 3),
    ('Accountant', 65000, 3),

    -- Legal department
    ('Legal Manager', 115000, 4),
    ('Lawyer', 80000, 4),
    ('Paralegal', 60000, 4);
