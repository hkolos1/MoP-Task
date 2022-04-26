# Ministry of Programming Task

![](https://www.fit.ba/content/9b0ba13d-fbb6-4c0b-b28f-cf919bd574c3)

# Uvod
Potrebno je napraviti Aplikaciju na kojoj korisnici mogu da se registruju i nakon uspješne registracije da postavljaju pitanja.
Svi drugi registrovani korisnici mogu da daju odgovor. Također, korisnici mogu da daju svoj rating na pitanje i odgovor (thumbs up/down ili like i dislike)

# Specifikacija zahtjeva

Potrebno je napraviti:
### 1. Homepage sa sljedećim elementima
* lista sa zadnjih 20 pitanja sa load more funkcionalnosti
* listu ljudi sa najviše odgovora
* listu pitanja sa najviše lajkova (hot questions)
### 2. Question page
* prikaz pitanja i svih detalja (kao i odgovora)
* ukoliko je korisnik logiran prikazati formu za dodavanje novog odgovora
* ukoliko je korisnik logiran i prethodno dao odgovor, potrebno je prikazati edit i delete dugmad i implementirati njihovu funkcionalnost
### 3. My questions
* lista sa zadnjih 20 pitanja koje je korisnik postavio sa load more funkcionalnosti
### 4. Login page
* forma za login sa email i password poljima
* client side validacija za email
* client side validacija za password (dozing passworda minimal 5 karaktera)
### 5. Register page
* forma za registraciju sa sljedećim poljima: ime, prezime, email, password
* client side validacija za email i password (ime i prezime su opcionalni)
### 6. Profile page
* prikazati korisničke informacije
* forma za izmjenu korisničkih informacija
* forma za promjenu passworda
### 7. Logovani korisnik treba da dobije notifikaciju kada neko odgovori na njegovo pitanje.

# Tehnička specifikacija

### Backend:
* Specifičnosti implementacije na backendu nisu bitne za ovaj task, jer se primarno radi o React testu.
* Moguće je implementirati sopstveni backend u bilo kom programskom jeziku ili frameworku, ali preporučljivo je
da se koristi neka od opcija fake REST API, kako se ne bi gubilo vrijeme. Jedan primjer je JSON server:
https://github.com/typicode/json-server
* Ovaj fake API ima i opcije paginacije, sortiranja, searcha, itd.
### Frontend:
* Potrebno je koristiti React >=16.8.0 verziju.
* Potrebno je koristiti hooks
* Potrebno je koristiti Redux Saga ili Redux Thunk (preferirano redux saga)
* Koristiti neki od popularnih HTML/CSS frameworks (Bootstrap, Zurb Foundation, Material Design Lite…)

### DevOps:
* Potrebno je napraviti CI/CD pipeline sa samo jednim environmentom gdje će se izmjene na master branchu
propagirati direktno u produkciju. Pipeline može biti implementiran proizvoljno sve dok je moguće vidjeti definicije (obično u nekom .yml fileu). 
* Odabir hosting platforme se ostavlja na izbor kandidatu.
* Završen zadatak je potrebno postaviti na GitHub ili Bitbucket repository.
