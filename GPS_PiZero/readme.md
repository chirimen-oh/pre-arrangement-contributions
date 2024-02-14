PiZeroのシリアル端子に、GY-GPS6MV2等のシリアル接続GPSレシーバーを繋ぐ

* OSの設定
  * ```sudo raspi-config```
  * interface -> serial port -> disable serial console , enable serial port
  * Note: この設定はUSBシリアルのコンソールログインには影響しない
* 結線 (GPSのRX端子の結線は基本動作では不要)
* 動作確認
  * ```cat /dev/ttyS0```
  * Note: GPS衛星電波受信されていなくてもメッセージが出力される。 ```/dev/serial0``` も使える
* シリアルポート及びGPSのライブラリを導入(myAppディレクトリで)
  * ```cd myApp```
  * ```sudo npm install serialport gps```
* ```node main-GPS.js```
