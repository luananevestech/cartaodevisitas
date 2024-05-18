const infos = {
  nome: 'Luana Neves',
  cargo: 'Estudante de Programação',
  imagem:'https://media.licdn.com/dms/image/D4D03AQG50zZvSgQCnQ/profile-displayphoto-shrink_200_200/0/1715740715023?e=1721260800&v=beta&t=oXR9_g4MfLJRBTSV8izAKxDXGDNRpnt0eEDvYbZlFp0',
  github: 'https://github.com/luananevestech',
  linkedin: 'https://www.linkedin.com/in/luananevestech',
  email: 'mailto:luananevestech@gmail.com',
  minibio:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, esse. Laboriosam quisquam illo et praesentium esse totam ipsam ut rerum accusamus quaerat, voluptatibus obcaecati ex corrupti! Sit provident necessitatibus nobis'
};

document.getElementById('nome').innerHTML = infos.nome;
document.getElementById('cargo').innerHTML = infos.cargo;
document.getElementById('imagem").src = infos.imagem;

document.getElementById('github').href = infos.github;
document.getElementById('linkedin').href = infos.linkedin;
document.getElementById('email').innerHTML = infos.email;

document.getElementById('minibio').innerHTML = infos.minibio;

