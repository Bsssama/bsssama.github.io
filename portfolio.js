/* Create Responsible Menu */

let menu_btn = document.getElementById("menu_btn");
let links = false;

function showLinks() {
    if (links === false) {
        document.getElementById("mobile").style.height = 160 + "px";
        document.getElementById("mobile").style.transition = 500 + "ms";
        links = true;
    }

    else {
        document.getElementById("mobile").style.height = 80 + "px";
        document.getElementById("mobile").style.transition = 500 + "ms";
        links = false;
    }
}

menu_btn.onclick = showLinks;

/* Create Responsible Hero Title */

function heroFontSize() {
    let frontendTitle = document.getElementById("front");
    let developerTitle = document.getElementById("dev");
    let heroTitleWidth = document.getElementById("title").offsetWidth;

    frontendTitle.style.fontSize = heroTitleWidth/10 + "px";
    developerTitle.style.fontSize = heroTitleWidth/10 + "px";


}

window.onload = heroFontSize;
window.onresize = heroFontSize;

/*Projects*/

let proj_1 = document.getElementById("project_1");
let proj_1Click = false;

function projOneDescriptionClick() {
        document.getElementById("description_1").style.top = 0 + "%";
        document.getElementById("description_1").style.transition = 250 + "ms";
        proj_1Click = true;
}

function projOneDescriptionOut() {
    document.getElementById("description_1").style.top = 100 + "%";
    document.getElementById("description_1").style.transition = 250 + "ms";
    proj_1Click = false;
}

proj_1.onclick = projOneDescriptionClick;
proj_1.onmouseleave = projOneDescriptionOut;

/*------------------------------------------------------------------------*/

let proj_2 = document.getElementById("project_2");
let proj_2Click = false;

function projTwoDescriptionClick() {
        document.getElementById("description_2").style.top = 0 + "%";
        document.getElementById("description_2").style.transition = 250 + "ms";
        proj_2Click = true;
}

function projTwoDescriptionOut() {
    document.getElementById("description_2").style.top = 100 + "%";
    document.getElementById("description_2").style.transition = 250 + "ms";
    proj_2Click = false;
}

proj_2.onclick = projTwoDescriptionClick;
proj_2.onmouseleave = projTwoDescriptionOut;

/*------------------------------------------------------------------------*/

let proj_3 = document.getElementById("project_3");
let proj_3Click = false;

function projThreeDescriptionClick() {
        document.getElementById("description_3").style.top = 0 + "%";
        document.getElementById("description_3").style.transition = 250 + "ms";
        proj_3Click = true;
}

function projThreeDescriptionOut() {
    document.getElementById("description_3").style.top = 100 + "%";
    document.getElementById("description_3").style.transition = 250 + "ms";
    proj_3Click = false;
}

proj_3.onclick = projThreeDescriptionClick;
proj_3.onmouseleave = projThreeDescriptionOut;

/* Create Language Change */

let rusLanguageBtn = document.getElementById("rus");
let engLanguageBtn = document.getElementById("eng");
let rusLanguageMobileBtn = document.getElementById("mobile_rus");
let engLanguageMobileBtn = document.getElementById("mobile_eng");

function rusLanguage() {

    rusLanguageBtn.style.opacity = 100 + "%";
    rusLanguageBtn.style.textDecoration = "underline";
    rusLanguageMobileBtn.style.opacity = 100 + "%";
    rusLanguageMobileBtn.style.textDecoration = "underline";


    engLanguageBtn.style.opacity = 50 + "%";
    engLanguageBtn.style.textDecoration = "none";
    engLanguageMobileBtn.style.opacity = 50 + "%";
    engLanguageMobileBtn.style.textDecoration = "none";


    document.getElementById("about_link").innerHTML = 'Обо мне';
    document.getElementById("projects_link").innerHTML = 'Проекты';
    document.getElementById("contacts_link").innerHTML = 'Контакты';
    document.getElementById("about_mobile_link").innerHTML = 'Обо мне';
    document.getElementById("projects_mobile_link").innerHTML = 'Проекты';
    document.getElementById("contacts_mobile_link").innerHTML = 'Контакты';
    document.getElementById("front").innerHTML = 'ФРОНТЕНД';
    document.getElementById("dev").innerHTML = '&nbsp&nbsp&nbsp&nbsp&nbspРАЗРАБОТЧИК';
    document.getElementById("introduction").innerHTML = 'Привет. Меня зовут Сергей. Мне было бы интересно принимать участие в ваших проектах, расти, как специалист, и быть частью команды.';
    document.getElementById("skills").innerHTML = 'Навыки:';
    document.getElementById("contact_me_btn").innerHTML = 'СВЯЗАТЬСЯ';
    document.getElementById("description_header").innerHTML = '"Практика - путь к мастерству"';
    document.getElementById("description_paragraph_1").innerHTML = 'Моя карьера началась в 2014 году в качестве инженера-технолога в Самарском Космическом Центре. С того момента я получил опыт работы технологом и конструктором на производстве, освоил программирование станков с числовым управлением и получил опыт разработки производственного оборудования.';
    document.getElementById("description_paragraph_2").innerHTML = 'В 2022-ом я принял решение реализовать себя в чем-то новом и начал осваивать веб-разработку на <a href="https://www.codecademy.com/" class="ca_link" target="_blank">Codecademy</a>.';
    document.getElementById("description_paragraph_3").innerHTML = 'Сегодня я продолжаю осваивать инструменты и технологии для веб-разработки и ищу работу для профессионального роста в окружении опытных специалистов.';
    document.getElementById("projects_header").innerHTML = '//Проекты';
    document.getElementById("contacts_header").innerHTML = '//Контакты';
    document.getElementById("contacts_data_paragraph").innerHTML = 'Есть интересное предложение? Свяжитесь со мной любым удобным способом.';

    document.getElementById("project1_header").innerHTML = 'Книжный магазин';
    document.getElementById("project1_paragraph").innerHTML = 'Этот проект представляет десктопную версию сайта книжного магазина.';
    document.getElementById("project1_techs").innerHTML = 'Технологии:';
    
    document.getElementById("project2_header").innerHTML = 'Корпоративный сайт';
    document.getElementById("project2_paragraph").innerHTML = 'Этот проект представляет десктопную версию корпоративного сайта.';
    document.getElementById("project2_techs").innerHTML = 'Технологии:';
    
    document.getElementById("project3_header").innerHTML = 'Сайт ресторана';
    document.getElementById("project3_paragraph").innerHTML = 'Этот проект представляет десктопную версию сайта ресторана.';
    document.getElementById("project3_techs").innerHTML = 'Технологии:';
}


