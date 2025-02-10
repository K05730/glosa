# Glosa - Glosövningsapp

Glosa är en interaktiv glosövningsapp där du kan träna på engelska glosor genom att stava orden korrekt och samla poäng.

## Funktioner
- Träna på glosor genom att skriva in rätt ord.
- Använd ledtrådar för att få hjälp.
- Samla poäng och följ din streak.
- Mobilvänlig design.

---

## Installation & Uppstart

### **1. Klona repo:t**
Om du inte redan har klonat repo:t, kör:
```sh
git clone https://github.com/K05730/glosa.git
cd glosa/glosa-app
```

### **2. Installera beroenden**
Se till att du har **Node.js** installerat. Installera beroenden:
```sh
npm install
```

### **3. Starta appen**
```sh
npm run dev
```

Appen körs nu på **http://localhost:3000**.

---

## Bygga och distribuera
Om du vill bygga för produktion:
```sh
npm run build
npm start
```

---

## Service Worker
Appen har **PWA-stöd**, vilket innebär att den kan fungera offline.
Om du vill aktivera Service Worker, se till att **sw.js** är registrerad korrekt i **_app.js**:
```js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

## Teknologier
- **Next.js** - React-baserat ramverk.
- **Tailwind CSS** - Styling.
- **Lucide Icons** - Ikoner.
- **PWA-stöd** med **Service Worker**.

---

## Felsökning
Om du får problem, prova:
1. Radera `node_modules` och `package-lock.json`:
   ```sh
   rm -rf node_modules package-lock.json
   npm install
   ```
2. Starta om dev-servern:
   ```sh
   npm run dev
   ```

---

## Kontakt
Om du har frågor eller vill bidra till projektet, kontakta **Kris Ledel** eller skapa en issue på GitHub.

🚀 Lycka till med glosövningarna!

