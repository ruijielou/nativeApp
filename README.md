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
    