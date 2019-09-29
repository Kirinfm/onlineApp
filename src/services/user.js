import { stringify } from 'qs';
import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent(userId) {
  return request(`/api/currentUser?id=${userId}`);
}
