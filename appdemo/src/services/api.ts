// 📁 frontend/src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7016/api'  // เปลี่ยนจาก 5001 → 7016
});

export default api;