function engLanguage() {

    rusLanguageBtn.style.opacity = 50 + "%";
    rusLanguageBtn.style.textDecoration = "none";
    rusLanguageMobileBtn.style.opacity = 50 + "%";
    rusLanguageMobileBtn.style.textDecoration = "none";

    engLanguageBtn.style.opacity = 100 + "%";
    engLanguageBtn.style.textDecoration = "underline";
    engLanguageMobileBtn.style.opacity = 100 + "%";
    engLanguageMobileBtn.style.textDecoration = "underline";


    document.getElementById("about_link").innerHTML = 'About';
    document.getElementById("projects_link").innerHTML = 'Projects';
    document.getElementById("contacts_link").innerHTML = 'Contacts';
    document.getElementById("about_mobile_link").innerHTML = 'About';
    document.getElementById("projects_mobile_link").innerHTML = 'Projects';
    document.getElementById("contacts_mobile_link").innerHTML = 'Contacts';
    document.getElementById("front").innerHTML = 'FRONTEND';
    document.getElementById("dev").innerHTML = '&nbsp&nbsp&nbsp&nbsp&nbspDEVELOPER';
    document.getElementById("introduction").innerHTML = 'Hello. My name is Sergey. I am interested to participate in your projects, to grow up as a specialist and to be a part of team.';
    document.getElementById("skills").innerHTML = 'Skills:';
    document.getElementById("contact_me_btn").innerHTML = 'CONTACT ME';
    document.getElementById("description_header").innerHTML = '"Practice makes perfect"';
    document.getElementById("description_paragraph_1").innerHTML = 'I begun my career in 2014 as a processing engineer in Samara Space Center. Since that I have worked as designer and processing engineer at mechanical engineering, learned programming CNC machines and developed special equipment.';
    document.getElementById("description_paragraph_2").innerHTML = 'In 2022 a decided realized myself in something new and started learning web development at <a href="https://www.codecademy.com/" class="ca_link" target="_blank">Codecademy</a>.';
    document.getElementById("description_paragraph_3").innerHTML = 'This days I continuously work on my hard skills, looking for a job so that to grow up as a professional among experienced teammates.';
    document.getElementById("projects_header").innerHTML = '//Projects';
    document.getElementById("contacts_header").innerHTML = '//Contacts';
    document.getElementById("contacts_data_paragraph").innerHTML = 'Have interesting offer? Contact me any convenient way!';

    document.getElementById("project1_header").innerHTML = 'Books Shop';
    document.getElementById("project1_paragraph").innerHTML = 'This project represents the desctop layout of book\'s shop web-site.';
    document.getElementById("project1_techs").innerHTML = 'Techs:';
    
    document.getElementById("project2_header").innerHTML = 'Company Web Page';
    document.getElementById("project2_paragraph").innerHTML = 'This project represents desctop version of company\'s web page.';
    document.getElementById("project2_techs").innerHTML = 'Techs:';
    
    document.getElementById("project3_header").innerHTML = 'Restaurant Web Page';
    document.getElementById("project3_paragraph").innerHTML = 'This project represents desctop version of restaurant\'s web page.';
    document.getElementById("project3_techs").innerHTML = 'Techs:';
}

rusLanguageBtn.onclick = rusLanguage;
engLanguageBtn.onclick = engLanguage;
rusLanguageMobileBtn.onclick = rusLanguage;
engLanguageMobileBtn.onclick = engLanguage;





