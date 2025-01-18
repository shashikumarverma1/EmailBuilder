// File: pages/api/uploadImage.js
import multer from 'multer';
import path from 'path';
import nextConnect from 'next-connect';

// Configure multer to store images in a specific folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadsDir = path.join(process.cwd(), 'public/uploads'); // Save files to 'public/uploads'
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

// Middleware to handle image upload
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Accept only images
    if (!file.mimetype.startsWith('image/')) {
      cb(new Error('Only image files are allowed!'), false);
    } else {
      cb(null, true);
    }
  },
});

// Use next-connect to handle middleware in Next.js
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: error.message });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  },
});

apiRoute.use(upload.single('image')); // Accept single file with field name 'image'

apiRoute.post((req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.status(200).json({
    message: 'Image uploaded successfully',
    file: {
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
    },
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disable built-in body parser
  },
};
