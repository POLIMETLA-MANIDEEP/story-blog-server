const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect('your_mongo_URI_here'); // replace this with your actual MongoDB URI

async function createAdmin() {
  const hashed = await bcrypt.hash('admin123', 10);
  const admin = await User.create({
    name: 'Admin',
    email: 'admin@blog.com',
    password: hashed,
    role: 'admin',
  });
  console.log('✅ Admin created:', admin);
  mongoose.disconnect();
}

createAdmin();