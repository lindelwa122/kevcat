document.addEventListener('DOMContentLoaded', () => {
  const [prev, current, next] = document.querySelectorAll('.carousel-control');
  const image = document.querySelector('.carousel-img');
  const carouselControls = [prev, current, next];
  const images = [
    'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60',
    'https://images.unsplash.com/photo-1620578077783-33e254311182',
    'https://images.unsplash.com/photo-1503300961747-204cbbdaeb51'
  ];

  const changeSelected = (changeTo) => {
    carouselControls.forEach((item) => {
      item.classList.remove('selected');
    });
    changeTo.classList.add('selected');
  }

  let imageIndex = 0;
  const autoImageChange = setInterval(() => {
    updateImage(imageIndex);
    imageIndex = imageIndex === 0 ? 2 : (imageIndex-1);
  }, 5000);

  const updateImage = (index) => {
    image.classList.add('next-img');
    const currentControl = carouselControls[index];
    changeSelected(currentControl);
    setTimeout(() => {
      image.src = images[index];
    }, 1000);
    image.addEventListener('load', () => {
      image.classList.remove('next-img');
    });
  };
  
  carouselControls.forEach((item, i) => {
    item.addEventListener('click', () => {
      clearInterval(autoImageChange);
      updateImage(i);
    });
  });
});