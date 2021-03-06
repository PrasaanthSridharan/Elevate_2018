![Logo](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Presentation%20Resources/logo.png)

# Smart Bike Rack (Elevate 2018)
---
Welcome to the Smart Bike Rack repository. This is the github page for the smart bike rack (with an integrated lock) prototype built during the 36-hour for Elevate 2018. There are three major components in this repository (Hardware, Software, Presentation) and will be anatomized in detail for your betterment henceforth. 

---

## Contents 
1. Hardware - Mechanical Design
2. Software 
    1. IoT - Raspberry Pi 3 B
    2. Android - Smart Lock
    3. Web - Operator Interface
3. Presentation Resources 





## 1 Hardware - Mechanical Design 
The initial prototypes for the mechanical engineering designs can be found in the following directory. 

```
Mechanical Design/
```
This directory encomposes Solid Works and AutoDesk Inventor files for the 3D printed small scale prototype as well as the large scale equivalent. 

![Mechanical Design 1](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Presentation%20Resources/bike_rack_3d_rendering_2.png)

![Mechanical Design 2](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Presentation%20Resources/bike_rack_3d_rendering_1.png)

![Mechanical Design 3](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Presentation%20Resources/bike_rack_3d_rendering_3.png)


## 2 Software 
The software is composed of 3 major components as follows: IoT, Android, and Web. The IoT deals the software written for a Raspberry Pi to integrate with the physical sensors, actuators, and controllers in the physical, small-scale, 3D printed prototype. The Android application deals with the end-user interface designed to interact with the bike lock. The Web deals with the web platform to manage multiple bike racks that will traditionally not be visible to the end user, but for the owners of the bike rack and bike rack security. 
### 2.1 IoT - Raspberry Pi 3 B
The Raspberry Pi is at the heart of the IoT system that interacts with the Android application, and operator interface to interact with the physical sensors and actuators of the bike rack system. 
### 2.2 Android - Smart Lock
The Android application serves to be the authentication and authorization tool to communicate with the physical bike rack in being able to reserve, lock, and unlock the bike rack. 

![Android Screenshot 1](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Android/screenshot_1.png)

### 2.3 Web - Operator Interface 

The operator interface serves to be the monitoring center for all bike stations under the purview of security. From the operator interface, you can view the current docked status, lock status, and tampering status of a bike rack in a station with live updating. 

![Station Overview](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Web/screenshot_station.png)

![Rack Overview](https://raw.githubusercontent.com/PrasaanthSridharan/Elevate_2018/master/Web/screenshot_rack.png)

## 3 Presentation Resources 
The presentation file can be found [here](https://github.com/PrasaanthSridharan/Elevate_2018/blob/master/Presentation%20Resources/Presentation%20for%20IronRack.pptx). 