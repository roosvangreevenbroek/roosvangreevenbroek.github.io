---
color: "#faeaab"
title: "2018 · A customisation design tool for Correctbook"
intro: "I created a mobile first design of a web-based customisation tool for Correctbook; a social enterprise that produces durable and endlessly erasable notebooks. The profit from purchases goes to illiterate children in need of writing material. In order to raise more money for the children, Correctbook wants to attract companies to sell more notebooks by offering them an option to customise their own sustainable notebook. *This project was part of my UX training at Humanoids."
team: "Me with another UX designer."
role: "Secondary research, exploring ideas through sketching, creating multiple interactive prototypes and iterative testing."
timeline: "September 2018"
overviewIntro: "Designed a web-based personalisation tool to empower customers to personalise their own correctbook products, to increase sales."
headingLarge: "./heading-large.png"
headingSmall: "./heading-small.png"
nextPath: "/projects/correctbook"
nextName: "Correctbook"
order: 4
outline: false
---

import ContentSection from '~/components/ContentSection.vue'
import ContentImage from '~/components/ContentImage.vue'
import ContentVideo from '~/components/ContentVideo.vue'

<content-video url="https://player.vimeo.com/video/440793430" size="wide" caption="THIS VIDEO SHOWS THE PROTOTYPE OF THE CUSTOMISATION TOOL"/>

<content-section>
  <template v-slot:title>
    The problem
  </template>
  <template v-slot:body>
    <p>
    The option to customise a Correctbook is, at the moment, an obstructive process that takes a lot of steps and time which makes it unattractive for companies to purchase their customised Correctbooks. In the current flow, companies can request a quotation on the Correctbook website. Next, Correctbook asks for a detailed design to be sent or, on request, makes a design if the company itself has little design experience. This flow is not ideal for both parties.
    </p>
    <ul>
        <li>
          Requesting a quote is a threshold for customers, because it is unclear how this process works and what the possibilities are in the design
        </li>
        <li>
          The process takes a long time 
        </li>
        <li>
          It takes Correctbook a lot of time to create designs at the customer's request, which limits the number of customers that can be served at the same time
        </li>
      </ul>
  </template>
</content-section>

<content-image size="wide" caption="FLOW BEFORE AND AFTER CUSTOMISATION TOOL">
  <g-image src="./1.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Challenge
  </template>
  <template v-slot:body>
    <p>
    Create a designtool, accessible to companies with and without design experience, so that all companies can design and order their own Correctbooks.Not all customers of Correctbook have the ability or skills to make their own design. Therefore, the designtool should focus on different types of users with varying designexperience. Because more than half the visitors of correctbook.com visit the site by using their mobile device, Correctbook asked us to design a mobile-first design tool. 
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Research and Requirements
  </template>
  <template v-slot:body>
    <p>
    To find out what the tool should or should not contain, we conducted five interviews and tested comparable services (e.g. Hema, Fotofabriek, Greetz etc.) with the interviewees. During the test the interviewees were asked to personalise a Hema notebook or Greetz card and to think out loud while performing their tasks. Through observation of their behaviour, asking what, how, which, why questions and making notes, we got some early insights.
    </p>
    <ul>
        <li>
          Users had different needs for guidance during the design of their own correctbook
        </li>
        <li>
          Users needed a constant overview of the design options and direct feedback of changes to the design 
        </li>
        <li>
          Customizing a product on a website where you could design step by step by scrolling and indicating your preferences, was very unclear to users. They forgot what they had chosen or changed and could not see the result untill the end
        </li>
        <li>
          Users wanted to try out the design options as quickly as possible in the tool. There were often too many steps (number, size, interior) before they could start designing
        </li>
      </ul>
      <p>
        Because the need for design guidance among the customers varied, we collected and analyzed the data to define persona’s and their goals and painpoints. This resulted in two persona’s: Nikki and Harry. These two were opposite to each other in terms of design skills and pain points. 
      </p>
  </template>
</content-section>

<content-image size="normal" caption="PERSONAS BASED ON OUR COMPETITIVE PRODUCT USERTEST">
  <g-image src="./2.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Sketching and wireframing
  </template>
  <template v-slot:body>
    <p>
      Based on the results of the test and the paintpoints in the current userflow, we made sketches and wireframes of the tool. We choose to show designoptions and direct feedback on one page, the give users the possibility to choose guidance, and to minimise the steps before entering the designtool.After multiple tests, iterations and refinement, we made a final design. Because the tool was designed for customers, we opted for a clean and minimal design using the colours and font matching the house-style of Correctbook.
    </p>
  </template>
</content-section>

<content-image size="normal" caption="WIREFRAMES OF OUR BEST CONCEPT">
  <g-image src="./3.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Overview and direct feedback
  </template>
  <template v-slot:body>
    <p>
      Users wanted to make changes immediately and wanted direct feedback. We solved this by constantly showing the cover that the user is designing on one page while making it interactive. Text, photos, background color or templates can be added via a bar at the bottom of the screen. When a part is changed, the bar only shows the options to further modify the selected part.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="INTERACTIONS AND FEEDBACK WHILE DESIGNING THE COVER">
  <g-image src="./4.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Choose for guidance or design yourself
  </template>
  <template v-slot:body>
    <p>
      In order to achieve our goal and make the tool accessible to users with and without design experience, we decided to give two design options: self-design or design using a template. With a template, for example, users with little design experience can easily create a beautiful design because the options are limited and recorded. The user only needs to adjust the text, color and image by clicking on the template. To guarantee a beautifull design without much knowledge of quality standards, we decided that users will receive a warning when the quality of a file is too low to make a beautiful design. This warning will disappear if the file is modified or deleted.
    </p>
  </template>
</content-section>

<content-image size="normal" caption="MOCKUPS OF THE ‘USE TEMPLATE’ OPTION IN THE CUSTOMIZATION TOOL">
  <g-image src="./5.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Minimising choices before designtool
  </template>
  <template v-slot:body>
    <p>
      Users wanted to try out the designtool options as quickly as possible. We have therefore opted to have the customer make only essential choices, such as size and pattern of the inside, before the customer actually goes into the tool to customise their Correctbook.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="FLOW OF STEPS OF CHOOSING PREFERENCES BEFORE DESIGNING">
  <g-image src="./6.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Learning and outcomes
  </template>
  <template v-slot:body>
    <ul>
      <li>
        This was one of my first design projects in which I learned the most of the basic design process, sketching and visual design. My colleague was very proficient in design and learned me a lot, while I - with little design experience and a psychological background - learned her a lot about analysing problems thoroughly and asking the right questions during interviews and usertesting. 
      </li>
      <li>
        A design tool that lowers the threshold to order customised Correctbooks and makes the whole customer journey more fun and fast!
      </li>
    </ul>
  </template>
</content-section>
