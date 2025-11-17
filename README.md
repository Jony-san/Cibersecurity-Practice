# Cibersecurity-Practice
Practicar ciberseguridad usando node.js

# 🛡️ Practica de ciberseguridad
Proyecto diseñado para practicar conceptos de **ciberseguridad** utilizando **Node.js**, incluyendo ejemplos de vulnerabilidades comunes, ataques simulados y buenas prácticas para mitigarlas.

---

## 🚀 Características del proyecto
- Ejemplos de ataques comunes (SQL Injection, XSS, Autenticación, etc.)
- Versiones vulnerables y versiones seguras del mismo endpoint
- Código simple y didáctico para aprender cómo proteger aplicaciones Node.js
- Uso de Express.js y otras herramientas modernas

---

## 📦 Requisitos previos
Asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm**

# Como compilar proyecto
# Clonar repositorio corriendo
git clone https://github.com/Jony-san/Cibersecurity-Practice.git
# Acceder al proyecto
cd Cibersecurity-Practice
# Descargar librerias
npm i
# Correr proyecto
npm run dev

# Puede crear las tablas de usuario y empresa de ejemplo de la siguiente manera
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    empresa_id INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (empresa_id) REFERENCES empresa(id)
);

CREATE TABLE empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(50),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
