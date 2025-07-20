

FROM node:18 AS build
# ใช้ image ที่ชื่อ node:18 (คือ node.js เวอร์ชัน 18)
# คำว่า AS build ตั้งชื่อว่า "ขั้นตอน build" (เราจะอ้างอิงชื่อนี้ตอนท้าย)\
# Base image นี้คือระบบที่มี Node ติดตั้งไว้แล้ว ใช้สำหรับติดตั้ง package และ build React app

WORKDIR /app
# เปลี่ยน "โฟลเดอร์ปัจจุบัน" ที่ Docker จะทำงานอยู่ → เป็น /app
# เหมือนกับการ cd /app แล้วทำงานต่อจากตรงนั้น

COPY package*.jason ./
# COPY package*.json ./ → คัดลอก package.json และ package-lock.json จากเครื่องเราเข้า container

RUN npm install
# RUN npm install → ติดตั้ง dependencies ที่ระบุใน package.json

COPY . .
# COPY . . → คัดลอกไฟล์ทุกอย่าง (src/, public/, tsconfig.json ฯลฯ) เข้า container
RUN npm run build
# RUN npm run build → สั่ง React สร้าง production build (ไฟล์จะถูกวางไว้ใน /app/build  หรือ /app/dist ขึ้นอยู่กับการตั้งค่า)
FROM nginx:alpine
# ใช้ image nginx:alpine เป็น base สำหรับขั้นตอนนี้
# Nginx เป็นเว็บเซิร์ฟเวอร์ที่ใช้สำหรับเสิร์ฟไฟล์ static

COPY --from=build /app/dist /usr/share/nginx/html
# ตอนนี้เริ่มขั้นตอนใหม่ ใช้ nginx:alpine เป็น base image → เบาและเร็วมาก
# COPY --from=build ... → คัดลอกไฟล์ที่เราสร้างจากขั้นตอน build (ในขั้นตอนแรก) มาไว้ใน nginx
# /usr/share/nginx/html → โฟลเดอร์ default ที่ nginx จะ serve เว็บ
EXPOSE 80
# EXPOSE 80 → แจ้งว่า container นี้จะฟังที่พอร์ต 80

CMD ["nginx", "-g", "daemon off;"]
# CMD ["nginx", "-g", "daemon off;"] → สั่งให้ nginx ทำงานใน foreground (ไม่เป็น daemon) เพื่อให้ container รันต่อไป


