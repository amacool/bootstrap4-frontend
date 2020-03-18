// Data Table config
if ($('.data-table').length > 0) {
  $('.data-table').DataTable();
  $('.dataTables_length').addClass('bs-select');
  $('.dataTables_wrapper .dataTables_filter label input').attr('placeholder', 'Search');
  $('.dataTables_wrapper>.row:last-child>div:last-child').removeClass('col-sm-12');
  $('.dataTables_wrapper>.row:last-child>div:last-child').removeClass('col-md-7');
}

$("#issue-invoice-btn").click(function () {
  // $(".invite-send").removeClass("active");
  $("body").addClass("custom-modal-open");
});
