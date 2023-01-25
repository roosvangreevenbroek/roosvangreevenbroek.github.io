---
color: "#abcbdf"
title: "2019 · A video call feature for Minddistrict.com"
intro: "I created and supported implementation of a responsive design for a new video call feature during my internship at Minddistrict; a leading European e-mental health provider (website and app) that provides cognitive behavioural therapy modules and diaries that can be tailored into personalised routes to recovery. People can go through modules individually, or guided by their healthcare professional(s) who can help tailor modules, track progress and provide feedback within the Minddistrict environment through chat or a (group)video call."
team: "Agile scrum team with 1 UX/UI designer (me), 2 developers, 1 QA and a product owner. "
role: "Conducting secondary research, exploring ideas through sketching, creating multiple interactive prototypes and iterative testing."
timeline: "June - July 2019"
overviewIntro: "Designed a video feature for the responsive Minddistrict website to offer support from therapists during patients' online self-help journey."
headingLarge: "./heading-large.png"
headingSmall: "./heading-small.png"
nextPath: "/projects/make-some-noise-for-nature"
nextName: "Make Some Noise For Nature"
order: 2
outline: false
---

import ContentSection from '~/components/ContentSection.vue'
import ContentImage from '~/components/ContentImage.vue'
import ContentVideo from '~/components/ContentVideo.vue'

<content-video url="https://player.vimeo.com/video/440793980" size="wide" caption="THIS VIDEO SHOWS THE PROTOTYPE OF THE VIDEO CALL FEATURE"/>

<content-section>
  <template v-slot:title>
    The problem
  </template>
  <template v-slot:body>
    <p>The video call feature was not integrated in the platform. Users were required to download additional software on their device to support video calls. An incoming call in the Minddistrict environment, communicated with a page-wide bar at the top, pushed down the whole UI. When answering the call, users had to wait several minutes for the - not user friendly - video call software to start up. Additionally, this software would not support video calls anymore within months. The need to change led to the wish of Minddistrict to create their own video call feature while improving usability. </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Challenge
  </template>
  <template v-slot:body>
    <p>Create a responsive design of an integrated, easy to use video call feature in the therapist and clients’ Minddistrict environment. It was chosen to design for web first, where currently the majority of video calls took place. The most prominent user need was to support continuation of video calls throughout the website as clients and therapists often navigated through modules and diaries to discuss progress.</p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Research & Requirements
  </template>
  <template v-slot:body>
    <div>
      <p>
      Video call features are ubiquitous and contain similar structures throughout different platforms. It is safe to say that users have a mental model of how video calling works. Therefore, I chose to conduct a competitive product survey to explore video call features of much-used platforms and perform a heuristic analysis according to Nielsens’ general principles. I translated the results into Minddistrict specific design requirements. Minddistricts’ video call feature should: 
      </p>
      <ul>
        <li>
          Contain the standard functions; options to answer / deny the call, (un)mute, turn camera on/off, advanced settings, and well explained error messages
        </li>
        <li>
          Communicate and support incoming calls, ongoing calls, ended calls wherever page the user has navigated to within Minddistricts’ website
        </li>
        <li>
          Prevent users from accidentally ending the video call while navigating through the website
        </li>
        <li>
          Include the already existing chat function to support sharing resources easily during the call
        </li>
        <li>
          Support group calls, taking users’ varying preference on the amount of stimuli presented into account
        </li>
      </ul>
      <p>
        After secondary research, I explored the user journey in different scenarios through creating a user flow. This helped me to get an overview of where and how the feature would be included and used, and which interactions would be needed. 
      </p>
    </div>
  </template>
</content-section>

