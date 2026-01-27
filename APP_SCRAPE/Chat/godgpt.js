const axios = require('axios');

let data = JSON.stringify({
  "content": "Gen a women",
  "images": [],
  "region": "",
  "userLocalTime": "2026-01-27T11:02:05.443",
  "userTimeZoneId": "Asia/Dhaka",
  "sessionId": "5b1225cd-f63e-47a1-af85-69cfb0790972"
});

let config = {
  method: 'POST',
  url: 'https://station-developer.aevatar.ai/godgptprod-client/api/gotgpt/chat',
  headers: {
    'User-Agent': 'GodGPT/33 CFNetwork/3860.300.31 Darwin/25.2.0',
    'Accept': 'text/event-stream',
    'Content-Type': 'application/json',
    'apptype': 'ios',
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ2QzE0NjQ1OTM5NkVDOEM4NkFBRTYzOUY1REFDNjE0REVBNzM2QkIiLCJ4NXQiOiJSc0ZHUlpPVzdJeUdxdVk1OWRyR0ZONm5OcnMiLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL2F1dGgtc3RhdGlvbi5hZXZhdGFyLmFpLyIsImV4cCI6MTc2OTY2Mjg2OSwiaWF0IjoxNzY5NDkwMDcwLCJhdWQiOiJBZXZhdGFyIiwic2NvcGUiOiJBZXZhdGFyIG9mZmxpbmVfYWNjZXNzIiwianRpIjoiYmQwMjllZWYtMzBjNy00NzhkLWJjNTItY2I4ZjM1NTYwMjlkIiwic3ViIjoiNmQyMGVmZjctYzI0ZS1kOGViLWQyYzMtM2ExZjEwMDA5MDlkIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiQ2h1ZGkiLCJlbWFpbCI6InZ1bTF3NDUwcmtAYmx0aXdkLmNvbSIsInJvbGUiOlsic3lzdGVtUHJvbXB0R3JvdXAiLCJiYXNpY1VzZXIiXSwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjoiRmFsc2UiLCJlbWFpbF92ZXJpZmllZCI6IkZhbHNlIiwidW5pcXVlX25hbWUiOiJDaHVkaSIsInNlY3VyaXR5X3N0YW1wIjoiUExPQVJXQzczR09KWFVGR0FONURDNFlZMk1BT1JZUjQiLCJvaV9wcnN0IjoiQWV2YXRhckF1dGhTZXJ2ZXIiLCJvaV9hdV9pZCI6ImRiMGMxMjc5LWUyZmQtMWJhMC0zZTJmLTNhMWYxMDAwOTRhMiIsImNsaWVudF9pZCI6IkFldmF0YXJBdXRoU2VydmVyIiwib2lfdGtuX2lkIjoiODQ4NGFlN2UtMjI2OC1kZDhjLWQ1MWUtM2ExZjEwMDA5NGIyIn0.UfT3WvQwOvXIGplHMiOOAtsj1RoqlprdS01Ys7xams_5IVOaPENaU_ewJ1-Mwmna1l-EYZHHet9LcZsaWZMgFwJ6aWVI-BMo4zQEAhD-mr9cnyIouK-UM6vKwd6RHfB3_GVieOIS_pWKDJIS4MIETSnGqQBu4QnjSZoQ__xfChyzq6IUSXl5SpgJJL3C80klvHRrX6juYkfRTGuk_6W9FWzPo3f-9z5-Df0Xfz9O7HkLiWzkGYAQ2VsM-OezUANy9HvMUUJIxCMTWm9R45q58n4rBmCbfUL9tf4J08dG7tfIefpD8_Xr_cEayQItQZyEpqNvDNJkk8ihQzPYOdbpV6xi6clgHmn2UUWl2CaKOsU8QcLxmPECofHAma0lLnjC8Fnpvrjunk0LMAshJiavnb5tnj38QI3CUIdwB1hAQsEKqzWwnAxmCC-cXKRptu9tz3HzET2qPhx0sD0FFUZSGTEdb69pFAq37kEwf1yFt6ZVkqbcxLfvDpULhRM-l0vm6Tk36jC-jAfC3N24jD3BGZvwdeTAjcL6p2ctQqlw0c2JzEN1Q6aMX8HcSTkMKwDJ25B18_5IzE5AiRUaXP-tSGP4DfJrWGRZh3xSsdCY-uyjttGMunpZCfN2ff50o-zaMz_GfddwPcZKF27gnsrpr0XCP_C2oq2VAFzwj9RXTK8',
    'x-requested-with': 'XMLHttpRequest',
    'priority': 'u=3, i',
    'godgptlanguage': 'en',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'no-cache'
  },
  data: data
};

axios.request(config)
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));
