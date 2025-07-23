function addBookmark() {
  const name = document.getElementById('siteName').value;
  const url = document.getElementById('siteURL').value;
  if (!name || !url) return;

  const bookmarksList = document.getElementById('bookmarksList');

  const div = document.createElement('div');
  div.className = 'bookmark';
  div.innerHTML = `
    <div class="bookmark-content">
      <a href="${url}" target="_blank">${name}</a>
      <button onclick="this.parentElement.parentElement.remove()">🗑️</button>
    </div>
  `;
  bookmarksList.appendChild(div);
}
