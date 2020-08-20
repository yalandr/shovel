
// ==== Slider =================================
$(document).ready(function () {
    $("#slider").owlCarousel({
        loop: true,
        items: 1
    });
});

//==== Summary Calculator ======================
function getSummary () {
	let price = document.getElementById('price').innerHTML;
	let quantity = document.getElementById('quantity').value;
	let summary = price * quantity;
} 
getSummary();
