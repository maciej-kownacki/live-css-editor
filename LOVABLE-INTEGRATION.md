# 🎨 Live CSS Editor - Integracja z Lovable

## Szybki Start (2 minuty)

### Krok 1: Skopiuj pliki

Z folderu `dist-standalone/` skopiuj te 2 pliki do swojego projektu Lovable:

```
dist-standalone/
├── live-css-editor.standalone.js  (1.5MB)
└── style.css                       (3KB)
```

Umieść je w folderze `public/` w swoim projekcie Lovable.

### Krok 2: Dodaj do index.html

W swoim `index.html` lub głównym komponencie, dodaj przed zamknięciem `</body>`:

```html
<!-- CSS Editor styles -->
<link rel="stylesheet" href="/live-css-editor-style.css">

<!-- CSS Editor script (auto-initialize) -->
<script src="/live-css-editor.standalone.js" data-auto-init></script>
```

### Krok 3: Gotowe! 🎉

Odśwież stronę i zobaczysz floating panel w prawym górnym rogu.

---

## Opcja Manualna Inicjalizacja

Jeśli chcesz kontrolować kiedy editor się uruchamia:

```html
<script src="/live-css-editor.standalone.js"></script>
<script>
  // Uruchom tylko w development
  if (window.location.hostname === 'localhost') {
    window.LiveCSSEditor.init({
      autoAnalyze: true,      // Automatycznie analizuj CSS
      initiallyOpen: true,    // Panel otwarty na start
    });
  }
</script>
```

---

## Konfiguracja z React Component (Lovable)

Jeśli wolisz dodać jako komponent React w Lovable:

```tsx
// W swoim App.tsx lub głównym komponencie
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement('script');
    script.src = '/live-css-editor.standalone.js';
    script.onload = () => {
      // Initialize after script loads
      if (window.LiveCSSEditor) {
        window.LiveCSSEditor.init({
          autoAnalyze: true,
          initiallyOpen: true,
        });
      }
    };
    document.body.appendChild(script);

    // Load styles
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/live-css-editor-style.css';
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      script.remove();
      link.remove();
    };
  }, []);

  return (
    <div>
      {/* Your Lovable app */}
    </div>
  );
}
```

---

## Funkcje

✅ **Click to Edit** - Kliknij dowolny kolor aby go zmienić
✅ **Inspect Mode** - Kliknij przycisk i wybierz element na stronie
✅ **Live Updates** - Zmiany aplikują się natychmiast
✅ **Smart Detection** - Automatycznie znajduje wszystkie kolory w CSS

---

## Testowanie Lokalnie

1. Otwórz `standalone-example.html` w przeglądarce
2. Zobacz jak działa editor
3. Testuj funkcje przed dodaniem do Lovable

---

## Bundle Size

- **JS**: 1.5MB (277KB gzipped) - includes React, PostCSS, chroma-js
- **CSS**: 3KB (0.7KB gzipped)

**Uwaga:** Duży rozmiar jest normalny - zawiera cały React i wszystkie dependencies. W production użyj minified wersji.

---

## Troubleshooting

### Panel nie pojawia się

1. Sprawdź console (F12) czy są błędy
2. Upewnij się że ścieżki do plików są poprawne
3. Sprawdź czy `window.LiveCSSEditor` jest dostępne w console

### Kolory się nie zmieniają

1. Otwórz console i sprawdź logi `[Color Change]`
2. Sprawdź czy elementy mają style w CSS (nie tylko inline)
3. Niektóre style mogą być nadpisane przez inne reguły

### Performance

Jeśli strona ładuje się wolno:
- Użyj tylko w development mode
- Lub załaduj script asynchronicznie: `<script src="..." async></script>`

---

## Kontakt

Pytania? Problemy? Daj znać!
