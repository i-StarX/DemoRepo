import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 5,
  duration: "5s",
};

export default function () {
  
            const payload = JSON.stringify({"username": "rallen.estrella@istar-x.com", "password": "testpassword", "sessionExist": true});

            const params = {
                headers: {
  "Requestid": "1733265093156null",
  "Authorization": "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
  "Content-Type": "application/json"
}
            };

            let res = http.post("https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES", payload, params);
            

  check(res, {
    "✅ Status is 200": (r) => r.status === 200,
    "🚀 Response time < 5000ms": (r) => r.timings.duration < 5000,
  });

  sleep(1);
}
