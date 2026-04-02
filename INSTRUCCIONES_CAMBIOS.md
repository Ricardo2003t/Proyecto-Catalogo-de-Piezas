# 📝 GUÍA: Cómo Hacer Cambios y Subirlos a GitHub Pages

Tu web está publicada en: **https://Ricardo2003t.github.io/Proyecto-Catalogo-de-Piezas/**

Cualquier cambio que hagas se verá automáticamente en esa URL. Sigue estos pasos:

---

## 🔄 PROCESO PARA HACER CAMBIOS

### Paso 1: Editar los Archivos en VS Code
1. Abre VS Code
2. Abre tu carpeta: `c:\Proyecto Catalogo de Piezas`
3. Haz los cambios que necesites en:
   - `index.html` → Estructura y contenido
   - `style.css` → Estilos y diseño
   - `script.js` → Funcionalidad y interactions
   - Agregar/editar imágenes en las carpetas `Icons8/` o `Piezas/`

### Ejemplo de cambio:
- Cambiar el color del header
- Agregar un nuevo filtro
- Modificar textos
- Añadir nuevos productos
- Cambiar fotos

### Paso 2: Guardar los Cambios
- En VS Code, presiona **Ctrl+S** para guardar cada archivo que editaste

### Paso 3: Subir a GitHub (Lo importante)

Abre **PowerShell** y ejecuta estos comandos EN ORDEN:

```powershell
# 1. Navega a tu carpeta
cd "c:\Proyecto Catalogo de Piezas"

# 2. Agrega todos los cambios
git add .

# 3. Crea un "commit" (mensaje de qué cambiaste)
git commit -m "Descripción de los cambios que hiciste"

# 4. Sube a GitHub
git push
```

### Paso 4: Verifica tu web pública
- Espera 30 segundos - 1 minuto
- Abre: **https://Ricardo2003t.github.io/Proyecto-Catalogo-de-Piezas/**
- ¡Tus cambios estarán visibles! 👍

---

## 💡 EJEMPLOS DE COMANDOS GIT

### Agregar un nuevo producto:
```powershell
cd "c:\Proyecto Catalogo de Piezas"
git add .
git commit -m "Agregado kit distribución XUD7"
git push
```

### Cambiar colores del header:
```powershell
cd "c:\Proyecto Catalogo de Piezas"
git add .
git commit -m "Cambio de colores en el header"
git push
```

### Agregar nuevas imágenes:
```powershell
cd "c:\Proyecto Catalogo de Piezas"
git add .
git commit -m "Agregadas 5 nuevas imágenes de productos"
git push
```

---

## ⚠️ NOTAS IMPORTANTES

### ✅ LO QUE PUEDES CAMBIAR:
- HTML, CSS, JavaScript
- Imágenes (agregar, modificar, borrar)
- Textos y descripciones
- Estructura del catálogo
- Contactos y ubicación

### ❌ NO CAMBIES:
- `server.py` (no es necesario subirlo, es solo para pruebas locales)
- La carpeta `.git` (Git lo maneja)

### 📱 VERIFICAR LOS CAMBIOS:
1. **Localmente:** `http://localhost:3000` (si tienes el servidor corriendo)
2. **Públicamente:** `https://Ricardo2003t.github.io/Proyecto-Catalogo-de-Piezas/`

---

## 🆘 SI HAY PROBLEMAS

### Error: "git: command not found"
→ Git no está en el PATH. Reinicia PowerShell o la computadora.

### Error: "Permission denied"
→ Probablemente GitHub está pidiendo autenticación de nuevo. Repite la autenticación.

### Los cambios no aparecen después de 5 minutos
→ Presiona **Ctrl+Mayús+R** en el navegador para limpiar el caché.

---

## 🎯 RESUMEN RÁPIDO

Cada vez que hagas cambios:

```powershell
cd "c:\Proyecto Catalogo de Piezas"
git add .
git commit -m "Tu mensaje aquí"
git push
```

**¡Listo! Tu web se actualiza automáticamente.** 🚀

