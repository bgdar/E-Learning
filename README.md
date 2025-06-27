# E Learning with Nest.js

## Teknologi

1. NestJS
2. mustache-express 1.3.2 (View Engin)
3. axios (saya gunakan untuk menghadle http di client)
4. ts-node (untuk developer mode sementara)

## page Routing **folder**

1. `base` = halaman kursus utama
2. `base\cursus` = Service cursus yg di inject ke view

## Kategori Warna Utama

Warna utama yang digunakan dalam website ini adalah:

- **Warna Utama (Dark Blue)**: `#1a2238`  
  ![#1a2238](https://via.placeholder.com/50x50/1a2238/000000?text=+)
- **Warna Sekunder (Navy)**: `#232d4b`  
  ![#232d4b](https://via.placeholder.com/50x50/232d4b/000000?text=+)

- **Warna Aksen (Orange)**: `#ff6a3d`  
  ![#ff6a3d](https://via.placeholder.com/50x50/ff6a3d/000000?text=+)

- **Warna Ringan (Light Blue)**: `#9daaf2`  
  ![#9daaf2](https://via.placeholder.com/50x50/9daaf2/000000?text=+)

- **Warna Teks (White)**: `#ffffff`  
  ![#ffffff](https://via.placeholder.com/50x50/ffffff/000000?text=+)

### Database **Mysql** with **Docker**

```bash
docker run --name mysql-nest -e MYSQL_ROOT_PASSWORD=daraja -e MYSQL_DATABASE=e-learningdb -e MYSQL_USER=dar -e MYSQL_PASSWORD=daraja -p 3306:3306 -v "D:\user_dar\programer\Nest js\E-Learning\docker\mysql-data:/var/lib/mysql" -d mysql:latest
```

**detail**
| Opsi | Nilai | Penjelasan |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------------- |
| `--name` | `mysql-nest` | Nama container yang bisa diakses |
| `-e MYSQL_ROOT_PASSWORD` | `daraja` | Password user root |
| `-e MYSQL_DATABASE` | `e-learningdb` | Nama database yang otomatis dibuat saat pertama run |
| `-e MYSQL_USER` | `dar` | User tambahan yang otomatis dibuat |
| `-e MYSQL_PASSWORD` | `daraja` | Password untuk user `dar` |
| `-p` | `3306:3306` | Mengekspose port MySQL ke host |
| `-v` | `D:\...\docker\mysql-data:/var/lib/mysql` | Volume lokal agar data database tidak hilang jika container dihapus |
| `-d` | `mysql:latest` | Jalankan image MySQL versi terbaru dalam mode background |

- User : daraja
- password (root | user ): dar

**gunakan di cli**
Jika container sudah jalan

```bash
 docker exec -it mysql-nest mysql -u dar -p
```

#### dengan docker compose

ada di `docker/docker-compose.yml` cukup jalanakn

```bash
docker-compose up -d
```

Ini akan menjalankan kembali container MySQL dengan volume yang sama, tanpa harus ketik docker run ... lagi.

#### managements database menggunaakn typeOrm

- Docker + mysql database

setiap Module punya entiti untuk management table
