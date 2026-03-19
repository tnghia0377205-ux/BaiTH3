const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, JS, img)
app.use(express.static(path.join(__dirname, 'public')));

// Dữ liệu đầy đủ 5 địa điểm
const items = [
  { id: 1, name: "Đà Nẵng", description: "Thành phố biển đẹp", hot: true, price: 1000000 },
  { id: 2, name: "Đà Lạt", description: "Thành phố sương mù", hot: false, price: 800000 },
  { id: 3, name: "Phú Quốc", description: "Đảo du lịch nổi tiếng", hot: true, price: 1200000 },
  { id: 4, name: "Sapa", description: "Thành phố núi mù sương", hot: false, price: 700000 },
  { id: 5, name: "Nha Trang", description: "Thành phố biển đẹp và sôi động", hot: true, price: 900000 }
];

// Route trang chủ
app.get('/', (req, res) => {
  res.render('index', { items });
});

// Route danh sách
app.get('/list', (req, res) => {
  res.render('list', { items });
});

// Route động detail/:id
app.get('/detail/:id', (req, res) => {
  const id = req.params.id;
  const item = items.find(i => i.id == id);
  res.render('detail', { item });
});

// Route contact
app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));