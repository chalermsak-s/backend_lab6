# ✅ สรุป

## Endpoint	ระบบห้องสมุด คำอธิบาย

## GET http://localhost:3838/authors	ดึงข้อมูลผู้แต่งทั้งหมด
## GET http://localhost:3838/authors/3 ดึงข้อมูลผู้แต่งตามไอดี
## GET http://localhost:3838/authors/book/3 ดึงข้อมูลผู้แต่งจำแนกตามหนังสือ
## GET http://localhost:3838/authors/affiliation/1 ดึงข้อมูลผู้แต่งจำแนกตามหน่วยงานที่สังกัด

## Author Create

## POST http://localhost:3838/authors เพิ่มผู้แต่ง พร้อมหนังสือที่แต่ง
## content-type: application/json

## {
##  "author": {
##    "firstName": "Takmashido",
##    "lastName": "Suzuran",
##    "affiliation": "พัฒนาซอฟต์แวร์"
##  },
##  "book": {
##    "title": "Rust zero",
##    "isbn": "r3382783293",
##    "category": "สำนักพิมพ์มหาวิทยาลัยเชียงใหม่"
##  }
## }




