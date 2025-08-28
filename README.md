# Form-validator  ✔

**Opis w jednym zdaniu**  
Responsywny formularz rejestracyjny z walidacją: sprawdza poprawność pola nazwy użytkownika, hasła, powtórzonego hasła oraz adresu e-mail. Intuicyjny feedback użytkownika i informacja o poprawnym wysłaniu działają w czasie rzeczywistym.

---

##  Live Demo  
Zobacz działającą wersję online:  
[**Form-validator – Live Demo**]https://jj99wrocc.github.io/Form-validator/

---

##  Funkcjonalności

- Walidacja pól w formularzu:
  - Nazwa użytkownika — wymagane.
  - Hasło — wymagane, wraz z potwierdzeniem.
  - Adres e-mail — sprawdzanie zgodności z patternem e-mailowym.
- Przyciski: **Wyczyść** (resetuje formularz), **Wyślij** (wysyła formę po zatwierdzeniu).
- Po poprawnym wysłaniu — wyświetlenie komunikatu: *„Formularz został poprawnie wysłany”*
- Obsługa zamykania komunikatu: przycisk **Zamknij**.
- Stylizacja CSS + możliwość wykorzystania SCSS i automatyzacji przez GitHub Actions (paczki w `.github/workflows/`) :contentReference[oaicite:1]{index=1}.

---

##  Technologie

- **HTML5** — struktura i semantyka formularza.  
- **CSS / SCSS** — stylowanie, responsywność i estetyka formularza.  
- **JavaScript (vanilla)** — logika walidacji, obsługa komunikatów i interakcje.  
- **GitHub Actions** — automatyzacja przepływu projektu (budowanie, testy, deploy) :contentReference[oaicite:2]{index=2}.  
- **GitHub Pages** — hostowanie statycznej strony demo.

---

##  Użycie lokalnie

Projekt działa jako statyczna strona w przeglądarce:

Przykład użycia

Formularz o następującej strukturze:

<form id="registrationForm">
  <label>Imię użytkownika: <input name="username" required></label>
  <label>Hasło: <input type="password" name="password" required></label>
  <label>Powtórz hasło: <input type="password" name="password2" required></label>
  <label>E-mail: <input type="email" name="email" required></label>
  <button type="reset">Wyczyść</button>
  <button type="submit">Wyślij</button>
</form>
<div id="message" class="hidden">Formularz został poprawnie wysłany <button id="closeBtn">Zamknij</button></div>
<script src="js/validator.js"></script>
Możliwości rozwoju

Dodanie autouzupełniania lub asynchronicznej walidacji (np. sprawdzenie dostępności nazwy użytkownika via API).

Rozbudowane komunikaty błędów (tooltipy, kolory).

Walidacja w czasie rzeczywistym przy wpisywaniu (onChange) zamiast po kliknięciu.

Komponent w React/Vue lub jako Web Component.

Testy jednostkowe (np. z wykorzystaniem Jest).

Udostępnienie projektu jako biblioteki npm z możliwością „plug and 

Nauczyłem się solidnej walidacji form – sprawdzanie warunków, feedback, UX.

Praca z CSS/SCSS – estetyczny, czytelny i responsywny interfejs.

Automatyzacja workflow z GitHub Actions i publikacja przez GitHub Pages — umiejętności praktyczne przydatne w realnych projektach.

Autor: Joachim Esangbedo
