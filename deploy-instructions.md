# Instrukcje Wdrożenia - Progressivegroup Website

## Przygotowanie plików do wdrożenia

### 1. Zbuduj projekt dla produkcji
```bash
npm run build
```
lub
```bash
yarn build
```

### 2. Pliki gotowe do wdrożenia
Po zbudowaniu projektu, wszystkie pliki potrzebne do wdrożenia znajdą się w folderze `dist/`.

### 3. Opcje wdrożenia

#### A. Serwer Apache
- Skopiuj zawartość folderu `dist/` na serwer
- Plik `.htaccess` został już przygotowany w folderze `public/` i zostanie automatycznie skopiowany

#### B. Netlify
- Przeciągnij folder `dist/` na Netlify Drop
- Lub połącz z repozytorium Git
- Plik `_redirects` został przygotowany dla Netlify

#### C. Vercel
- Zainstaluj Vercel CLI: `npm i -g vercel`
- W folderze projektu uruchom: `vercel`
- Lub połącz z repozytorium Git na vercel.com

#### D. Hosting tradycyjny (FTP)
- Skopiuj zawartość folderu `dist/` do katalogu głównego serwera (np. `public_html/`)
- Upewnij się, że serwer obsługuje pliki `.htaccess` (Apache)

### 4. Sprawdzenie po wdrożeniu
- Sprawdź czy strona ładuje się poprawnie
- Przetestuj przewijanie między sekcjami
- Sprawdź responsywność na różnych urządzeniach
- Przetestuj formularz kontaktowy

### 5. Dodatkowe uwagi
- Strona używa Google Fonts - wymagane połączenie internetowe
- Ikony pochodzą z Lucide React
- Responsywna dla wszystkich urządzeń
- Optymalizowana dla SEO

### 6. Aktualizacje
Aby zaktualizować stronę:
1. Wprowadź zmiany w kodzie
2. Uruchom `npm run build`
3. Zastąp pliki na serwerze zawartością nowego folderu `dist/`