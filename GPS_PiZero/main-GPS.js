// シリアルからGPSデータ受信
import { requestI2CAccess } from "./node_modules/node-web-i2c/index.js";
import SCD40 from "@chirimen/scd40";

//const { SerialPort } = require('serialport')
//const { ReadlineParser } = require('@serialport/parser-readline')
//const { GPS } = require('gps');
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import GPSpackage from 'gps';
const GPS = GPSpackage.GPS;

const port = new SerialPort({ path: '/dev/ttyS0', baudRate: 9600 })
const parser = port.pipe(new ReadlineParser())
const gps = new GPS();

parser.on('data', function (txtData) {
    gps.update(txtData);
});

gps.on('data', function (data) {
    if ( data.type=="GGA"){ // "RMC"タイプデータを読むと速度(ノット)が得られる
        console.log(data);
    }
    /** 
    console.log("data:", data);
    console.log("stat:", gps.state);
    console.log("==============================================================");
    **/
});
