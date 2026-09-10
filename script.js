* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f3f6fa;
    color: #173f73;
}


/* HEADER */

.header {
    background: white;
    min-height: 125px;
    display: flex;
    align-items: center;
    padding: 20px 7%;
    border-bottom: 1px solid #dce5ef;
}

.logo-area {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 38%;
}

.logo {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: #175493;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
}

.logo-area strong {
    display: block;
    font-size: 25px;
}

.logo-area span {
    color: #71839a;
    font-size: 11px;
}

.header-title {
    border-left: 1px solid #dce5ef;
    padding-left: 30px;
}

.header-title h1 {
    font-size: 23px;
    line-height: 1.25;
}


/* MENU */

.menu {
    background: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #dce5ef;
}

.menu button {
    border: none;
    background: white;
    color: #174d8b;
    padding: 17px 18px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}

.menu button:hover {
    background: #176fc1;
    color: white;
}


/* MAIN */

main {
    width: 90%;
    max-width: 1150px;
    margin: 30px auto;
}

.page {
    display: none;
}

.page.active {
    display: block;
}


/* HERO */

.hero {
    background: white;
    border-radius: 20px;
    padding: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 30px rgba(30, 70, 110, .08);
}

.tag {
    color: #1875c5;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
}

.hero h2 {
    font-size: 42px;
    margin: 12px 0;
}

.hero p {
    color: #64788e;
    max-width: 650px;
    line-height: 1.6;
}

.hero-icon {
    font-size: 110px;
    background: #e9f3ff;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}


/* BUTTON */

.primary-button {
    border: none;
    background: #176fc1;
    color: white;
    padding: 14px 22px;
    border-radius: 9px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
}

.primary-button:hover {
    background: #0e5596;
}


/* CARDS */

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 22px;
}

.card {
    background: white;
    padding: 27px;
    border-radius: 17px;
    box-shadow: 0 6px 20px rgba(30,70,110,.07);
}

.clickable {
    cursor: pointer;
}

.clickable:hover {
    transform: translateY(-3px);
}

.card-icon {
    font-size: 35px;
}

.card h3 {
    margin: 15px 0 8px;
}

.card p {
    color: #6b7d91;
    line-height: 1.5;
}

.card span {
    display: block;
    margin-top: 15px;
    color: #1674cc;
    font-weight: bold;
}


/* RESTRICTED */

.restricted {
    margin-top: 22px;
    background: #123f70;
    color: white;
    border-radius: 17px;
    padding: 25px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.restricted small {
    color: #8dc7fa;
}

.restricted p {
    color: #c7d9eb;
    margin-top: 5px;
}

.restricted button {
    border: 1px solid #8fc8f5;
    background: transparent;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
}


/* SECTION */

.section-title {
    margin-bottom: 25px;
}

.section-title span {
    color: #1674cc;
    font-size: 11px;
    font-weight: bold;
}

.section-title h2 {
    font-size: 32px;
    margin: 8px 0;
}

.section-title p {
    color: #687d92;
}


/* CONTENT */

.content-box,
.contact-box,
.chart-card {
    background: white;
    border-radius: 18px;
    padding: 30px;
    box-shadow: 0 6px 22px rgba(30,70,110,.07);
}

.content-box h3 {
    margin-bottom: 8px;
    margin-top: 20px;
}

.content-box h3:first-child {
    margin-top: 0;
}

.content-box p {
    color: #61768c;
    line-height: 1.7;
}


/* PROJECT */

.project-card {
    background: white;
    border-radius: 18px;
    padding: 35px;
    display: flex;
    gap: 25px;
    align-items: center;
    box-shadow: 0 7px 25px rgba(30,70,110,.08);
}

.project-icon {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: #e8f3ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
}

.project-card p {
    color: #64788e;
    line-height: 1.6;
    margin-top: 10px;
}


/* GAME */

.game-area {
    background: white;
    margin-top: 25px;
    padding: 30px;
    border-radius: 18px;
    box-shadow: 0 7px 25px rgba(30,70,110,.08);
}

.hidden {
    display: none !important;
}

.game-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.game-header small {
    color: #1674cc;
    font-weight: bold;
}

.game-score {
    background: #edf6ff;
    padding: 10px 20px;
    text-align: center;
    border-radius: 10px;
}

.game-score strong {
    display: block;
    font-size: 25px;
    color: #176fc1;
}

.progress-info {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 13px;
}

.progress {
    height: 8px;
    background: #e3eaf1;
    border-radius: 20px;
    margin-top: 8px;
}

#progressBar {
    width: 20%;
    height: 100%;
    background: #176fc1;
    border-radius: 20px;
}

