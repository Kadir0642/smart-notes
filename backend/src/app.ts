import express, {Express, Request , Response } from 'express';

import dotenv from 'dotenv';

//1. Ortam değişikliklerini (.env) dosyasına yükle

dotenv.config();

// 2. Uygulamayı başlat
const app: Express=express();

//Middleware : Gelen verinin JSON olduğunu anla 
app.use(express.json());

// 4. Port ayarı: .env dosyasından al, yoksa 3000 kullan
const PORT = process.env.PORT || 3000;

// 5. Basit bir route (Test için)
app.get('/', (req: Request, res: Response) =>{
    res.status(200).json({
        message: 'Smart Notes Backend API  Calisiyor',
        status: 'succes',
        env: process.env.Node_ENV
    });
});

// 6. Sunucuyu ayağa kaldır
app.listen(PORT, () =>{
    console.log(`Sunucu http://localhost:${PORT} adresinde çalişiyor.`)
});

