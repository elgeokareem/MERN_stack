path = require("path");

module.exports = {
  entry: "./src/frontend/index_react.js",
  output: {
    path: path.join(__dirname, "src", "backend", "public"),
    filename: "bundle.js",
  },

  //Paso 6
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },

      //Paso 5 para los css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      //paso 6
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      //Paso 7. Para importar como React Component
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
