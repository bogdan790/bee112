# Faza 3 - UI-Interfata Utilizator&Schita pagini Home

## 1️⃣ Ce este UI (Interfața Utilizator) – pe românește

**Interfața utilizator** =

👉 *tot ce vede, atinge și folosește omul pe site*:

- textul
- butoanele
- pozele
- culorile
- spațiile dintre elemente
- ordinea informațiilor pe pagină

📌 **Diferența clară față de UX** (ce am făcut până acum):

- **UX** = *logica și gândirea*: unde ajunge omul, ce pas urmează
- **UI** = *desenul concret*: cum arată pagina aceea

---

## 2️⃣ Ce este „schița paginii” (wireframe) – spus simplu

**Schița paginii** NU este design final, NU este frumos.

Este un **plan de construcție**, ca la o casă.

👉 Practic răspunde la:

- ce apare primul pe ecran
- ce e mai mare
- ce e mai jos
- unde e butonul de acțiune
- ce vede utilizatorul în primele 3–5 secunde

📌 Fără culori fancy, fără logo final – doar structură.

---

## 3️⃣ Principiul de bază pentru Home BEE112

🔴 **Omul intră pe site în PANICĂ**

De aceea pagina Home trebuie să aibă:

1. **calmare**
2. **claritate**
3. **direcție**

⛔ NU:

- texte lungi
- multe butoane diferite
- meniuri complicate

✅ DA:

- 1 mesaj clar
- 1 acțiune principală
- informații esențiale la 1 click distanță

---

## 4️⃣ Structura logică a paginii Home (de sus în jos)

### 🔹 ZONA 1 — Prima vedere (cea mai importantă)

👉 Ce vede omul **fără să dea scroll**:

**Mesaj principal (mare, clar):**

> „Ai găsit un roi de albine?
> 
> 
> Nu le omorî. Te ajutăm să le salvăm.”
> 

**Sub-mesaj calmant:**

> „Intervenții gratuite | Voluntari apicultori | București”
> 

**BUTON MARE (unul singur):**

🟡 **„Am găsit un roi de albine”**

📌 Acesta este butonul de „panică”, dar **nu duce la o pagină goală**.

---

### 🔹 ZONA 2 — Ce se întâmplă după click (încredere)

Titlu simplu:

> Cum funcționează BEE112
> 

3 pași clari, icon + text scurt:

1️⃣ Ne suni sau completezi formularul

2️⃣ Evaluăm situația (telefon / WhatsApp)

3️⃣ Trimitem un apicultor voluntar

📌 Omul trebuie să simtă:

👉 *„ok, e simplu, nu sunt singur”*

---

### 🔹 ZONA 3 — De ce să aibă încredere

Titlu:

> Lucrăm împreună cu autoritățile
> 

Aici apar, **în ordinea stabilită de tine**:

- 112 / ISU (fără detalii sensibile)
- ADP
- Poliția Locală
- Apicultori voluntari

📌 Fără promisiuni exagerate.

Doar: *„suntem cunoscuți și apelați”*.

---

### 🔹 ZONA 4 — Educație scurtă (nu speria)

Titlu:

> Ce să NU faci dacă vezi un roi
> 

3–4 bullet-uri:

- ❌ Nu stropi cu insecticide
- ❌ Nu arunca cu apă
- ❌ Nu încerca să îl distrugi

Buton mic:

🔵 **„Află mai multe despre roiuri”**

📌 Cine are timp → citește

📌 Cine e în panică → ignoră și sună

---

### 🔹 ZONA 5 — Reasigurare finală

Text scurt, uman:

> „Albinele nu sunt agresive când roiesc.
> 
> 
> În peste 90% din cazuri, intervenția este simplă și sigură.”
> 

Buton secundar:

🟢 **„Contact rapid BEE112”**

---

## 5️⃣ Reguli UI OBLIGATORII pentru dezvoltator

📌 Astea trebuie scrise clar în Story pentru dev:

- 📱 **Mobil = prioritate absolută**
- Butonul principal vizibil **mereu**
- Text mare, contrast bun
- Maxim 2 butoane vizibile simultan
- Fiecare pagină secundară are:
    - buton: „Ai găsit un roi? Apasă aici”
- 

## 🐝 REGULA SUPREMĂ BEE112 (o scriem mare)

> BEE112 NU colectează formulare în situații de urgență.
BEE112 funcționează prin apel telefonic direct.
> 

Asta trebuie să fie:

- în capul nostru
- în UI
- în Story pentru dev
- în ADN-ul site-ului

---

## 🔁 Fluxul REAL (corect, simplu, uman)

### Cum funcționează BEE112 — versiunea FINALĂ

**PAS 1️⃣**

📞 **Suni la BEE112**

> „Vorbim calm și înțelegem situația”
> 

**PAS 2️⃣**

🐝 **Trimitem un apicultor voluntar**

❌ Fără:

- formulare
- conturi
- „completează câmpurile”
- pași inutili

---

## 📱 Ce înseamnă asta în UI (foarte concret)

### 🔹 Butonul principal NU mai este „Formular”

❌ „Completează formular”

❌ „Trimite solicitare”

✅ **„Sună acum – BEE112”**

✅ **„Ai găsit un roi? Sună-ne”**

📌 Butonul trebuie să:

- sune direct (tap = apel)
- fie vizibil non-stop pe mobil
- fie cel mai mare element interactiv

---

## 🔹 Structura Home – ajustată după ce ai spus

### ZONA 1 – PANICĂ CONTROLATĂ

**Text mare:**

> Ai găsit un roi de albine?
> 
> 
> **Nu le omorî. Sună-ne.**
> 

**Buton MARE:**

📞 **Sună acum – BEE112**

Subtext mic:

> Vorbim calm. Evaluăm situația. Trimitem un apicultor.
> 

---

### ZONA 2 – Cum funcționează (2 pași, nu 3)

❌ eliminăm complet formularul

✅ **Cum funcționează BEE112**

1️⃣ **Suni și discutăm calm**

2️⃣ **Trimitem un apicultor voluntar**

📌 Exact ca 112. Fără bullshit.

---

### ZONA 3 – Detalii (dar NU înainte de apel)

Foarte important ce ai spus:

👉 **detaliile (adresă, mărime, comportament)**

👉 **se cer LA TELEFON**, nu pe site

Pe site scriem doar:

> „La telefon îți vom cere câteva detalii simple:
> 
> 
> unde este roiul, cât de mare pare, dacă e accesibil.”
> 

Atât. Fără liste lungi.

---

## 🚨 De ce formularele sunt OBLIGATORIU scoase

Scriem asta explicit pentru dev:

- oamenii în stres **nu scriu**
- formularele:
    - cresc abandonul
    - distrug încrederea
    - par „birocrație”
- telefonul = **contact uman real**

📌 BEE112 este:

- voce
- calm
- decizie rapidă

NU:

- click-uri
- câmpuri
- confirmări automate
