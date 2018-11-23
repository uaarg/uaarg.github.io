--- 
layout: post 
name: its-reading-week 
title: It's Reading Week!!! 
time: 2013-02-18 15:59:00.000000000 -07:00 
excerpt: "It's finally reading week!!! A beautiful calm in the center of the storm."
author:
    name: UAARG
--- 

It's finally reading week!!! A
beautiful calm in the center of the storm.  


We've been taking this opportunity to make significant progress. We had a work
session on Friday and another on Sunday. We're having a Critical Design Review
on Tuesday in addition to our weekly meeting. We're also volunteering at
WISEST on both Tuesday and Wednesday. Sometime near the end of the week we'll
go flying to do some of our first autopilot testing and likely have a pizza
and movie night afterwards to celebrate the progress.

  

So, for what's happened since the last post:

  

Air-frame:

  

We've finalized our design for stronger landing gear and have started
construction. The only part we have to build is a simple wooden structure
which connects the carbon fiber or metal gear to the plane. Hopefully it'll be
done before testing later this week, but if not, then we'll use the stock
landing gear.

  

Autopilot:

  

Lots has happened with the autopilot. We got our new PPM encoders in last week
and got them up and running with the autopilot right away. We're still not
sure what happened to our old one, but the new ones are working great. For
those of you not familiar with it, the PPM encoder takes up to 8 PWM signals
from the RC receiver and converts them to a single PPM single which the
autopilot can understand. This is necessary to use a modern 2.4 GHz RC
transmitter with the Paparazzi system which was designed for older, analog
transmitters.

  

[ ![](http://3.bp.blogspot.com/-moLoDd3CH44/USKT2hkUvrI/AAAAAAAAADg/RahBCTpR-O
8/s1600/IMG_20130205_164150.jpg) ](http://3.bp.blogspot.com/-moLoDd3CH44/USKT2
hkUvrI/AAAAAAAAADg/RahBCTpR-O8/s1600/IMG_20130205_164150.jpg)

The New PPM Encoders

  
We also configured Paparazzi to use a switch on the RC controller as a kill
switch so that we can bring the plane down even if all we have is the RC link.
Previously, we could kill the plane from the ground control station, but if
the telemetry link is lost then our only two options are to let the plane try
and fly itself home or to take over manual control. If the plane is at the
edge of visual range and there are issues with autonomous flight, then neither
of these two options are particularly appealing. For those interested in how
we did this, take a look at our git repository at [ github.com/uaarg/paparazzi
](http://github.com/uaarg/paparazzi) . Or for the particular commit, click [
here ](https://github.com/uaarg/paparazzi/commit/2d9048ba2836bc3edd36863ccfe82
a94ae1704ef) .  
  
That's not all we did with the autopilot. We also got our new XTend radios in.
These are the radios used to provide the telemetry link between the autopilot
and the Ground Control Station. They operate at up to 1 W on the 900 MHz band.
Configuring the new radios was simple because we saved our configuration from
before. We immediately then went out to test them again. The last time we
tested them, we couldn't get them to work at more than around 100 m. However,
we were testing them using a loop-back on the autopilot side. Because of our
particular configuration which is optimized for high throughput from the plane
to the ground and low, but important, throughput from the ground to the plane,
we figured this testing procedure might be part of the problem. So this time,
we tested the radios using the autopilot and it's Ground Control Station. We
went out to Quad to see if the radios would work at distances of over 100 m.
The image below shows the path the plane was walked through quad:  
  

[ ![](http://3.bp.blogspot.com/-iswfqLX9c5k/USKvk_LNVaI/AAAAAAAAADw/v6fKTkDbFz
s/s1600/Telemetry+Test.PNG) ](http://3.bp.blogspot.com/-iswfqLX9c5k/USKvk_LNVa
I/AAAAAAAAADw/v6fKTkDbFzs/s1600/Telemetry+Test.PNG)

Walking through Quad with the airplane

  
We lost signal after there was no more room to walk without buildings getting
in the way. We measured the distance to be 300 m (the yellow line). So it
looks like the link is working good. We'll have to do further testing out in
the country to see if it can go 500 m or 1 Km or 4 Km.  
  
The last thing we did with the autopilot was figure out a way to configure the
on-board radio with it still in the plane, connected to the autopilot.
Previously we've had to take it out and connect it directly to the computer
which has a hassle. Achieving this was surprisingly easy since Paparazzi has
code to allow the autopilot board to behave like a USB to serial converter.
All we had to do was flash the TWOG with this in the air-frame file:  
  
```
<firmware name="setup">
<target name="tunnel" board="twog_1.0" />
<target name="usb_tunnel_1" board="twog_1.0" />
</firmware>
```
  
Then, the computer that's connected to the TWOG's USB port can talk to the
radio through the TWOG and we can configure the radio without removing it from
the plane.  
  
On-board Software  
  
On Sunday, we took a look at the on-board software to try and fix the
segmentation faults we've been having. With the Panda Board's UART RX
connected to the autopilot's TX we could how see the telemetry data going from
the plane to the ground. However, the segmentation faults continued. We then
configured the FTP server properly and tested that the Panda Board could
connect to it. Running the on-board code after this worked. So success!!!! We
still have work to do to get a fully functional system though. And we want to
re-factor the code to allow it to run even when all the parts aren't connected
(camera, autopilot, FTP server, etc...).

