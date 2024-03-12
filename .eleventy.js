<script>
    function displayHTML(string) {
        const mainName = document.getElementById('userName');
        mainName.innerHTML = `<h1 id="nameHead" class="tracking-wider text-2xl text-red-700 not-italic hover:italic"></h1>`;
        document.getElementById('nameHead').textContent = string;
    }
    fetch('https://dummyjson.com/users/1')
        .then(res => res.json())
        .then(json => displayHTML(json.firstName))


    const showImageButton = document.getElementById("showImg");
    const oneImg = document.getElementById("hiddenImg"); 
    showImageButton.addEventListener("click", () => { 
        oneImg.style.display = "block"; 
    });

</script>