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
  $(".request-header-info").removeClass("d-flex");
  $(".request-header-info").addClass("d-none");
});
