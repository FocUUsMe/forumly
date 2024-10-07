    let appHello = document.querySelector('.app_hello');
    let contBtn = document.querySelector('#cont_btn');
    let appRegist = document.querySelector('.app_regist');
    let appProfile = document.querySelector('.app_profile');
    let appMainPage = document.querySelector('.app_mainPage');
    let whenDisplay = document.querySelector('.when_display');

    let whenBtn = document.querySelector('#when_categ');


    let logo = document.querySelector('.logo');

    let mainContBtn = document.querySelector('#maincont_btn');

    let passInput = document.querySelector('#password_input');
    let nameInput = document.querySelector('#username_input');
    let nameDisplay = document.querySelector('.name');
    let passDisplay = document.querySelector('.pass');
    let generateBtn = document.querySelector('#generate_btn');
    let loadingName = document.querySelector('.loadingName');


    let navMain = document.querySelector('#nav_main');
    let navLine = document.querySelector('#nav_line');
    let navGames = document.querySelector('#nav_games');
    let navAcc = document.querySelector('#nav_acc');

    let nothingDec = document.querySelector('.nothing');

    let postInput = document.querySelector('#display_post');
    let postBtn  = document.querySelector('#post_btn');

    let mainDisplay = document.querySelector('.main_display');

    

    //functions

    function nextPage(){
        appHello.style.display = 'none';
        appRegist.style.display = 'flex';
        appProfile.style.display = 'flex';
    }


    function loading(){
        let username = nameInput.value;
        let password = passInput.value;

        passDisplay.innerHTML = '';
        nameDisplay.innerHTML = '';

        loadingName.style.display = 'flex';

        setTimeout(function(){
            loadingName.style.display = 'none';

            nameDisplay.innerHTML = username;
            passDisplay.innerHTML = password;

            mainContBtn.style.display = 'block';
        }, 2500);
       
    }


    function toMainPage(){
        appRegist.style.display = 'none';
        appProfile.style.display = 'none';
        appMainPage.style.display = 'flex';
        logo.style.display = 'block';
    }




    function newPost(){
        let postText = postInput.value;

        let postDiv =  document.createElement('div');
        postDiv.className = 'post';
        postDiv.textContent = postText;

        mainDisplay.appendChild(postDiv);

        postDiv.onclick = function(){
            postDiv.style.display = 'none';
        }

        nothingDec.style.display = 'none';
    }


    function whenCateg(){
        mainDisplay.style.display = 'none';
        whenDisplay.style.display = 'flex';
    }


    function toLine(){
        mainDisplay.style.display = 'flex';
        whenDisplay.style.display = 'none';
    }




    //events

    contBtn.addEventListener('click', nextPage);
    generateBtn.addEventListener('click', loading);
    mainContBtn.addEventListener('click', toMainPage);
    postBtn.addEventListener('click', newPost);
    whenBtn.addEventListener('click', whenCateg);
    navLine.addEventListener('click', toLine);