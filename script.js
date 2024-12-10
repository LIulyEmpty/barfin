// Display tag
const valueSelect = document.getElementById('nametagDropdown');
const displayNametag = document.getElementById('displayNametag');
const nametagOutput = document.getElementById('nametagOutput');

// Display the selected value when the button is clicked
displayNametag.addEventListener('click', () => {
     const nametagValue = valueSelect.value;
     if (nametagValue) {
          nametagOutput.textContent = `${nametagValue}`;
          nametagOutput.style.display = 'block';
     }
});

// Display information
document.addEventListener('DOMContentLoaded', function() {
     const image = localStorage.getItem('imageData');
     const nameProduct = localStorage.getItem('nameProductData');
     const barcode = localStorage.getItem('barcodeData');
     const description = localStorage.getItem('descriptionData');
     const price = localStorage.getItem('priceData');

     const displayData = document.getElementById('displayData');

     // Display the image if available
     const displayImage = document.getElementById('displayImage');
     if (image) {
          displayImage.src = image;
          displayImage.style.display = 'block'; // Show the image
     }

     // Update display with retrieved data
     document.getElementById('displayNameProduct').textContent = `Name: ${nameProduct ? nameProduct : 'No data available'}`;
     document.getElementById('displayBarcode').textContent = `Barcode: ${barcode ? barcode : 'No data available'}`;
     document.getElementById('displayDescription').textContent = `Description: ${description ? description : 'No data available'}`;
     document.getElementById('displayPrice').textContent = `Price: ${price ? price : 'No data available'}`;

     if (image && nameProduct && barcode && description && price) {
          // Create a new div for the input value
          const imageValue = document.createElement('img');
          imageValue.classList.add('displayImage');
          imageValue.textContent = value;

          // Append the new div to the output container
          displayData.appendChild(imageValue);

          // Clear the input field
          valueInput.value = '';
     }
});