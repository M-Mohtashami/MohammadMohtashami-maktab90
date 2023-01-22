"use strict";

const notif = document.getElementById("notif");
const message = document.getElementById("msg");
const progress = document.getElementById("progress");
const input_msg = document.getElementById("msg_input");
const top1 = document.getElementById("top");
const right = document.getElementById("right");
const show_btn = document.getElementById("show_btn");

show_btn.addEventListener("click", (e) => {
  e.preventDefault();
  showNotification({
    top1: top1.value,
    right: right.value,
    html: input_msg.value,
  });
});

function showNotification({
  top1 = 10,
  right = 10,
  html = "Welcome",
  className = "notification",
}) {
  notif.style.display = "flex";
  notif.style.top = `${top1}px`;
  notif.style.right = `${right}px`;
  notif.className = className;
  message.innerHTML = html;

  progress.className = "progress_start";

  setTimeout(() => (notif.style.display = "none"), 3000);
}
