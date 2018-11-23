--- 
layout: post 
name: redundant-communication-improvement-to 
title: Redundant Communication - An Improvement to Paparazzi 
time: 2013-04-21 00:06:00.000000000 -06:00 
excerpt: "This is a special post, written to describe the redundant communication project being worked on by myself - Cameron Lee - current president of UAARG. The goal of this project is to allow multiple radio modems or other links be used between the aircraft and the ground station in a redundant fashion so that even if one link is lost, communication can be maintained."
author:
    name: Cameron Lee
--- 

This is a special post, written to describe the
redundant communication project being worked on by myself - Cameron Lee -
current president of UAARG. The goal of this project is to allow multiple
radio modems or other links be used between the aircraft and the ground
station in a redundant fashion so that even if one link is lost, communication
can be maintained.  
  
So far, the plane to ground component has been created and tested. This post
describes how to use it and how it works. The code can be viewed or downloaded
from github:  
[ https://github.com/uaarg/paparazzi/tree/redundant_comms
](https://github.com/uaarg/paparazzi/tree/redundant_comms)  
  

##  Video

The following video is a demonstration of the system working and the interface
that lets you monitor links. The sections below discuss the details more
thoroughly.

  

  

Redundant Link Demonstration for Papparazzi Autopilot

##  Design

I'll assume that the reader is somewhat familiar with how the ground segment
of Paparazzi currently works. However, this information can be found on the
wiki, here:  [ http://paparazzi.enac.fr/wiki/Overview#System_Architecture
](http://paparazzi.enac.fr/wiki/Overview#System_Architecture)  
  
Here's a block diagram showing how the plane talks to the various ground
segment programs (also known as agents):  
  

[ ![](http://3.bp.blogspot.com/-8-YENO6LcNs/UXMRpkJlx1I/AAAAAAAAEZQ/Z3XDrJCRzQ
s/s400/Normal+Communication+Layout.png) ](http://3.bp.blogspot.com/-8-YENO6LcN
s/UXMRpkJlx1I/AAAAAAAAEZQ/Z3XDrJCRzQs/s1600/Normal+Communication+Layout.png)

Paparazzi Ground Segment

The ivy bus lets the programs talk to each other through the use of short
messages. The direction of the coloured arrows is key since it shows the main
flow of these messages. Next we have a block diagram of the redundant link
system:

  

[ ![](http://4.bp.blogspot.com/-nx_p90B7FU4/UXMddbJ_gEI/AAAAAAAAEZg/qnbrS-
bS3l0/s640/Redundant+Communication+Layout.png)
](http://4.bp.blogspot.com/-nx_p90B7FU4/UXMddbJ_gEI/AAAAAAAAEZg/qnbrS-
bS3l0/s1600/Redundant+Communication+Layout.png)

Paparazzi Ground Segment with Redundant Links

Here we can see a new agent, the Link Combiner. We also see multiple
occurrences of the Link agent. When operating in redundant mode, each
occurrence of Link transmits the data it receives from the plane to the Link
Combiner instead of the Server. It does this by transmitting the received
telemetry messages within the TELEMETRY_MESSAGE message which the Server
doesn't listen to. The Link Combiner on the other hand does. TELEMETRY_MESSAGE
messages are sent by each link and include the id of that link. The Link
Combiner listens to all of them and then transmits a single set of messages to
the Server with the combined data. This results in the Server and all other
ground segment agents (such as Messages and the Real Time Plotter) getting
their telemetry data from Link Combiner as if it was coming from a single
occurrence of Link.  

  
  

##  How to Use

In order to implement redundant links using this code, there are three simple
steps to follow:  
  

  1. Connect the hardware - on the airborne side, connect the Tx of the autopilot to multiple radio modems. On the ground side, connect multiple modems as normal (using USB to serial adapters, or whatever). 
  2. Launch a Link agent for each modem. Use two new command line arguments: _ -redlink _ and _ -id. _ The _ -redlink _  flag tells Link that it's one of multiple links. The _ -id _  flag lets you specify an integer number as the id of that particular link. 
  3. Launch the Link Combiner agent. 

The following screenshot shows a setup with two links, connected to serial
ports ttyUSB0 and ttyUSB1, and with id's 1 and 2:

[ ![](http://2.bp.blogspot.com/-4ytdpqXMHa0/UXMlR-
qGkbI/AAAAAAAAEZw/JO959QjWip4/s640/Screenshot+from+2013-04-15+23_02_27.png)
](http://2.bp.blogspot.com/-4ytdpqXMHa0/UXMlR-
qGkbI/AAAAAAAAEZw/JO959QjWip4/s1600/Screenshot+from+2013-04-15+23_02_27.png)

The Agents Running in a Redundant Link Setup

##  Interface

Once the redundant link system is started (even if only one Link is used),
several changes appear in the GCS. This is achieved by the new message
LINK_STATUS which is sent by the Link Combiner. These new features are
designed to allow closer monitoring and better management of the link(s)
between the aircraft and the ground station.

  

The following screenshot clearly shows these changes:  
  

[ ![](http://3.bp.blogspot.com/-jI7EMZ_0614/UXMjlc1MoBI/AAAAAAAAEZo/LwOgVQN336
o/s640/Screenshot+from+2013-04-15+22_59_01.png) ](http://3.bp.blogspot.com/-jI
7EMZ_0614/UXMjlc1MoBI/AAAAAAAAEZo/LwOgVQN336o/s1600/Screenshot+from+2013-04-15
+22_59_01.png)

  

Firstly, we can see that there is a new page in the notebook named Link. This
page contains critical information for each link. More information can easily
be added, but for now, it shows the status of the link (just like the main
Link status indicator in the strip), the current ping time, and the rate of
received messages. So if one link is lost, it's status indicator will turn red
and start counting up just like link 2 in the above screenshot.  
  
Next, we can see that the main Link status indicator that's located in the
strip has been modified slightly. It now shows the ratio of connected links to
the total number of links. I.e. 3/4 means that there are four links and one of
them has been lost. Furthermore, the indicator will be green if all links are
connected, yellow if one or more are lost, and red if all links are lost. Once
all links are lost, the indicator will count up just like before.  
  
Lastly, alerts have been added to the console. Whenever a link is lost or
reconnected, a message will appear in the console stating so. Messages also
appear when a new link is added.  
  

##  Link Combiner

The Link Combiner agent is written in Python. It receives messages from all of
the Links (when they're in redundant mode), and outputs messages to the Server
and other ground segment agents. There is a bit involved however since the
Server and GCS shouldn't be sent identical messages. I.e. if the plane sends a
message and it's received successfully by more than one link, then that
particular message should only sent by Link Combiner once. This is a somewhat
tricky requirement since there is no guarantee that the message will be
received by all of the links, and it's possible that the plane actually sends
a second message that's exactly the same as the first. No extra info (such as
a time-stamp or counter) is added to the messages sent from the plane to the
ground, so the Link Combiner employs an algorithm to detect duplicate
messages. Testing has shown that for typical links, this algorithm performs
extremely well.

  

The algorithm gives each link a circular buffer to store the last N messages.
When a new message comes in on a particular link, the algorithm first checks
if it's already in that link's buffer. If it is, then it's obviously a new
message, so its removed from all of the other buffers if it's in any of them.
Then, the message is sent. If the message isn't already in the link's buffer,
then it's added to the buffer. After that, all of the other link's buffers are
checked for the message. If it's in any of them, then the message was already
received by another link, so isn't sent. If it's not in any of them, then the
message is sent. The following flowchart depicts this algorithm:

  

[ ![](http://1.bp.blogspot.com/-G1LYSsliAiY/UXNBjHj93PI/AAAAAAAAEaI/hom9cRmd3j
I/s640/Algorithm+Diagram.png) ](http://1.bp.blogspot.com/-G1LYSsliAiY/UXNBjHj9
3PI/AAAAAAAAEaI/hom9cRmd3jI/s1600/Algorithm+Diagram.png)

Algorithm to prevent duplicate messages

As the plane sends various, possibly identical, messages and the links gain
and lose connection, there is no guarantee that this algorithm will do a
perfect job of filtering out identical and only identical messages. Howeve  r,
in typical operation, it seems to work very well. And for the application of
displaying aircraft data, the  occasional  missing or duplicate message is
acceptable. There are only a few scenarios where the Link Combiner won't
produce perfect results, and they should come up infrequently:  
  

  1. A message will be sent twice if the buffer size is too small to hold all of the messages received from one link between that link receiving the message and another link receiving the identical message. When the second link receives the message that has already been received, if the original isn't in the buffer anymore, than the algorithm won't know it's a duplicate message. This scenario should be considered whenever implementing a redundant link system. Partly because it is the most likely to come up, but also because if it does occur, then all messages will be duplicated. In order to avoid this scenario, you can set the buffer size as a command line argument of Link Combiner. To know what a good value would be, you can observer the Ping time and Rx messages/s of the links in the new Link page of the notebook. Calculate the minimum buffer size by taking the difference between the largest ping time and the smallest ping time and multiplying it by the largest Rx messages/s. Then apply a safety factor when setting the buffer size - 10 times the calculated value should be good. 
  2. A message won't be sent when it should be if the autopilot sends a message that's the same as one it already sent (same name and exact same values) AND at least one link was lost between the first message and the second AND the link that's receiving the second message doesn't have the first message in it's buffer still. That's three conditions. If this happens, then the Link Combiner will see the second message as a duplicate of the first and will skip it. Only this one message will be missed though - it won't start happening to all messages. Also, the data will have been data that was already received. So if it's for example the battery voltage message, then it's not a big deal to miss it. As long as there aren't links rapidly being lost and gained, then this shouldn't happen often. Note that as the buffer size is increased, I believe that this becomes more likely to happen. 

##  Conclusion

That's it. As you can see, this is just the first half to a completely
redundant communication system. Once the autopilot is programmed to allow
multiple datalink inputs, then a fully redundant, two-directional
communications system can be used with Paparazzi. Furthermore, additional
features could be added such as the ability to send different messages over
different links, or messages at different rates over different links. This
could all be configured in the Link page of the notebook.

  

Feel free to contact me regarding this at cam.w.lee@gmail.com or through the
paparazzi-devel@nongnu.org  mailing list (include my name somewhere in the
e-mail so that it makes it past my filter).

  

\- Cameron Lee

  
  
  
  

