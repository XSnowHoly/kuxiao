import api from './api';
import http from './http';

/**
 * 测试接口
 */
export const check = () => http.get(api.check);
