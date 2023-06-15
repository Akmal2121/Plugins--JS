$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});

FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginFileEncode);
FilePond.registerPlugin(FilePondPluginFileValidateSize);
FilePond.registerPlugin(FilePondPluginImageExifOrientation);

const pondInput = FilePond.create(document.querySelector("#id"));

const signature = document.querySelector("#signature");
const signaturePad = new SignaturePad(signature);
const signature_clear = document.getElementById("signature_clear");
signature_clear.addEventListener("click", function (e) {
  e.preventDefault();
  signaturePad.clear();
});

$("#phone").inputmask("+\\9\\9\\8(99)999-99-99");

$("#view").click((e) => {
  e.preventDefault();
  if ($("#password").attr("type") === "text") {
    $("#password").attr("type", "password");
  } else {
    $("#password").attr("type", "text");
  }
});

$("#btn").click((e) => {
  e.preventDefault();
  const obj = {
    phone: $("#phone").val(),
    email: $("#email").val(),
    password: $("#password").val(),
  };
  console.log(obj);
});
