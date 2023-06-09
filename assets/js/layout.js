var showNotification = (type,message) => {
    new Noty({
        theme: "relax",
        text: message,
        type: type,
        layout: "topCenter",
        timeout: 3000,
      }).show();
}

function goToPage(ele,url) {
  window.location.href = url;
}

function submitForm(ele,event){
  event.preventDefault();
  let form = $(ele);
  let formData = form.serialize();
  // console.log(formData);
  // return;
  $.ajax({
    url: form.attr("action"),
    type: form.attr("method"),
    data: formData,
    success: function (response) {
      $(".modal").modal("hide");
      showNotification("success", response.message);$("#profileBox").html(response);
    },
    error: function (err) {
      $(".modal").modal("hide");
      console.log(err);
      let status;
      if (err.status == 500) status = "error";
      else status = "warning";
      showNotification(status, err.responseJSON.message);
    },
  });
}