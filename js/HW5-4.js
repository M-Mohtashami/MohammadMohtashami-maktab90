"use strict";

const notif = document.getElementById("notif");
const message = document.getElementById("msg");
const form = document.getElementById("form");
const input_msg = document.getElementById("msg_input");
const top1 = document.getElementById("top");
const right = document.getElementById("right");
const show_btn = document.getElementById("show_btn");

show_btn.addEventListener("click", (e) => {
  e.preventDefault();
  showNotification({
    top: top1.value,
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
  notif.innerHTML = html;
}
