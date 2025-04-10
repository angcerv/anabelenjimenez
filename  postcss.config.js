module.exports = {
    plugins: [
      require('autoprefixer'),  // Agregar prefijos para los navegadores
      require('postcss-preset-env')({ 
        stage: 0,  // Habilitar todas las características de CSS de las versiones futuras
      }),
    ],
  };
  