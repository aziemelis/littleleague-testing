import http from 'k6/http';
import { sleep, check, fail } from 'k6';

export const options = {
  stages: [
    { duration: '10', target: 5 },
    { duration: '30s', target: 300 },
    { duration: '20s', target: 0 },
  ],
};

export default function() {
  let res = http.get('http://localhost:8888/players');
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