<content-image size="wide" caption="USERFLOW OF DIFFERENT SCENARIO’S OF THE VIDEO CALL FEATURE">
  <g-image src="./1.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    First Iteration
  </template>
  <template v-slot:body>
    <p>
      I reviewed ideas through sketching and created quick wireframes and clickable prototypes to communicate and test these ideas with the team on a daily basis to gain quick feedback on software feasibility and usability. 
    </p>
    <p> 
      I first explored the idea of a picture-in-picture design, enabling a simple and flexible integration of the feature and continuation of the video call throughout different pages; ideal in mimicking a natural conversation. I added a ‘start video call’ button on top of the (group)chat or at contacts, so calls could be initiated.
    <p>
    </p>
      Incoming calls would be communicated by sound and I created a black pop-up tile in the right corner to clearly notify users of incoming calls without fully interrupting them so they could continue their task/and or ignore the call. The pop-up tile also wouldn’t push the UI of the page down.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="FIRST IDEA OF PICTURE - IN - PICTURE DESIGN FLOW">
  <g-image src="./2-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:title>
    Next Quick Explorative Iterations
  </template>
  <template v-slot:body>
    <p>
      However, the picture-in-picture design was technically not feasible as the Minddistrict platform was not a web app and connection would be lost if users went to another page. Also, the wish was to integrate the already existing chat function with the video call and the design was difficult to scale to group video calls. So, I went back to sketching, wireframing and testing and explored button positions and ways to integrate the chat.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="EVOLUTION OF INTEGRATING THE VIDEO CALL IN THE EXISTING CHAT FEATURE">
  <g-image src="./3-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:title>
    First Basic Design
  </template>
  <template v-slot:body>
    <p>
      The iterations resulted in a first basic design where the video call was fully embedded and prioritised in the chat function, while leaving just enough space for the chat on the right. The more the page is scaled to ‘phone’/less text-friendly format, the more emphasis is placed on the video call. The incoming call tile interaction of the first iteration was reused. However, if users where using the chat, taking the call resulted in an sudden and unexpected expansion of the chat UI. Therefore, I decided to view incoming calls, when users are on the chat page, already inside the chat UI to communciate users where the video call would take place. 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="FLOW: WHEN ON THE CHAT PAGE INCOMING CALL VIEWED INSIDE THE CHAT INTERFACE">
  <g-image src="./4-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      To ensure continuation of the video call, I decided to give users the option, through a pop-up, to open the chat in a new window when they navigated to somewhere else. This also gave users the freedom to adjust the place and size of the video call window to their preferences. In the other window, I aimed to inform users of their ongoing call in the other window through an adjusted incoming call tile.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="CONTINUE CALL IN OTHER WINDOW TO SUPPORT NAVIGATING THROUGH MINDDISTRICT">
  <g-image src="./5-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:title>
    Avoiding Errors
  </template>
  <template v-slot:body>
    <p>
      Many errors in video calling resulted from the hang-up button being too close to others. In sketches, I aimed to avoid this by separating this button from others, but as other UI elements such as names, (multiple) error messages and multi-participant views would also be added, this would quickly result in a chaotic UI. I made the choice to group all buttons together at the bottom, leave enough space between them and order them based on frequency of use. To minimise cognitive load, buttons would disappear during inactivity. I created clear error messages to inform and instruct users who experienced slow internet connection, audio or video problems.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="DISAPPEARING BUTTONS IF INACTIVE AND CLEAR ERROR MESSAGES">
  <g-image src="./6-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:title>
    Group Calls
  </template>
  <template v-slot:body>
    <p>
      I experimented with different solutions to visualise multi-participant video calls. Prioritising the person who speaks was found most natural, along with small video images of others that gave an affordance of the presence of others. 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="EXPLORATIONS OF DIFFERENT VIEWS OF GROUP VIDEO CALLS">
  <g-image src="./7-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      As space was limited and users should not be overloaded with too many moving images, I chose to show four people in total. To allow the user viewing everyone present and absent in the call, I decided to add an overlay with names and profile pictures which the user could access via using the button ‘+ 3’. Ideally, attendees would be viewed with their live video image in a gallery mode but in technical tests done by my team this led to very high use of power and internet.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="FINAL PROTOTYPE GROUP CALLS">
  <g-image src="./8-large.jpg" class="hidden md:block" />
</content-image>

<content-section>
  <template v-slot:title>
    Outcomes And Learnings
  </template>
  <template v-slot:body>
    <ul>
      <li>
        An embedded video call feature scalable to phone, ipad and desktop, now also implemented and in use. 
      </li>
      <li>
        At the time I did not have much coding knowledge, and collaborating on this project with developers taught me the (im)possibilities, complexity and time spent on technically implementing certain design choices. This helped me to design more code-consciously in order to land the product more quickly.
      </li>
    </ul>
  </template>
</content-section>
