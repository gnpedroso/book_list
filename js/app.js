(function(){

    const list = document.querySelector('#book-list ul');

    list.addEventListener('click', (e) => {
        if(e.target.className === 'delete'){
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    })

    const $addBook = document.getElementById('add-book');

    $addBook.addEventListener('submit', (e) => {
        e.preventDefault();
        const $bookInput = $addBook.querySelector('#bookInput');

        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        bookName.textContent = $bookInput.value;
        deleteBtn.textContent = 'Delete';

        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        li.appendChild(bookName)
        li.appendChild(deleteBtn)
        list.appendChild(li);

        $bookInput.value = "";
        $bookInput.focus();
        

    })

        const searchBar = document.getElementById('searchInput');

        searchBar.addEventListener('keyup', function(e){
            const term = e.target.value.toLowerCase()
            console.log(term)
            const books = list.getElementsByTagName('li');
            
            Array.from(books).forEach(book => {
                const title = book.firstElementChild.textContent;
                
                if(title.toLowerCase().indexOf(term) != -1){
                    book.style.display = 'block';
                } else {
                    book.style.display = 'none';
                }
            })

        })
    
   






})();   
    