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
  $(".modal-dialog").removeClass("new-request-modal-dialog");
  $(".modal-dialog").addClass("issue-invoice-modal-dialog");
});

$("#new-request-btn").click(function () {
  $("body").addClass("custom-modal-open");
  $(".modal-dialog").removeClass("send-completion-modal-dialog");
  $(".modal-dialog").removeClass("issue-invoice-modal-dialog");
  $(".modal-dialog").addClass("new-request-modal-dialog");
});

$("#send-completion-btn").click(function () {
  $("body").addClass("custom-modal-open");
  $(".modal-dialog").removeClass("issue-invoice-modal-dialog");
  $(".modal-dialog").removeClass("new-request-modal-dialog");
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

// custom select
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  if (selElmnt) {
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function (e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

// input for phone number 
var input = document.querySelector("#phone");
if (input) {
  window.intlTelInput(input, {
    dropdownContainer: document.body,
    utilsScript: "./js/utils.js",
  });
}