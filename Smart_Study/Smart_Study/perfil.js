const usuarioJSON = localStorage.getItem('usuario');

if (usuarioJSON) {
  const usuario = JSON.parse(usuarioJSON);

  const profilePic = document.getElementById('profile-pic');
  const profileName = document.getElementById('profile-name');
  const profileAge = document.getElementById('profile-age');
  const profilePhone = document.getElementById('profile-phone');
  const profileEmail = document.getElementById('profile-email');

  profileName.textContent = `Nome: ${usuario.nome}`;
  profileAge.textContent = `Idade: ${usuario.idade}`;
  profilePhone.textContent = `Telefone: ${usuario.telefone}`;
  profileEmail.textContent = `Email: ${usuario.email}`;
} else {
  alert('Nenhum dado de usuário encontrado. Por favor, faça o cadastro primeiro.');
  window.location.href = 'cadastro/cadastro.html'; 
} 
const fileInput = document.getElementById('fileInput');
    const profilePicture = document.getElementById('profilePicture');

    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          profilePicture.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    });
