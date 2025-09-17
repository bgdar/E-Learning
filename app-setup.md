**Menggunakan PNPM**

## Project 
- **start**

```bash
$ pnpm install
```
- **Compile and run the project**

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

- **menggunakan ts-node**

```bash
$ pnpm exec ts-node -r tsconfig-paths/register src/main.ts
```
- **Run tests**

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## untuk **course**

file curso disimoan di /courses/....html

- saya mau data cursos

## Database **Mysql** with **Docker**

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
pastikan  container sudah jalan
```bash
# masuk ke cli mysqli
 docker exec -it mysql-nest mysql -u dar -p
```

#### dengan docker compose

ada di `docker/docker-compose.yml` cukup jalanakn

```bash
docker-compose up -d
```

Ini akan menjalankan kembali container MySQL dengan volume yang sama, tanpa harus ketik docker run ... lagi.
