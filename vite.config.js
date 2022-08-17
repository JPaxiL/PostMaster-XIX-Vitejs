import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: {
      AUTHZ:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjYwNzY2NzE5LCJleHAiOjE2NjA4NTMxMTl9.i1cRu7K7e3-9tz632xqJ5r0C96o9GnP2ff_hyH80V1w',
      URL: 'https://ciistacna.com/api/',
    },
  },
  plugins: [react()],
});
