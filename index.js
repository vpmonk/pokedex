function getPoke() {
    const pokeName = document.getElementById('searchInput').value.toLowerCase();
    const pokeImg = document.getElementById('pokemon');
    const pokemonName = document.getElementById('pokeName');
    const pokeType = document.getElementById('pokeType');
    const pokeHeight = document.getElementById('pokeHeight');
    const pokeWeight = document.getElementById('pokeWeight');
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => response.json())
      .then(data => {
        pokeImg.src = data.sprites.front_default;
        pokemonName.textContent = data.name;
        pokeType.textContent = data.types[0].type.name;
        pokeHeight.textContent = `${data.height / 10} m`;
        pokeWeight.textContent = `${data.weight / 10} kg`;
  
        pokeImg.classList.add('show');
  
        const primaryType = data.types[0].type.name;
        setTheme(primaryType);
      })
      .catch(error => {
        console.error('Error:', error);
        pokeImg.src = '';
        pokemonName.textContent = '';
        pokeType.textContent = '';
        pokeHeight.textContent = '';
        pokeWeight.textContent = '';
        pokeImg.classList.remove('show');
        setTheme('default');
      });
  }
  
  function setTheme(type) {
    const body = document.body;
    const themeColors = {
      normal: { background: '#A8A878', text: '#000' },
      fighting: { background: '#C03028', text: '#fff' },
      flying: { background: '#A890F0', text: '#000' },
      poison: { background: '#A040A0', text: '#fff' },
      ground: { background: '#E0C068', text: '#000' },
      rock: { background: '#B8A038', text: '#000' },
      bug: { background: '#A8B820', text: '#000' },
      ghost: { background: '#705898', text: '#fff' },
      steel: { background: '#B8B8D0', text: '#000' },
      fire: { background: '#F08030', text: '#000' },
      water: { background: '#6890F0', text: '#000' },
      grass: { background: '#78C850', text: '#000' },
      electric: { background: '#F8D030', text: '#000' },
      psychic: { background: '#F85888', text: '#000' },
      ice: { background: '#98D8D8', text: '#000' },
      dragon: { background: '#7038F8', text: '#fff' },
      dark: { background: '#705848', text: '#fff' },
      fairy: { background: '#EE99AC', text: '#000' },
      default: { background: '#f0f8ff', text: '#000' },
    };
  
    const theme = themeColors[type] || themeColors.default;
    body.style.backgroundColor = theme.background;
    body.style.color = theme.text;
  }