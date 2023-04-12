INSERT INTO department (name)
VALUES 
('Sales'), 
('Engineering'), 
('Finance'), 
('Legal');

INSERT INTO role (title, salary, department_id) 
VALUES
    -- Sales department
    ('Sales Manager', 150000, 1),
    ('Sales Lead', 90000, 1),
    ('Sales Person', 50000, 1),

    -- Engineering department
    ('Engineering Manager', 145000, 2),
    ('Software Lead', 100000, 2),
    ('Networker', 90000, 2),

    -- Finance department
    ('Finance Manager', 15500, 3),
    ('Financial Lead', 84000, 3),
    ('Financial Assistant', 60000, 3),

    -- Legal department
    ('Legal Manager', 200000, 4),
    ('Legal Lead', 100000, 4),
    ('Legal Assistant', 80000, 4);
