# ADRSZOD ゼロワン 臭気センサ拡張基板 をとりあえず動かしてみる
* https://bit-trade-one.co.jp/adrszod/
* TP401がI2C ADCのMCP3424 ch1 に接続されている基板
* MCP3424のI2Cアドレスは0x68

まだ中途半端ですが、I2C ADCのドライバはmcp3424.js、アプリはmain-mcp3424.js 同じディレクトリに設置。
