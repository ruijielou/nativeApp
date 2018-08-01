# 关于手机启动测试
1. 手机开启开发者模式
2. 连接当前开发者电脑
3. 运行npm run start
4. react-native run-android
5. 手机启动悬浮窗，可以直接reload即时刷新调试
6. 打包 在Android文件夹下运行 ./gradlew assembleRelease

## 更改应用名称
    在strings.xml里更改
    `
    <resources>
        <string name="app_name">这儿输入你要改的名称</string>
    </resources>
    `
    更改完成后执行react-native run-android 
    如果遇到失败或者报错就进android文件夹执行 ./gradlew clean
    然后再cd ../   回到上级目录执行react-native run-android 
    如果依然报错就多编译一次
## 百度地图集成的坑
1. 项目按照正常流程进行，会报@Override方法不会覆盖或实现超类型的方法
2. 在react-native-baidu-map里边找到android src main Java BaiduMapPackage 删除最后一个creatJsModule
3. 关于只现实网格线的问题，去百度AK申请中心，按照教程申请配置
    申请ak的时候需要开发版SHA1和发布版SHA1这个也按照正常生成，记得在填写包名的时候一定要跟开发系统里边一一对应
4. 重新运行就没有问题了
