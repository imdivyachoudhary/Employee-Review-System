function showBody(ele, targetElementId) {
  $(".home-body").hide();
  $(`#${targetElementId}`).show();

  $(".heading").removeClass("active");
  $(ele).addClass("active");
}

function openFeedbackForm(ele) {
  $.ajax({
    url: "/review/feedback-form",
    type: "get",
    data: {},
    success: function (response) {
      $("#modal .modal-content").html(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function viewFeedback(ele) {
  $.ajax({
    url: "/review/view-feedback",
    type: "get",
    data: {},
    success: function (response) {
      $("#modal .modal-content").html(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function editFeedbackForm(ele) {
  $.ajax({
    url: "/review/edit-feedback-form",
    type: "get",
    data: {},
    success: function (response) {
      $("#modal .modal-content").html(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function editUserForm(ele) {
  $.ajax({
    url: "/user/admin/edit-user-form",
    type: "get",
    data: {},
    success: function (response) {
      $("#modal .modal-content").html(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function assignReviewersForm(ele) {
  $.ajax({
    url: "/user/admin/assign-reviewers-form",
    type: "get",
    data: {},
    success: function (response) {
      $("#modal .modal-content").html(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

