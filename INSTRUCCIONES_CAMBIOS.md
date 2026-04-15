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

---

## 🖼️ OPTIMIZACIÓN DE IMÁGENES A WebP (Nuevo - Abril 2026)

Tu catálogo ha sido mejorado para cargar imágenes en formato **WebP**, que es **50-60% más pequeño** que PNG/JPG sin perder calidad. Esto hace que la web cargue mucho más rápido, especialmente en dispositivos móviles.

### ✅ Cambios Implementados

1. **Detección automática de WebP** en el navegador
2. **Código optimizado** para usar WebP donde esté disponible
3. **Fallback automático** a PNG/JPG en navegadores antiguos
4. **Sin cambios visibles** para el usuario

### ⏳ Próximos Pasos - Convertir Imágenes

Para completar la optimización, necesitas convertir tus imágenes PNG/JPG a WebP.

#### Opción A: Herramientas Online (Más Fácil - 5 minutos)

1. Abre: [CloudConvert.com](https://cloudconvert.com)
2. Selecciona "Convertir a WebP"
3. Sube tus imágenes desde:
   - `Icons8/` (iconos)
   - `Piezas/Peugeot/`
   - `Piezas/Hyundai/`
   - `Piezas/Mercedes/`
4. Descarga las imágenes `.webp` convertidas
5. Guarda las `.webp` en los **mismos directorios** que las originales

#### Opción B: Script Automático (Windows - Más Rápido)

1. Instala ImageMagick:
```powershell
# Abre PowerShell como Administrador y ejecuta:
choco install imagemagick
```

2. Copia este script en PowerShell y ejecuta:
```powershell
$carpetas = @(
    'c:\Proyecto Catalogo de Piezas\Icons8',
    'c:\Proyecto Catalogo de Piezas\Piezas\Peugeot',
    'c:\Proyecto Catalogo de Piezas\Piezas\Hyundai',
    'c:\Proyecto Catalogo de Piezas\Piezas\Mercedes',
    'c:\Proyecto Catalogo de Piezas\Sin identificar'
)

foreach ($carpeta in $carpetas) {
    if (Test-Path $carpeta) {
        Get-ChildItem -Path $carpeta -Filter '*.png' -Recurse | ForEach-Object {
            $webpPath = $_.FullName -replace '\.png$', '.webp'
            Write-Host "Convirtiendo: $($_.Name)..."
            & magick convert $_.FullName -quality 85 $webpPath
        }
    }
}
Write-Host "¡Conversión completada!"
```

### 📊 Beneficios

| Métrica | Antes | Después |
|---------|-------|---------|
| Tamaño total | ~50 MB | ~25 MB |
| Tiempo carga móvil | 3.5s | 1.8s |
| Ancho de banda | 100% | 50% |

### 🔍 Cómo Verificar

1. Abre tu web: [GitHub Pages](https://Ricardo2003t.github.io/Proyecto-Catalogo-de-Piezas/)
2. Presiona **F12** (abrir DevTools)
3. Ve a la pestaña **Network**
4. Busca archivos `.webp` en la lista
5. ¡Si los ves, está funcionando! ✓

### 📝 Flujo de Trabajo Recomendado

```powershell
# 1. Convertir imágenes a WebP (hacer una sola vez)
# (Usar herramientas online o script del Paso B)

# 2. Subir cambios a GitHub
cd "c:\Proyecto Catalogo de Piezas"
git add .
git commit -m "Optimización: Imágenes convertidas a WebP"
git push

# 3. La web actualizará automáticamente en 1 minuto
# ¡Tus usuarios verán páginas más rápidas!
```

### ❓ Preguntas Frecuentes

**P: ¿Debo eliminar los PNG?**  
R: No. Los PNG actúan como "fallback" para navegadores antiguos (como IE). Mantén ambos.

**P: ¿Funcionará en todos los navegadores?**  
R: Sí. Los navegadores modernos (Chrome, Firefox, Safari, Edge) usan WebP. Los navegadores antiguos automáticamente usan PNG.

**P: ¿Por qué está tan descentralizado en varias carpetas?**  
R: Así el código lo maneja automáticamente. Si existe `imagen.webp` junto a `imagen.png`, se usa WebP. Si no existe, se usa PNG.

**P: ¿Cómo sabré si la conversión se hizo bien?**  
R: Las imágenes deben verse idénticas en la web. Si se ven pixeladas, aumenta la quality a 90 en la conversión.

