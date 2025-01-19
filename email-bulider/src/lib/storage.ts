// Default email layout template
export const EmailLayout =(titleColor:string)=>{
  return (
    `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    .header {
      text-align: center;
      padding: 20px 0;
      border-bottom: 2px solid #f4f4f4;
      color:`+titleColor+`;
      font-size: 32px;
      fontweight: bold;
    }
    .content {
      padding: 20px 0;
    }
    .image {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      padding: 20px 0;
      border-top: 2px solid #f4f4f4;
      color: #666666;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>{{title}}</h1>
    </div>
   <br/>
    <div class="content">
      {{content}}
       <br/>
      <img src="{{imageUrl}}" alt="Email Image" class="image">
     
    </div>
    <div class="footer">
      {{footer}}
    </div>
  </div>
</body>
</html>
`
  )
};