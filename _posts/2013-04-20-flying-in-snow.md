---
layout: post 
name: flying-in-snow 
title: Flying in the Snow 
time: 2013-04-20 00:40:00.000000000 -06:00 
excerpt: "It's been quite a while since our last post. Many of you can probably guess why... exams. As this semester comes to an end, we're all extremely busy with studying. Nevertheless, our competitions are approaching fast, so we're continuing work on our UAV."
author:
    name: UAARG
--- 

It's been quite a while since our
last post. Many of you can probably guess why... exams. As this semester comes
to an end, we're all extremely busy with studying. Nevertheless, our
competitions are approaching fast, so we're continuing work on our UAV.  
  

[ ![](http://3.bp.blogspot.com/-2LL-
VYAcTPk/UXI2-t50P_I/AAAAAAAAAEs/8QTaoLCUIOE/s1600/HPIM5304.JPG)
](http://3.bp.blogspot.com/-2LL-
VYAcTPk/UXI2-t50P_I/AAAAAAAAAEs/8QTaoLCUIOE/s1600/HPIM5304.JPG)

Adjusting the Skis

We went flying this Wednesday to test our autopilot. Our objective was to
perform a few manual flights to record the necessary data to start configuring
the autopilot for our Senior Telemaster Plus. Then, if everything went
according to plan, we would attempt stabilized (auto1) flight. Of course,
everything didn't go according to plane. Because we had so many issues, here
they are itemized:  
  

  * Most of the picnic tables were buried in snow, so we had to use one located right next to a pool of water. 
  * The autopilot couldn't receive a location from our new GPS. In fact, it didn't receive any data at all. We figured this was a wiring issue, so just connected the old GPS. 
  * When trying to use X-CTU to set the power level of the ground XTend radio, we couldn't connect. We eventually solved this by turning off the plane's XTend - it was transmitting to the ground XTend and blocking our attempts. 
  * When attempting our first take-off, the snow presented enough resistance to keep the plane on the ground. 
  * When attempting our second take-off (with new batteries), the propeller pulled itself off of the shaft. 
  * When attempting our third take-off, the plane... took off. Wait, that's not a problem, that's a good thing. Let's put it in a new section: 
Flight  
  
Here's a video of the flight. It was very bright out and the camera isn't that
great, so it's very poor quality, but anyway:  

  

We were able to fly for a few minutes and collect the key data needed to
configure the autopilot. Specifically, we'll use the typical cruise speed, the
amount of throttled used at this speed, and other similar data.

  

Despite the successful flight (and landing), there was one issue while
airborne - the RC link to the aircraft was lost for a few seconds at two
different points. This is actually a very serious problem since the cause is
unknown and if RC is lost for more than a few seconds, the plane will most
certainly crash. Here are two plots from after the flight showing the points
where the RC link was lost:

  

Altitude and RC Status vs time

  

[ ![](http://2.bp.blogspot.com/-EtaE8OgF-
vw/UXIyyG7EHII/AAAAAAAAAEY/eYBPzosEDLE/s1600/RC+Lost+Plot.png)
](http://2.bp.blogspot.com/-EtaE8OgF-
vw/UXIyyG7EHII/AAAAAAAAAEY/eYBPzosEDLE/s1600/RC+Lost+Plot.png)

Green: Altitude [m]       Cyan: RC Status [good (low), poor (middle), lost
(high)]

Here we can see that there were significant altitude drops right after each
time the RC link was lost.  
  
  

RC Frame rate and RC Status vs time

[ ![](http://2.bp.blogspot.com/-Dovh1nr6joI/UXI1zGXcf3I/AAAAAAAAAEg/RZ5ff_bodn
o/s1600/RC+Framerate+Losses.png) ](http://2.bp.blogspot.com/-Dovh1nr6joI/UXI1z
GXcf3I/AAAAAAAAAEg/RZ5ff_bodno/s1600/RC+Framerate+Losses.png)

Green: RC Status [good (low), poor (middle), lost (high)]     RC Frame Rate
[Hz]

Here we can see that the RC link was indeed weakening - as opposed to it being
a hardware failure or software bug in the PPM encoder.

  
So we're going to have to do some more testing in an attempt to fix this
problem. Over the next days and weeks, we'll be working hard on this and many
more issues that are sure to pop up. Despite being busy, we'll try to keep
making posts, especially once we get to competition, so stay tuned!!!  
  
  

