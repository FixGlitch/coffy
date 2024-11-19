-- Inserta usuarios iniciales
INSERT INTO users (email, password)
VALUES
  ('admin@example.com', 'hashed_password_1'),
  ('user@example.com', 'hashed_password_2');

-- Inserta productos iniciales
INSERT INTO products (name, description, price)
VALUES
  ('Producto 1', 'Descripción del producto 1', 10.99),
  ('Producto 2', 'Descripción del producto 2', 15.49),
  ('Producto 3', 'Descripción del producto 3', 20.00);
