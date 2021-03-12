---
color: "#fddcc3"
title: "Heart - A bio-feedback drawing tool"
intro: "As part of my Masters’ HCI at the University College of London, I was challenged to design a novel interactive physical user interface prototype using methods of physical computing and digital fabrication. I created a full functioning physical prototype of my concept ‘heart’; an off-line bio-feedback drawing tool that measures your stress and changes the colour of a pencil accordingly, helping you to identify and reduce stress through drawing. The prototype consists of multiple sensors and actuators, which I programmed with C++. I designed the physical user interface in Tinkercad and Illustrator and realised the designs using 3D printing and laser cutting."
team: "Individual University project"
role: "Secondary research, sketching, hardware prototyping, programming, 3D printing and lasercutting."
timeline: "March - May 2020"
overviewIntro: "I developed a fully functional physical prototype of my concept heart: a tool that helps identify and reduce stress through drawing."
headingLarge: "./heading-large.png"
headingSmall: "./heading-small.png"
nextPath: "/projects/technology-for-sexual-desire"
nextName: "Technology for Sexual Desire"
order: 4
outline: true
---

import ContentSection from '~/components/ContentSection.vue'
import ContentImage from '~/components/ContentImage.vue'
import ContentVideo from '~/components/ContentVideo.vue'

<content-video url="https://player.vimeo.com/video/442145699" size="wide" caption="THIS VIDEO SHOWS THE IDEA BEHIND HEART, DESIGN PROCESS AND PROTOTYPE"/>

<content-section>
  <template v-slot:title>
    The problem
  </template>
  <template v-slot:body>
    <p>
      High stress levels are increasingly affecting peoples’ daily life. To cope with this successfully, people need <a href="https://www.researchgate.net/publication/220766070_What's_Your_Current_Stress_Level_Detection_of_Stress_Patterns_from_GSR_Sensor_Data" class="link" target="_blank" rel="noopener">more awareness</a> of their stress level and guidance on how to reduce it. Ubiquitous smartphone apps can be <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6614998/" class="link" target="_blank" rel="noopener">helpful</a>, but are also found to <a href="https://pubmed.ncbi.nlm.nih.gov/29673047/" class="link" target="_blank" rel="noopener">cause stress</a>, whereas drawing can effectively <a href="https://www.tandfonline.com/doi/full/10.1080/07421656.2016.1166832" class="link" target="_blank" rel="noopener">reduce stress</a>.
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Challenge
  </template>
  <template v-slot:body>
    <p>
      Help people better cope with stress through designing an offline physical tool that shows peoples’ current stress level realtime and helps reduce it, so people can learn (based on this feedback) how stress and relaxation feel and can be better controlled.
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Initial sketches
  </template>
  <template v-slot:body>
    <p>
      First I created initial sketches to explore the concept, where heart rate variability (HRV; stress) would be measured by holding a pen with a sensor and color-changing pulsating drawn lines would represent the drawers’ stress level. Together with peers, I reviewed the concept and concluded that holding the pen to measure HRV would challenge receiving reliable stress signals and that pulsating drawn lines were too unclear in communicating additional information on stress level (and probably unnecessarily difficult to compute). 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="INITIAL SKETCH OF HEART">
  <g-image src="./1.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Testing sensors and refining the concept
  </template>
  <template v-slot:body>
    <p>
      With the feedback on my initial sketches in mind, I explored feasible ways to get reliable and real time measures of stress and drawing possibilities. I created and coded multiple hardware prototypes in the Arduino IDE with C++ featuring. I tested combinations of Arduino Uno, Arduino MEGA 2560, NeoPixel strip, LCD shield, Pulse-, GSR-, and MAX30105 Pulse - sensor. 
    </p>
  </template>
</content-section>

<content-image size="full" caption="ITERATIONS OF HARDWARE PROTOTYPE">
  <g-image src="./2.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      Combined measures of the MAX30105 and GSR sensor proved to be reliable in measuring and classifying stress, similar to <a href="https://eej.aut.ac.ir/article_822.html" class="link" target="_blank" rel="noopener">earlier research</a>, and did not need machine learning to recognise stress patterns. Although the LCD shield was quite small, I chose this component to draw on as it was a feasible option for the scope of this project.
    </p>
    <p>
      I refined the concept and instead of the pulsating lines in the first sketch, I included coloured LEDs inside the pencil, matching the colour of the drawn lines, to give additional feedback on stress level and enabling a natural drawing interaction. The sensors would be worn separately on the non-drawing hand to ensure reliable signals.
    </p>
  </template>
</content-section>

<content-image size="normal" caption="REFINED SKETCH AND SCENARIO">
  <g-image src="./3.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Making the hardware work
  </template>
  <template v-slot:body>
    <p>
      It took many iterations to get the hardware to work reliably. The GSR and pulse sensors disturbed the LCD’s touch screen sensor, resulting in only 50% of the drawn lines to be picked up and shown on the LCD screen. I simplified and optimised the code by storing raw data as little as possible and making conditions less dependent on stored data.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="TECHNICAL CIRCUIT AND CODE IN ARDUINO">
  <g-image src="./4.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      Feedback peers gave was that the concept lacked guidance in what to draw, which for people without drawing experience was a need. With bitmaps and code, I added drawing template options so users would feel more empowered to start drawing and relaxing.
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Designing the prototype
  </template>
  <template v-slot:body>
    <p>
      After the hardware prototype worked, I first made sketches of the case and LED-pencil to explore designs, test measurements and holes for the wires. 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="EXPLODED DIAGRAM OF PHYSICAL PROTOTYPE">
  <g-image src="./5.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      I then designed the case with code and Illustrator, based on <a href="https://www.thingiverse.com/thing:17240" class="link" target="_blank" rel="noopener">this design</a>, laser cutted the design in 4mm plywood and assembled it. In Tinkercad I created a hollow 3D model of the LED-pencil (height: 12cm, width: 1.5cm) so the LED-strip would fit inside. The wall thickness was set on 1.5mm, ensuring good stability and enough translucency for the LED lights. 
    </p>
  </template>
</content-section>

<content-image size="normal" caption="DESIGNS OF THE CASING AND PENCIL">
  <g-image src="./6.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      The pencil was printed with PLA and installed with the LEDs. Finally, all components were combined and ‘heart’ was ready for use!
    </p>
  </template>
</content-section>

<content-image size="wide" caption="FULL PROTOTYPE OF HEART">
  <g-image src="./7.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Outcomes and learnings
  </template>
  <template v-slot:body>
    <ul>
      <li>
        If I would have had more time, I would have added an option to save drawings to track stress long-term and explore making the pencil a standalone tool using an Arduino Micro, cartridges with ink and batteries. This way, users would benefit more from its destressing function, making screens redundant and enabling drawing on paper everywhere they want.
      </li>
      <li>
        I had little coding experience before this project, and although learning code starting with C++ was quite frustrating, I learned a lot about how to code.
      </li>
      <li>
        I realised I really liked physical prototyping a lot and am currently saving up for a Snapmaker.
      </li>
    </ul>
  </template>
</content-section>
