document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');
    const resultsDiv = document.getElementById('results');
    const paginationControls = document.getElementById('paginationControls');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = document.getElementById('movieTitle').value;
        const type = document.getElementById('movieType').value;
        const year = document.getElementById('movieYear').value;

        if (title.length < 3) {
            alert('Please enter at least 3 characters in the movie title field.');
            return;
        }

        const apiKey = 'a4ccd49e';
        const url = `https://www.omdbapi.com/?s=${title}&type=${type}&y=${year}&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "False") {
                resultsDiv.innerHTML = `<p>${data.Error}</p>`;
                paginationControls.innerHTML = '';
            } else {
                displayResults(data.Search);
                displayPagination(data.totalResults);
            }
        } catch (error) {
            resultsDiv.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
            console.error('Error fetching data:', error);
        }
    });

    function displayResults(results) {
        resultsDiv.innerHTML = results.map(result => `
            <div class="resultItem">
                <h3>${result.Title}</h3>
                <p>${result.Year}</p>
                <img src="${result.Poster !== "N/A" ? result.Poster : 'placeholder.jpg'}" alt="${result.Title}">
            </div>
        `).join('');
    }

    function displayPagination(totalResults) {
        const totalPages = Math.ceil(totalResults / 10);
        paginationControls.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.classList.add('paginationButton');
            button.textContent = i;
            button.addEventListener('click', () => fetchPage(i));
            paginationControls.appendChild(button);
        }
    }

    async function fetchPage(page) {
        const title = document.getElementById('movieTitle').value;
        const type = document.getElementById('movieType').value;
        const year = document.getElementById('movieYear').value;
        const apiKey = 'a4ccd49e';
        const url = `https://www.omdbapi.com/?s=${title}&type=${type}&y=${year}&apikey=${apiKey}&page=${page}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === "False") {
                resultsDiv.innerHTML = `<p>${data.Error}</p>`;
                paginationControls.innerHTML = '';
            } else {
                displayResults(data.Search);
            }
        } catch (error) {
            resultsDiv.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
            console.error('Error fetching data:', error);
        }
    }
});
