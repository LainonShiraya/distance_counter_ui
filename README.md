# distance_counter_app

Prosta aplikacja frontendowa stworzona w **Vue 3** i **TypeScript**, umożliwiająca obliczenie odległości pomiędzy dwoma punktami geograficznymi przy użyciu backendowego API PHP.

## Funkcjonalności

* Wprowadzanie współrzędnych dwóch punktów (`latitude` i `longitude`)
* Walidacja danych wejściowych
* Wysłanie żądania do backendu PHP
* Wyświetlenie odległości w:

  * metrach
  * kilometrach
* Obsługa błędów zwracanych przez API

## Wymagania

* Node.js 20+
* npm

## Instalacja

Zainstaluj zależności:

```sh
npm install
```

## Uruchomienie

Utwórz plik .env i ustaw wartość ( jeśli BE działa na porcie 8000):
VITE_API_URL=http://localhost:8000

Uruchom serwer deweloperski:

```sh
npm run dev
```

Domyślnie aplikacja będzie dostępna pod adresem:

```text
http://localhost:5173
```

## Konfiguracja API

Frontend komunikuje się z backendem PHP.

Domyślny adres API:

```text
http://localhost:8000
```

Upewnij się, że backend jest uruchomiony przed uruchomieniem aplikacji frontendowej.

Przykładowy endpoint wykorzystywany przez aplikację:

```text
POST http://localhost:8000/getDistance.php
```

## Struktura projektu

```text
src/
├── api/            # Komunikacja z backendem
├── components/     # Komponenty Vue
├── types/         # Typy
├── utils/          # Funkcje użytkowe
├── App.vue
└── main.ts
```

## Technologie

* Vue.js
* TypeScript
* Fetch API
* CSS

## Uwagi

* Aplikacja wymaga działającego backendu PHP.
* Backend powinien mieć poprawnie skonfigurowany CORS.
* Domyślnie frontend działa na porcie `5173`, a backend na porcie `8000`.
