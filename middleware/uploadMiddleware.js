const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, 'uploads/'),
  filename: (_, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`)
});

const fileFilter = (_, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  const allowed = ['.pdf', '.doc', '.docx'];
  allowed.includes(ext)
    ? cb(null, true)
    : cb(new Error('Only .pdf, .doc, and .docx are allowed'));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;