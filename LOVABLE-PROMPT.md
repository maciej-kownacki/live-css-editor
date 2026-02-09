# 🎨 Live CSS Editor - Instrukcje dla Lovable

## Prompt do wklejenia w Lovable:

```
Dodaj Live CSS Editor do mojego projektu. Wykonaj następujące kroki:

1. W głównym layout lub komponencie App, dodaj te dwa tagi przed zamknięciem </body> lub na końcu return():

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/TWOJ_USERNAME/live-css-editor/dist-standalone/style.css">
<script src="https://cdn.jsdelivr.net/gh/TWOJ_USERNAME/live-css-editor/dist-standalone/live-css-editor.standalone.js" data-auto-init></script>

Jeśli używasz React, dodaj to w komponencie za pomocą Helmet lub bezpośrednio w index.html.

Floating button CSS editora pojawi się w prawym dolnym rogu. Kliknij go żeby otworzyć panel.
```

---

## SZYBKIE ROZWIĄZANIE - Bez CDN (Wklej bezpośrednio w Lovable)

Skoro pliki są za duże, użyjmy **Lovable public folder**:

### Prompt dla Lovable:

```
Dodaj CSS Editor do projektu. Wykonaj te kroki:

1. KROK 1: Dodaj plik public/live-css-editor-style.css
   [Lovable automatycznie stworzy ten plik]

2. KROK 2: Dodaj plik public/live-css-editor.js
   [Ten plik jest duży - 472KB, więc może być problem]
   [Lepiej użyć external URL - przejdź do KROKU 3]

3. KROK 3: W pliku index.html lub App.tsx, dodaj na końcu przed </body>:

<!-- CSS Editor - Floating Button w prawym dolnym rogu -->
<link rel="stylesheet" href="/live-css-editor-style.css">
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script>
  // Temporary: Load from external source
  const script = document.createElement('script');
  script.src = 'TU_BEDZIE_URL_DO_PLIKU'; // Podaj mi URL gdzie mogę zahoostować
  script.setAttribute('data-auto-init', '');
  document.body.appendChild(script);
</script>

Floating button 🎨 pojawi się w prawym dolnym rogu po załadowaniu strony.
```

---

## NAJLEPSZE ROZWIĄZANIE: GitHub + jsDelivr CDN

Chcesz żebym:
1. **Zahostował pliki na GitHub Pages** dla Ciebie?
2. **Stworzył publiczne CDN URL** które zadziała od razu?

To zajmie 2 minuty i będziesz mógł używać tego na wszystkich projektach Lovable!

**Mam utworzyć GitHub repo i dać Ci gotowe linki CDN?** 🚀
