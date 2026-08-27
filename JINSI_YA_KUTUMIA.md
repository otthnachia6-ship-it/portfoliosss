# Jinsi ya kutumia mradi huu

Mradi una folder mbili: `frontend` (React) na `backend` (Spring Boot).

## 1. Backend (Spring Boot)

Folder ya `backend` tayari ina kila kitu kinachohitajika (`mvnw.cmd`, `mvnw`, na `.mvn`) - huna
haja ya kunakili chochote kutoka project nyingine.

Fungua Command Prompt (siyo PowerShell - kama unatumia PowerShell tumia `.\mvnw.cmd`) ndani ya
folder ya `backend` na andika:

```
.\mvnw.cmd spring-boot:run
```

Backend itaanza kwenye: http://localhost:8080
Jaribu kufungua: http://localhost:8080/api/questions - unatakiwa uone maswali kwa muundo wa JSON.

## 2. Frontend (React)

Fungua Command Prompt (dirisha jingine, tofauti na la backend) ndani ya folder ya `frontend`, kisha:

```
npm install
npm start
```

`npm install` itapakua maktaba zote zinazohitajika (react-router-dom n.k.) - fanya hii mara moja tu.
Baada ya hapo, `npm start` itafungua browser kwenye http://localhost:3000

## 3. Kuangalia kama vyote vinafanya kazi pamoja

1. Hakikisha **backend** inaendesha kwanza (terminal moja)
2. Kisha **frontend** (terminal nyingine)
3. Fungua http://localhost:3000/quiz - kama backend inaendesha, utaona maswali matatu.
   Kama huoni, hakikisha backend ipo kwenye port 8080.

## Muundo wa folder

```
portfolio-project/
├── backend/                          <- Spring Boot
│   ├── pom.xml
│   └── src/main/java/com/example/backend/
│       ├── BackendApplication.java   <- Kianzio cha programu
│       ├── controller/QuizController.java  <- API ya maswali
│       └── model/Question.java       <- Muundo wa swali moja
│
└── frontend/                         <- React
    └── src/
        ├── App.js                    <- Routes (kurasa)
        ├── components/Navbar.js      <- Menyu ya juu
        └── pages/
            ├── Home.js                <- kutoka index.html
            ├── About.js               <- kutoka about.html
            ├── Contact.js             <- kutoka contact.html
            └── Quiz.js                <- ukurasa mpya wa quiz
```

## Kuongeza maswali zaidi

Fungua `backend/src/main/java/com/example/backend/controller/QuizController.java`,
uongeze mistari zaidi ya `questions.add(new Question(...))` kufuatana na muundo uliopo.
