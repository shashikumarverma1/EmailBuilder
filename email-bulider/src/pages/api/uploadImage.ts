import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';


export async function handler(request: NextRequest) {
  // const formData = await request.formData();
  // const file = formData.get('image') as File;
console.log(request , "file")
  return
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
console.log(file , "file")
    return
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save file to public directory
    const filename = `${Date.now()}-${file.name}`;
    const publicPath = join(process.cwd(), 'public', 'uploads');
    const filePath = join(publicPath, filename);

    // Ensure uploads directory exists
    await writeFile(filePath, buffer);

    return NextResponse.json({
      message: 'File uploaded successfully',
      imageUrl: `/uploads/${filename}`
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}



