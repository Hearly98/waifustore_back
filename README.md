# waifustore-back

Backend del proyecto **WaifuStore**, basado en el proyecto final de [Cibertec](https://www.cibertec.edu.pe/) del año 2024.

El stack original (Spring Boot + Angular) fue reemplazado por **NestJS + React** con fines educativos. El proyecto se mantiene público e intenta ser lo más genérico posible para servir como referencia de aprendizaje.

> El frontend tiene su propio repositorio separado.

---

## Contexto

WaifuStore es una tienda de figuras de colección (figuras de anime, manga y cultura pop japonesa). El sistema permite gestionar el catálogo de productos, proveedores, clientes y toda la información relacionada con los artículos: series, personajes, fabricantes, tipos, líneas, medidas e imágenes.

---

## Stack

| Capa | Tecnología |
|------|------------|
| Runtime | Node.js con Bun |
| Framework | NestJS 12 |
| Lenguaje | TypeScript 6 |
| Testing | Vitest |
| Linting | OxLint |
| Formato | Prettier |

> La base de datos y ORM aún no están configurados (en progreso).

---

## Estructura del proyecto

```
src/
├── modules/
│   ├── products/            # Productos del catálogo
│   ├── product_media/       # Imágenes y multimedia de productos
│   ├── product_measurements/# Medidas físicas de los productos
│   ├── product_characters/  # Relación producto ↔ personaje
│   ├── product_types/       # Tipos de producto (figura, nendoroid, etc.)
│   ├── product_lines/       # Líneas de producto
│   ├── characters/          # Personajes de anime/manga
│   ├── series/              # Series (Dragon Ball, Naruto, etc.)
│   ├── manufacters/         # Fabricantes (Bandai, Kotobukiya, etc.)
│   ├── suppliers/           # Proveedores
│   └── customers/           # Clientes
├── common/                  # Utilidades compartidas
├── core/                    # Configuración central
├── events/                  # Eventos de dominio
└── commands/                # Comandos (patrón CQRS)
```

---

## Entidades y tablas

### `products`
Tabla principal del catálogo.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| name | string | Nombre del producto |
| description | string | Descripción |
| sku | string | Código único de referencia |
| price | number | Precio |
| series_id | UUID | FK → series |
| manufacturer_id | UUID | FK → manufacters |
| product_type_id | UUID | FK → product_types |
| product_line_id | UUID | FK → product_lines |
| is_active | boolean | Activo por defecto |
| created_at | Date | Fecha de creación |
| updated_at | Date | Fecha de actualización |

---

### `series`
Series de anime/manga a las que pertenece un personaje.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| name | string | Nombre de la serie |
| description | string | Descripción |
| active | boolean | Activo por defecto |
| created_at | Date | Fecha de creación |
| updated_at | Date | Fecha de actualización |

---

### `characters`
Personajes pertenecientes a una serie.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| name | string | Nombre del personaje |
| series_id | UUID | FK → series |
| description | string | Descripción |
| active | boolean | Activo por defecto |
| created_at | Date | Fecha de creación |
| updated_at | Date | Nullable |

---

### `product_characters`
Tabla intermedia entre productos y personajes.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| product_id | string | FK → products |
| character_id | string | FK → characters |

---

### `manufacters`
Fabricantes de las figuras.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | number | Clave primaria |
| name | string | Nombre del fabricante |
| description | string | Descripción |
| active | boolean | Estado |
| created_at | Date | Fecha de creación |
| updated_at | Date | Nullable |

---

### `product_types`
Tipos de figura (Nendoroid, Figma, Scale Figure, etc.).

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | number | Clave primaria |
| name | string | Nombre del tipo |
| description | string | Descripción |
| active | boolean | Estado |
| created_at | Date | Fecha de creación |
| updated_at | Date | Nullable |

---

### `product_lines`
Líneas de productos dentro de un fabricante.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | number | Clave primaria |
| name | string | Nombre de la línea |
| description | string | Descripción |
| active | boolean | Estado |
| created_at | Date | Fecha de creación |
| updated_at | Date | Nullable |

---

### `product_media`
Imágenes y archivos multimedia asociados a un producto.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| product_id | UUID | FK → products |
| url | string | URL del archivo |
| media_type | string | Tipo (imagen, video, etc.) |
| sort_order | number | Orden de presentación |

---

### `product_measurements`
Medidas físicas del producto (alto, ancho, profundidad, escala, peso).

| Campo | Tipo | Descripción |
|-------|------|-------------|
| product_id | UUID | FK → products |
| measurement_type_id | UUID | Tipo de medida |
| height | number | Alto (cm) |
| width | number | Ancho (cm), nullable |
| depth | number | Profundidad (cm) |
| scale | string | Escala (1/7, 1/8, etc.), nullable |
| weight | number | Peso (g), nullable |

---

### `suppliers`
Proveedores que abastecen la tienda.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| name | string | Nombre de contacto |
| business_name | string | Razón social |
| tax_id | string | RUC / número fiscal |
| address | string | Dirección |
| phone | string | Teléfono |
| email | string | Correo electrónico |
| is_active | boolean | Activo por defecto |
| created_at | Date | Fecha de creación |
| updated_at | Date | Fecha de actualización |

---

### `customers`
Clientes registrados en la tienda.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Clave primaria |
| name | string | Nombre completo |
| email | string | Correo electrónico |
| phone | string | Teléfono |
| address | string | Dirección |
| notes | string | Notas adicionales |
| active | boolean | Activo por defecto |
| created_at | Date | Fecha de creación |
| updated_at | Date | Nullable |

---

## Levantar el proyecto

```bash
# Instalar dependencias
bun install

# Modo desarrollo (watch)
bun run start:dev

# Producción
bun run start:prod
```

## Tests

```bash
# Unit tests
bun run test

# Tests en modo watch
bun run test:watch

# Cobertura
bun run test:cov

# E2E
bun run test:e2e
```


