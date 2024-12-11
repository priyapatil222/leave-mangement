const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const whatsapp = require('./routes/whatsapp');


const app = express();
app.use(cors());  // Enable CORS for all requests
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3001' })); // Allow requests only from React frontend
app.use(express.json());

mongoose.connect('mongodb://localhost/leave_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use('/leave', leaveRoutes);
app.use('/whatsapp', whatsapp);

app.listen(3000, () => console.log('Server running on port 3000'));
