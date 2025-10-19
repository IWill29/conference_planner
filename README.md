Konferences plānotājs
Projekta apraksts
Šis ir tīmekļa lietojumprogrammas projekts, kas izstrādāts, lai palīdzētu plānot un pārvaldīt konferences. Lietotne piedāvā ērtu saskarni konferences sesiju, runātāju vai dalībnieku organizēšanai. Projekts izmanto modernu React arhitektūru ar Redux stāvokļa pārvaldībai un React Router lapu navigācijai. Tas ir izveidots ar pielāgojamu, tumšu lietotāja saskarni, kas nodrošina elegantu un responsīvu dizainu.
Projekta autors: Agnis Kulakovs
Funkcionalitāte

Sākumlapa (Landing Page): Ievada lietotājus konferenču plānošanas rīkā ar pievilcīgu dizainu un skaidru navigāciju.
Izvēles lapa (Selection Page): Ļauj lietotājiem atlasīt vai konfigurēt konferences detaļas, piemēram, sesijas vai dalībniekus.
Modālais logs: Parāda izvēļu kopsavilkumu, nodrošinot pārskatu par plānošanas rezultātiem.
Responsīvs dizains: Pielāgojas dažādām ierīcēm (datori, planšetes, mobilie tālruņi).
Tumšais dizains: Moderns, acīm draudzīgs interfeiss ar gradientu akcentiem un smalkiem efektiem, piemēram, blur galvenē.

Tehnoloģijas

React: Frontend bibliotēka lietotāja saskarnes veidošanai.
React Router: Nodrošina navigāciju starp lapām (sākumlapa un izvēles lapa).
Redux: Stāvokļa pārvaldība globālai datu plūsmai.
Tailwind CSS: Stilu veidošana ar pielāgojamām CSS klasēm (index.css).
JavaScript (ES6+): Mūsdienīga sintakse un asinhronā funkcionalitāte.
CDN resursi: React un citas atkarības tiek ielādētas caur CDN (nav iekļautas lokālās node_modules).

Uzstādīšana

Klonēt repozitoriju:git clone https://github.com/IWill29/conference_planner.git


Atver index.html pārlūkprogrammā:Tā kā projekts izmanto CDN resursus, nav nepieciešams instalēt atkarības ar npm. Vienkārši atver index.html pārlūkprogrammā, lai palaistu lietotni lokāli.

Lietošana

Atver lietotni pārlūkprogrammā.
Sākumlapā iepazīsties ar konferenču plānošanas funkcionalitāti.
Navigē uz izvēles lapu (/select), lai atlasītu sesijas vai dalībniekus.
Izmanto modālo logu, lai apskatītu plānošanas kopsavilkumu.
Interfeiss automātiski pielāgojas ekrāna izmēram, nodrošinot ērtu lietošanu jebkurā ierīcē.

Projekta struktūra

main.jsx: Galvenais ienākšanas punkts, kas inicializē React lietotni ar Redux un React Router.
App.jsx: Definē galveno lietotnes komponenti ar maršrutiem un globālo navigāciju.
index.css: Pielāgoti stili ar tumšu tēmu, gradientiem un responsīvu dizainu.
components/: Satur atkārtoti lietojamus komponentus, piemēram, Navbar un ShowDetailsModal.
pages/: Satur lapu komponentus, piemēram, LandingPage un SelectionPage.
