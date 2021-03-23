module.exports = {
  lintOnSave : false, //关闭eslint
  publicPath :'./',  //指定文件路径,解决打包完白屏
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        data: `@import "@/common/css/baseColor.scss";`
      }
    }
  },
  
}