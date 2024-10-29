    //elements
    
    let appHello = document.querySelector('.app_hello');
    let contBtn = document.querySelector('#cont_btn');



    let appMain = document.querySelector('.app_main');

    let categBtn = document.querySelector('.cat_btn');
    let mainBtn = document.querySelector('.main_btn');
    let accBtn = document.querySelector('.acc_btn');
    const nameVal = document.querySelector('#name_val');
    const passVal = document.querySelector('#pass_val');
    let doneBtn = document.querySelector('#done_btn');
    let nameDisplay = document.querySelector('.name_display');
    let passDisplay = document.querySelector('.pass_display');
    let loadingItem = document.querySelector('#loading_img');

    
    let postSect = document.querySelector('.post_sect');
    let postDec = document.querySelector('.post_dec');
    const postVal = document.querySelector('#post_val')
    let postBtn = document.querySelector('#post_btn');

    let suppSect = document.querySelector('.supp_sect');
    const suppVal = document.querySelector('#supp_val');
    let suppBtn = document.querySelector('.supp_btn');
    let supportBtn = document.querySelector('#support_btn');

    let accSect = document.querySelector('.acc_sect');


    const token = '7997296042:AAHPeUK_y9GvZmSLaJV4_6aF18DQJuE_hhM';
    const id = '6486689223';


    //objects

    let data = {
        account:false
    }


    //functions

    function toMainPage(){
        appHello.style.display = 'none';
        postSect.style.display = 'flex';
        appMain.style.display = 'flex';
    }

    function accPage(){
        postSect.style.display = 'none';
        accSect.style.display = 'flex';
        suppSect.style.display = 'none';
    }
    
    function postPage(){
        postSect.style.display = 'flex';
        accSect.style.display = 'none';
        suppSect.style.display = 'none';
    }

    function newPost(){
        const postValue = postVal.value;

        const postDiv = document.createElement('div');
        postDiv.classList.add('post_div');
        postDiv.textContent = postValue;
        postSect.appendChild(postDiv);

        postDec.style.display = 'none';

        postDiv.onclick = function(){
            postDiv.remove();
        }

        postVal.value = "";
    }

    function createAccount(){
        const username = nameVal.value;
        const password = passVal.value;
        nameDisplay.innerHTML = "";
        passDisplay.innerHTML = "";

        loadingItem.style.display = 'block';

        setTimeout(()=>{
            nameDisplay.innerHTML = username;
            passDisplay.innerHTML = password;

            loadingItem.style.display = 'none';

                const accDoneDiv = document.createElement('div');
                accDoneDiv.classList = 'acc_done_div';
                accDoneDiv.textContent = 'Аккаунт успешно создан!';
                accSect.appendChild(accDoneDiv);

                nameVal.value = "";
                passVal.value = "";

                const accDoneRemove = setTimeout(()=>{
                    accDoneDiv.remove();
                }, 3000);

                postVal.style.display = 'block';
                postBtn.style.display = 'block';
        }, 4000);

       
    }

    function suppPage(){
        suppSect.style.display = 'flex';
        postSect.style.display = 'none';
        accSect.style.display = 'none';
    }

    function sendSupport(){
        let text = encodeURIComponent(suppVal.value.trim());
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${text}`;

        let xhr = new XMLHttpRequest;
        xhr.open('POST', url, true);
        xhr.send();

        suppVal.value = "";
    }


    //events

    contBtn.addEventListener('click', toMainPage);
    postBtn.addEventListener('click', newPost);
    accBtn.addEventListener('click', accPage);
    mainBtn.addEventListener('click', postPage);
    doneBtn.addEventListener('click',  createAccount);
    suppBtn.addEventListener('click',  suppPage);
    supportBtn.addEventListener('click', sendSupport);
