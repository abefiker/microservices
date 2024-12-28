import axios from 'axios';

export default async function buildClient({ req }) {
  if (typeof window === 'undefined') {
    // Server-side
    return axios.create({
      baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers, // Pass headers from the request
    });
  } else {
    // Client-side
    return axios.create({
      baseURL: '/', // Localhost or your API base URL for the client-side
    });
  }
}
