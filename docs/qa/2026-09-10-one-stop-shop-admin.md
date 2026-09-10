# One Stop Shop & admin — implementare și verificare

Data: 10 septembrie 2026. Modificări locale; fără commit, push sau deployment.

## Modificări

- One Stop Shop: fotografii existente din proiectul Wassenaar, 2880 × 1920, în locul bannerelor decupate excesiv și al surselor mai mici. Imaginile din pagina One Stop Shop folosesc calitatea 95; cele șase servicii sunt verificate prin click/tastatură pe desktop și mobil.
- Admin: logo dimensionat în interiorul sidebarului, tipografie dedicată, navigare mobilă pliabilă, spațiere și focus vizibil. Programările sunt prezentate în rânduri/carduri adaptabile; programul săptămânal și detaliile clienților se încadrează pe mobil.
- Notele au confirmare de salvare și protecție la click repetat. Erorile de export, ștergere și modificare a echipei sunt afișate. La schimbarea colecției se curăță datele precedente.
- Propunerea unei programări folosește un dialog cu dată/oră Amsterdam, cu conversie explicită și verificarea orelor inexistente la schimbarea orei. Acțiunile pentru stări terminale nu mai sunt afișate.
- Acceptarea linkului semnat nu mai pornește o sesiune anonimă care putea înlocui sesiunea adminului în timpul restaurării autentificării.
- Componenta reutilizată de animație nu mai produce depășiri laterale pe mobil și respectă preferința pentru mișcare redusă.
- URL-urile imaginilor cu caractere speciale au fost reparate pe About, Horezu și Ravi Roy. Pentru două fotografii Ravi Roy există copii identice cu nume URL simple; originalele sunt păstrate. About cere acum o calitate permisă de configurația Next.js.
- Galeria Wassenaar nu mai referă 14 fișiere inexistente. Luxury Stores folosește varianta existentă 1024 × 768 a fotografiei 04.
- Firebase CLI este instalat local pentru compatibilitate cu SDK-ul Functions. Playwright pornește Java 21 disponibil prin Homebrew și închide controlat serverele.

## Rezultate

| Verificare | Rezultat |
| --- | --- |
| TypeScript | Trecut |
| ESLint pe fișierele modificate | Trecut |
| Unitare aplicație | 10/10 |
| Unitare Firebase Functions | 4/4 |
| Reguli Firestore / Storage | 6/6, proiect demo separat |
| Suită Playwright completă | 217/217, Chromium și mobil Chromium |
| Smoke final pe build normal | 6/6: cinci galerii și login la trei lățimi |
| Build Next.js normal de producție | Trecut în rularea smoke finală |
| `git diff --check` | Trecut |

Suita completă verifică 67 de pagini publice la 360, 768 și 1440 px: încărcare, titlu vizibil, erori JavaScript, depășire orizontală și captură. Cele cinci pagini autentificate din admin sunt verificate la 360, 390, 768, 1024 și 1440 px, inclusiv navigarea mobilă. Login este verificat separat la 360, 768 și 1440 px, inclusiv afișarea/ascunderea parolei.

Fluxul CRUD rulează în browser cu Firebase Auth, Firestore, Storage și Functions reale în emulatoare: creare cerere cu fișier, citire în admin, confirmare, propunere/acceptare prin link semnat, notă cu persistență după reload, export JSON, anulare și ștergere. După ștergere se verifică direct în Firestore absența clientului, notelor și programărilor asociate. Alte teste verifică rezervări concurente, permisiuni staff, salvarea setărilor și invitarea/modificarea/dezactivarea/reactivarea unui membru.

## Dovezi locale

- `artifacts/qa-2026-09-10/test-results-final.log` — suita completă.
- `artifacts/qa-2026-09-10/test-rules-final.log` — regulile de securitate.
- `artifacts/qa-2026-09-10/public-smoke.log` — build normal și ultimele șase verificări.
- `artifacts/qa-2026-09-10/` — capturi admin și One Stop Shop.
- `test-results/` — capturi responsive pentru paginile publice; acestea sunt regenerate de Playwright.

Artefactele sunt ignorate de Git. Fotografiile și datele proiectului nu au fost înlocuite cu materiale generate artificial.

## Rerulare

```sh
npm run typecheck
npm test
npm run test:functions
npm run test:e2e -- --workers=3
npm run test:public
```

Testele E2E necesită configurarea Firebase web locală și secrete de emulator în `functions/.secret.local`, cu SMTP către localhost. Au folosit doar emulatoare; nu au creat clienți sau membri în producție. Pentru testele regulilor este necesar Java 21; în mediul verificat:

```sh
JAVA_HOME=/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home PATH=/opt/homebrew/opt/openjdk@21/bin:$PATH npm run test:rules
```

## Limitele verificării

Nu s-a făcut deployment. Confirmarea CRUD este pentru emulatoare, nu pentru contul admin din producție. Emailurile au fost verificate ca joburi generate, iar șabloanele au teste unitare; livrarea SMTP către destinatari reali nu a fost testată. Responsive a fost verificat în Chromium cu viewporturi/emulare mobilă, nu pe dispozitive fizice sau în Safari. Verificarea automată a tuturor paginilor nu reprezintă o testare a fiecărei interacțiuni existente pe site; fluxurile detaliate mai sus au fost parcurse explicit.
