// File: pages/api/getEmailLayout.js
import path from 'path';
import fs from 'fs';

export default function handler(req:any, res:any) {
  if (req.method === 'GET') {
    try {
      // Construct the file path
      const filePath = path.join(process.cwd(), 'public', 'layout.html');
      
      // Read the file
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      // Send the HTML content as response
      res.status(200).send(fileContents);
    } catch (error) {
      console.error('Error reading layout.html:', error);
      res.status(500).json({ message: 'Error reading the layout file' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
