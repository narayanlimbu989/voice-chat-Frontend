import axios from "axios";

const base = "http://localhost:5000";
const api = axios.create({
  baseURL: base,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("/api/send-otp", data);
export const verifyOtp = (data) => api.post("/api/verify-otp", data);
export const activated = (data) => api.post("/api/activate", data);
export const logout = () => api.post("/api/logout");
export const createroom = (data) => api.post("/api/rooms", data);
export const getallRooms = () => api.get("/api/rooms");
export const getRoomsTitle=(roomId)=>api.get(`/api/rooms/${roomId}`)

// interceptor
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const orginalRequest = error.config;
    if (
      error.response.status === 401 &&
      orginalRequest &&
      !orginalRequest._isRetry
    ) {
      orginalRequest._isRetry = true;
      try {
        await axios.get("http://localhost:5000/auth/api/refresh", {
          withCredentials: true,
        });
        return api.request(orginalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    throw error;
  }
);

export default api;