.question-box {
    margin-top: 25px;
    background: #f3f8fd;
    border: 1px solid #dce8f3;
    padding: 25px;
    border-radius: 14px;
}

.question-box small {
    color: #1674cc;
    font-weight: bold;
}

.question-box h3 {
    margin-top: 10px;
    line-height: 1.5;
}

.answers {
    display: grid;
    gap: 12px;
    margin-top: 20px;
}

.answer {
    background: white;
    border: 2px solid #dce5ed;
    padding: 16px;
    border-radius: 10px;
    text-align: left;
    cursor: pointer;
    color: #244d73;
}

.answer:hover {
    border-color: #1674cc;
    background: #f5faff;
}

.answer.correct {
    background: #e7f8ef;
    border-color: #1a9a61;
}

.answer.wrong {
    background: #fff0ef;
    border-color: #d9534f;
}

.feedback {
    margin-top: 15px;
    padding: 15px;
    border-radius: 10px;
}

.feedback.correct {
    background: #e7f8ef;
    color: #176b48;
}

.feedback.wrong {
    background: #fff0ef;
    color: #9d332e;
}


/* RESULT */

.result {
    text-align: center;
    background: white;
    margin-top: 25px;
    padding: 45px;
    border-radius: 18px;
}

.trophy {
    font-size: 65px;
}

.result > strong {
    display: block;
    font-size: 45px;
    color: #176fc1;
    margin: 15px;
}


/* TIPS */

.tips-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.tip-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 18px rgba(30,70,110,.06);
}

.tip-card > div {
    font-size: 35px;
}

.tip-card h3 {
    margin: 12px 0 8px;
}

.tip-card p {
    color: #667b90;
    line-height: 1.5;
}


/* STATS */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-bottom: 20px;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 5px 18px rgba(30,70,110,.06);
}

.stat-card span {
    font-size: 25px;
}

.stat-card strong {
    display: block;
    font-size: 30px;
    margin: 10px 0;
    color: #176fc1;
}

.stat-card p {
    color: #6c8093;
}

.bars {
    margin: 25px 0;
}

.bar-item {
    margin-bottom: 20px;
}

.bar-item span {
    font-size: 13px;
}

.bar {
    height: 13px;
    background: #e4ebf2;
    border-radius: 20px;
    margin-top: 7px;
    overflow: hidden;
}

.bar div {
    height: 100%;
    background: #176fc1;
}


/* NEWS */

.news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.news {
    background: white;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 5px 18px rgba(30,70,110,.06);
}

.news span {
    color: #1674cc;
    font-size: 11px;
    font-weight: bold;
}

.news h3 {
    margin: 12px 0;
}

.news p {
    color: #667b90;
    line-height: 1.5;
}

.news button {
    border: none;
    background: transparent;
    color: #1674cc;
    font-weight: bold;
    margin-top: 15px;
    cursor: pointer;
}


/* CONTACT */

.contact-box {
    max-width: 750px;
}

.contact-box label {
    display: block;
    margin-top: 16px;
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 13px;
}

.contact-box input,
.contact-box select,
.contact-box textarea,
.login-box input {
    width: 100%;
    border: 1px solid #d7e1ea;
    border-radius: 8px;
    padding: 13px;
    font-family: inherit;
}

.form-message {
    margin-top: 15px;
    font-weight: bold;
    color: #168254;
}


/* LOGIN */

.restricted-page {
    background: white;
    max-width: 550px;
    margin: auto;
    padding: 40px;
    text-align: center;
    border-radius: 18px;
    box-shadow: 0 7px 25px rgba(30,70,110,.08);
}

.lock {
    font-size: 60px;
}

.login-box {
    text-align: left;
    margin-top: 25px;
}

.login-box label {
    display: block;
    margin: 15px 0 6px;
    font-weight: bold;
    font-size: 13px;
}

.login-box .primary-button {
    width: 100%;
}


/* FOOTER */

footer {
    margin-top: 50px;
    background: #123f70;
    color: white;
    padding: 30px 7%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;
}


/* RESPONSIVO */

@media (max-width: 850px) {

    .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    .logo-area {
        width: 100%;
    }

    .header-title {
        border: none;
        padding-left: 0;
    }

    .cards,
    .tips-grid,
    .news-grid,
    .stats {
        grid-template-columns: 1fr;
    }

    .hero {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
    }

    .hero h2 {
        font-size: 32px;
    }

    .hero-icon {
        width: 130px;
        height: 130px;
        font-size: 70px;
    }

    .project-card {
        flex-direction: column;
        align-items: flex-start;
    }

    .restricted {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }

    footer {
        flex-direction: column;
    }
}
