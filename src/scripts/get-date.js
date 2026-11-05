function updateDates() {
  const now = new Date();
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);

  document.querySelectorAll(".date").forEach((element) => {
    element.dateTime = now.toISOString();
    element.textContent = formattedDate;
  });
}

updateDates();
setInterval(updateDates, 60_000);
