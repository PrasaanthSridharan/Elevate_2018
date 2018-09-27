var mqtt = require('mqtt');
var gpio = require('rpi-gpio');
var client = mqtt.connect("mqtt://192.168.1.113:1883");

client.on('connect', function () {
  client.subscribe('elevate/alarm', function (err) {
    if (!err) {
      client.publish('elevate/alarm', 'Connected');
    }
  })
  client.subscribe('elevate/request', function (err) {
    if (!err) {
      client.publish('elevate/request', 'Connected');
    }
  })
});

gpio.setup(37, gpio.DIR_IN, read37);

var prevState1 = true;

function read37(err) {
    if (err) throw err;

   setInterval( function(){
    gpio.read(37, function(err, value) {
        if (err) throw err;
        if(value != prevState1) {
client.publish('elevate/alarm', 'Tampering Detected!');
console.log('The 1st value is ' + value);
prevState1 = value;
} 
    })}, 10);
}

gpio.setup(35, gpio.DIR_IN, read35);

var prevState2 = false;

function read35(err) {
    if (err) throw err;

   setInterval( function(){
    gpio.read(35, function(err, value) {
        if (err) throw err;
        if(value != prevState2) {
client.publish('elevate/bike', value.toString());
console.log('The 2nd value is ' + value.toString());
prevState2 = value;
}
    })}, 10);
}

gpio.setup(16, gpio.DIR_IN, read16);

var prevState3 = false;

function read16(err) {
    if (err) throw err;

   setInterval( function(){
    gpio.read(16, function(err, value) {
           if (err) throw err;
        if(value != prevState3 && value) {
//client.publish('elevate/alarm', value.toString());
console.log('Bike Present: ' + value.toString());
prevState3 = value;
}
    })}, 10);
}


gpio.setup(33, gpio.DIR_OUT);

function write33(err) {
  if(err) throw err;
  client.on('message', function(topic, message) {
    if(message.toString() == "unlock") {
      console.log("Unlocked");
      gpio.write(7, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
    }
})
} 


const raspi = require('raspi');
const Serial = require('raspi-serial').Serial;
 
var options = {
  "portId": "/dev/ttyUSB0",
  "baudRate": 115200
};


var prevBikeDock = "1";
raspi.init(() => {
  var serial = new Serial(options);
  serial.portId='/dev/ttyUSB0';
  serial.open(() => {
    serial.on('data', (data) => {
      let buf = Buffer.from(JSON.parse(JSON.stringify(data)).data);
      let str = buf.toString('utf8');

      if(str.indexOf('LOW') > -1 && prevBikeDock != "1") {
        console.log('LOW');
        client.publish('elevate/bike', "1");
        prevBikeDock = "1";
      } else if (str.indexOf('HIGH') > -1 && prevBikeDock != "0") {
        console.log('HIGH');
        prevBikeDock = "0";
        client.publish('elevate/bike', "0");
     }
    });
  });
});

