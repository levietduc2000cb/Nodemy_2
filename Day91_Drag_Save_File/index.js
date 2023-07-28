const dropZone = document.querySelector(".drag");

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("dragover");
  const file = event.dataTransfer.files[0];
  saveFile(file);
});

function saveFile(file) {
  // Xử lý lưu tệp tin vào máy tính
  var blob = new Blob(["Hello, world!"], { type: "text/plain;charset=utf-8" });
  const filePath = "file/text.txt";
  saveAs(blob, filePath);

  console.log(`Lưu tệp tin ${file.name} thành công`);
}
