export default {
    proxy: {
        '/api': {
            target: 'http://localhost:9090',
            changeOrigin: true,
            secure: false,
            ws: true
        }
    }
};