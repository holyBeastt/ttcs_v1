const connection = require("../connectDb");
const excelJs = require("exceljs");
var fs = require("fs");
console.log("da chay yyyyyyyy ngoai");
const getExportXlsx = async (req, res) => {
  console.log("da chay yyyyyyyy");
  try {
    let workbook = new excelJs.Workbook();

    const sheet = workbook.addWorksheet("books");
    sheet.columns = [
      { header: "ISBN", key: "isbn", width: 25 },
      { header: "Title", key: "title", width: 50 },
      { header: "Author", key: "author", width: 50 },
      { header: "Pages Count", key: "pages", width: 10 },
    ];

    let object = JSON.parse(fs.readFileSync("data.json", "utf8"));

    await object.books.map((value, idx) => {
      sheet.addRow({
        isbn: value.isbn,
        title: value.title,
        author: value.author,
        pages: value.pages,
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment;filename=" + "books.xlsx");
    workbook.xlsx.write(res);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getExportXlsx };
