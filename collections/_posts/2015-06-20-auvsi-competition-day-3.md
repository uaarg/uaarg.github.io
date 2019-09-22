---
layout: post
title: AUVSI SUAS Competition Day 3 Performance and Results

cover_image: flight_line_tents_aerial.jpg

excerpt: "A day filled with flying"

author:
    name: Rijesh Augustine
    bio: BDFL, just not for life. Refers to himself in the third person.
---

Hi All,

Competition Day 3 has arrived and past. Yesterday we found out that we were team number 31 of 32 for flying. That meant that our flight time would be early in the morning. Big shout out to our base access liason, Brendan. He allowed us to store some equipment in his truck the day before, allowing us to keep our plane ready for launch.

<div class="full zoomable"><img src="/assets/images/compplane.jpg"></div>

We reached the flight time and prepped our plane for launch. Our mission time started at 8:53am. Each member of the team had a specific role. Rijesh was the flight commander, Cindy was the imaging technician, Sebastian was the autopilot technician and Brian was the telemetry technician. Rijesh is also usually our safety pilot, but this competition does provide pilots. The safety pilot was fully debriefed beforehand on the workings of the UAV, autopilot controls, and failsafes. 

<div class="full zoomable"><img src="/assets/images/working.jpg"></div>

#Mission Time#

From the start of mission time we brought the plane into launch configuration in a little less than 3 minutes. This involved powering up the plane, establishing a telemetry link, establishing a Wi-Fi link, performing camera exposure and focus lock, installing the camera and engaging our image capture software. During this time Cindy and Sebastian set up the software portions of imaging and autopilot respectively. Rijesh was busy turning on the plane and configuring the camera. 

At this point the plane was ready for launch. Rijesh hand launched the plane and the safety pilot put the plane at 130m above the ground. Autonomous flight was engaged at this point. The plane did a 1/2 circle of a standby waypoint and proceeded to perform the autonomous waypoint navigation. This portion of the mission involves the plane flying to different waypoints autonomously. there are 6 different waypoints at varying altitudes. The autopilot performed this task admirably. Yea Autopilot lead.

Next came the autonomous search area navigation. This task involves the plane autonomously performing a search pattern over a search area, while capturing images of the ground. The autopilot again excelled at this task.

<div class="full zoomable"><img src="/assets/images/flightplan.png"></div>
Flight Plan

<div class="full zoomable"><img src="/assets/images/path.png"></div>
Flight Path

The next two tasks that were attempted were the Off axis target task and emergent target. The off axis target is looking for a target that is outside the operational area. This task was attempted by circling a waypoint near the edge of the operational area at increasing altitudes. We did not find this target. The emergent task involves being given a waypoint at the start of mission time and being able to have the plane autonomously navigate to this target.

The plane was then landed in autonomous mode and the 900 MHz link was turned off. In total ~23 minutes of mission time had elapsed out of our maximum of 40 minutes. Less than 30 minutes of mission time = Bonus Points!


#Post Processing#


Right before takeoff we lost our Wi-Fi communication link with the plane. This link is designed to transfer images to our ground imaging station for immeadiate processing. As a result all of our image processing had to be done after the plane had landed.

<div class="full zoomable"><img src="/assets/images/commandtent.jpg"></div>

Images were then transferred onto ground station computers. Our ground imaging station software is not fully functional so a manual export had to be preformed. Rijesh and Cindy went through the photos reading out load the image number, and target description whenever they found a target. The next step was to manual insert the GPS data for each target. We found all 8 targets. Yay imaging lead!! 


<div class="full zoomable"><img src="/assets/images/target.jpg"></div>



<div class="full zoomable"><img src="/assets/images/brian_on_trailer.jpg"></div>


#Results#

The competition is scored based on three different areas. A Journal Paper, a Flight Readiness Review and the Flight-Mission Demo. In total 55 teams had registered and had plans to display their unmanned aerial systems (UAS). Teams from around the world, including Turkey, Israel, India and Romania, participated. Of those 55 teams only 39 completed the Journal Papers. Of those 39 only 32 participated in the Flight-Mission Demo. UAARG placed 18th.

The Journal Paper is a technical paper detailing the design and testing of our UAS. Andrew, Rijesh and Cindy were the primary authors of this paper. In the feedback they let us know that they really liked the parts Andrew had written. They recommended more information on testing. We placed 23 of 39. 

The Flight Readiness Review is a briefing that is used to show the judges that a team is ready and prepared to fly. Again they recommended that we provide more information on testing. We placed 28 of 34.

So how did we get 18? Well our Flight-Mission Demo went really well. This area is where teams actually give a demonstration of there system. Autopilot-wise the system performed admirably. The plane passed over each waypoint and was within 7m of the target waypoint alitude. Shout out to Sebastian for setting up our stellar flight plan. Our Imaging system ran throughout the flight and we were able to capture images of the entire search area. We placed 11th out of 32 teams in actual flight performance.

#Future#

For Autopilot we are looking into autonomous takeoff and landing. As well we are looking into incorporating better altitude control loops for wind conditions.

For Imaging we want to implement an external magnetometer away from current carrying wires to improve compass heading. We also want to do further tests on image capture and autopilot tagging lag. As well our Ground Imaging Station software needs to be improved so that it can be incorporated into our workflow. In reviewing the pictures we actually found the emergent target. Unfortunately we didn't recognize it. Due to our software limitations we were not able to have both imaging operators look at all the images.

<div class="full zoomable"><img src="/assets/images/emerge.jpg"></div>

Boo Imaging lead.

For Communications we need to improve on establishing and maintaing Wi-Fi data links. 

#Conclusion#

Overall our performance was very well, especially if you consider the manpower and number of individuals who participated in autopilot and imaging. We'd like to thank everyone for making this such a success. This includes our faculty advisors Duncan Elliott and Michael Lipsett for all the time they spend with us. Peter Cary our safety pilot and airframe advisor. Cameron Lee for all his help in imaging, advising us on best practices, and staying with the club even after graduation. We would also like to thanks Joseph Patton for all his help in the airframe department and all his many other contributions.  We would also like to thank the University of Alberta and Shell Canada for all of the support they have provided. 
