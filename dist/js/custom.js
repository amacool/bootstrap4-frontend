// Data Table config
if ($('.data-table').length > 0) {
  $('.data-table').DataTable();
  $('.dataTables_length').addClass('bs-select');
  $('.dataTables_wrapper .dataTables_filter label input').attr('placeholder', 'Search');
  $('.dataTables_wrapper>.row:last-child>div:last-child').removeClass('col-sm-12');
  $('.dataTables_wrapper>.row:last-child>div:last-child').removeClass('col-md-7');
}

$("#issue-invoice-btn").click(function () {
  $("body").addClass("custom-modal-open");
  $(".modal-dialog").removeClass("send-completion-modal-dialog");
  $(".modal-dialog").addClass("issue-invoice-modal-dialog");
});

$("#send-completion-btn").click(function () {
  $("body").addClass("custom-modal-open");
  $(".modal-dialog").removeClass("issue-invoice-modal-dialog");
  $(".modal-dialog").addClass("send-completion-modal-dialog");
  $(".timesheet-wrapper").addClass("d-flex");
  $(".timesheet-wrapper").removeClass("d-none");
  $(".timesheet-tracker-wrapper").addClass("d-none");
  $(".timesheet-tracker-wrapper").removeClass("d-flex");
  $(".timesheet-video-wrapper").addClass("d-none");
  $(".timesheet-video-wrapper").removeClass("d-flex");
});

$(".timesheet-tracker-card").click(function () {
  $(".timesheet-wrapper").removeClass("d-flex");
  $(".timesheet-wrapper").addClass("d-none");
  $(".timesheet-tracker-wrapper").removeClass("d-none");
  $(".timesheet-tracker-wrapper").addClass("d-flex");
});

$(".timesheet-video-card").click(function () {
  $(".timesheet-wrapper").removeClass("d-flex");
  $(".timesheet-wrapper").addClass("d-none");
  $(".timesheet-video-wrapper").removeClass("d-none");
  $(".timesheet-video-wrapper").addClass("d-flex");
});

$(".info-btn").click(function () {
  $(".request-header-info").addClass("d-flex");
  $(".request-header-info").removeClass("d-none");
});

$(".request-header-info").click(function () {
  if ($(".request-header-info").hasClass("d-flex")) {
    $(".request-header-info").removeClass("d-flex");
  }
  $(".request-header-info").addClass("d-none");
});

$(".contact-issue-invoice").click(function () {
  $(".request-issue-invoice").addClass("d-flex");
  if ($(".request-issue-invoice").hasClass("d-none")) {
    $(".request-issue-invoice").removeClass("d-none");
  }
  $(".request-send-completion").addClass("d-none");
  if ($(".request-send-completion").hasClass("d-flex")) {
    $(".request-send-completion").removeClass("d-flex");
  }
});

$(".contact-send-completion").click(function () {
  if ($(".request-issue-invoice").hasClass("d-flex")) {
    $(".request-issue-invoice").removeClass("d-flex");
  }
  $(".request-issue-invoice").addClass("d-none");
  if ($(".request-send-completion").hasClass("d-flex")) {
    $(".request-send-completion").removeClass("d-none");
  }
  $(".request-send-completion").addClass("d-flex");
});