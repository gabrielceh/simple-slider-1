import ImageSlider from './components/ImageSlider';

function App() {
  const images = [
    { url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', title: 'Rick Sanchez' },
    { url: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', title: 'Morty Smith' },
    { url: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', title: 'Summer Smith' },
    { url: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', title: 'Beth Smith' },
    { url: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', title: 'Jerry Smith' },
  ];

  return (
    <>
      <ImageSlider images={images} />
    </>
  );
}

export default App;
