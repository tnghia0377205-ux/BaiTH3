const express = require('express');
const path = require('path');
const app = express();

// cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static
app.use(express.static(path.join(__dirname, 'public')));

// DATA
const items = [
  { id: 1, name: 'Đà Lạt', description: 'Mát mẻ quanh năm', price: 1500000, hot: true },
  { id: 2, name: 'Nha Trang', description: 'Biển đẹp', price: 1800000, hot: false },
  { id: 3, name: 'Sa Pa', description: 'Vùng núi lạnh', price: 2000000, hot: true },
  { id: 4, name: 'Phú Quốc', description: 'Đảo nổi tiếng', price: 2500000, hot: false },
  { id: 5, name: 'Đà Nẵng', description: 'Thành phố đáng sống', price: 1700000, hot: true }
];

// ROUTES
app.get('/', (req, res) => {
  res.render('index', { title: 'Trang chủ', items });
});

app.get('/list', (req, res) => {
  res.render('list', { title: 'Danh sách', items });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Liên hệ' });
});

app.get('/detail/:id', (req, res) => {
  const item = items.find(x => x.id == req.params.id);
  if (!item) return res.send('Không tìm thấy');
  res.render('detail', { title: 'Chi tiết', item });
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});