# E Learning with Nest.js

<h4 align="center"> 
  aplikasi pembelajaran online 
</h4>

##  Tech Stack  
<p align="center">
  <!-- NestJS -->
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
  </a>
  <!-- Mustache -->
  <a href="https://mustache.github.io/" target="_blank">
    <img src="https://img.shields.io/badge/Mustache_Express-000000?style=for-the-badge&logo=handlebarsdotjs&logoColor=yellow" alt="Mustache Express"/>
  </a>
  <!-- Axios -->
  <a href="https://axios-http.com/" target="_blank">
    <img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
  </a>
  <!-- ts-node -->
  <a href="https://typestrong.org/ts-node/" target="_blank">
    <img src="https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white" alt="ts-node"/>
  </a>
  <!-- TypeORM -->
  <a href="https://typeorm.io/" target="_blank">
    <img src="https://img.shields.io/badge/TypeORM-262627?style=for-the-badge&logo=databricks&logoColor=orange" alt="TypeORM"/>
  </a>
  <!-- Argon2 -->
  <a href="https://github.com/ranisalt/node-argon2" target="_blank">
    <img src="https://img.shields.io/badge/argon2-35495E?style=for-the-badge&logo=key&logoColor=white" alt="Argon2"/>
  </a>
</p>

### Tech dscr 
1. NestJS            = main project 
2. mustache-express  = untuk __View Engin__
3. axios             = saya gunakan untuk menghadle http di client
4. ts-node           = untuk developer mode sementara
5. typeorm           = project ini menggunakn ORM untuk koneksi 
6. cookie-parser     =  untuk mengahandle __cookies__ di project ini ( dan saya manfaatkan untuk __flash message__)
  - `flash-error` => untuk message error
  - `flash-success` => untuk message success
  - `flash-info` => untuk info
7. argon2            = untuk hashing password 

dengan database  __mysql__
## page Routing **folder**

1. `base\views\` = folder halaman kursus utama
   `base\courses` = Service cursus yg di inject ke view
2. `user\` =  
   `user\user` = handle database


### Menu
- **supervisor** ( pengawas ) => ini menu untuk mengahndle banyak user 
  -> akses di halaman __profil__ 
  - Midlleware Supervisor  , flash message ke cookies
      - `supervisor-username`


## app color 
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

#### managements database menggunaakn typeOrm

- Docker + mysql database

setiap Module punya entiti untuk management table
