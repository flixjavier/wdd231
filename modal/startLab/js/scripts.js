const openButton = document.querySelector('#openButton');
const closeButton = document.querySelector('#closeButton');
const dialogBox = document.querySelector('#dialogBox');
const dialogBoxtext = document.querySelector('#dialogBox div');

// Click event to open the dialog box
openButton1.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxtext.innerHTML = `Apples have 90 calories per 100 grams. They are a good source of dietary fiber and vitamin C.`;
});
openButton2.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxtext.innerHTML = `Bananas have 89 calories per 100 grams. They are rich in potassium and vitamin B6.`;
});
openButton3.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxtext.innerHTML = `Oranges have 47 calories per 100 grams. They are an excellent source of vitamin C and fiber.`;
});

// Click event to close the dialog box
closeButton.addEventListener('click', () => {
  dialogBox.close();
});