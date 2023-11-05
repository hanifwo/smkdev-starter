const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1d9d5b90b0537fa0035c9eedcb326b56',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;