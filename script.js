const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function(){
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('tema', 'dark');
        btnTema.textContent = '☀️';
    } else {
        localStorage.setItem('tema', 'claro');
        btnTema.textContent = '🌙';

    }

    
     
});


const temaSalvo = localStorage.getItem('tema');
    if(temaSalvo === 'dark') {
        document.body.classList.add('dark');
        btnTema.textContent = '☀️';    
    } else{
        btnTema.textContent = '🌙';
    }
