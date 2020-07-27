---
color: "#d4eecb"
title: "CHI2020 - A Multisensory Public Display Game"
intro: "During my Masters’ HCI at the University College of London, I took part in the CHI2020 Student Game Competition together with my team. Students were asked to submit an innovative, boundary-pushing game. Using a human-centered design process, we created a voice- and movement controlled group game that teaches people about extinct animals, their role in distinction and promotes behavioural change. A group of 3 people collaborates to steer an endangered animal safely through its habitat (by making noises), while avoiding harmful objects and collecting items that positively contribute to this animals’ life (by moving)."
team: "4 MSc HCI UCL students (including myself)"
role: "Conducting primary and secondary research together as well as exploring ideas through sketching, creating multiple interactive prototypes and iterative testing."
timeline: "October - December 2019"
achievements: "Finalists of the CHI2020 Student Game Competition - check out our published paper"
overviewIntro: "With my team, I created this game to raise awareness for animal extinction and promote behavioural change. We became finalists of the CHI2020 Game Competition."
headingLarge: "./heading-large.png"
headingSmall: "./heading-small.png"
nextPath: "/projects/physical-prototyping"
nextName: "Heart - Drawing Tool"
order: 2
outline: false
---
import ContentSection from '~/components/ContentSection.vue'
import ContentImage from '~/components/ContentImage.vue'
import ContentVideo from '~/components/ContentVideo.vue'

<content-video url="https://player.vimeo.com/video/440793659" size="wide" caption="THIS VIDEO SHOWS HOW WE DESIGNED THE GAME"/>

<content-video url="https://player.vimeo.com/video/440793682" size="wide" caption="THIS VIDEO SHOWS A TRAILER OF HOW THE GAME IS PLAYED IN OUR FINAL DESIGN"/>

<content-section>
  <template v-slot:title>
    The problem
  </template>
  <template v-slot:body>
    <p>
      Research shows that animal extinction has never been this fast-paced. Many people are aware of global warming and really interested in nature but lack knowledge on how they actually can make a difference and change their behaviour in daily life. Existing environmental games seem to show potential in supporting behavioural change, but contain too much information and are found not immersive enough, presumably limiting their effectiveness.
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Challenge
  </template>
  <template v-slot:body>
    <p>
      How can we raise awareness and build knowledge about limiting animal extinction through a playful and engaging game experience that teaches concrete actions? We wanted to reach a wide audience interested in helping endangered animals and decided to locate our game in public educational spaces. We found that mostly Young Creatives visited these places and decided to design initially for this user group as they also may pass on their knowledge as potential parents of future generations.   
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Research and requirements
  </template>
  <template v-slot:body>
    <p>
      A review of previous research on successful games informed initial requirements. To verify these requirements with our user group, we surveyed 65 Young Creatives on their preferences regarding gaming, museums, input modalities and technology usage. We also asked about their interest in the environment, extinction and education in this. Results indicated that our user group experienced difficulties in behaving ecologically, wanted to learn more about helping endangered animals, and were hesitant in playing voice-controlled games.
    </p>
    <p>
      Based on these results and existing research, we established the design requirements. The game should:
    </p>
    <ul>
      <li>
        Support social interaction, experiential learning and a feeling of meaningfulness
      </li>
      <li>
        Be engaging to increase empathy and awareness
      </li>
      <li>
        Be played as a group to increase motivation, engagement and trigger collective action
      </li>
      <li>
        Potentially be voice controlled, as this was found highly engaging and innovative, while never been used in group contexts
      </li>
      <li>
        Potentially be controlled by movement to enhance expression of emotions with other players, making it more meaningful and engaging
      </li>
      <li>
        Be played with smartphones (to easily access multiple sensors as input modalities), in combination with a shared display 
      </li>
    </ul>
    <p>
      Using our findings, we created a persona representing the needs and pain points of our users to support us in design decisions.
    </p>
  </template>
</content-section>

<content-image size="normal" caption="PERSONA REPRESENTING OUR USER GROUP TO INFORM DESIGN">
  <g-image src="./1.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Carving out our concept
  </template>
  <template v-slot:body>
    <p>
      First, we individually brainstormed ideas of potential games and approaches. We evaluated these ideas using a 2x2 matrix on feasibility and novelty. 
    </p>
    <p>
      Eventually, we combined components of multiple ideas which led to our idea of the ‘follow the path’ style game where a group of players navigate an animal through its habitat, collecting and avoiding meaningful items. Our idea was to teach people how to collaborate in taking action against animal extinction and provide concrete and recognisable examples. The objects were related to everyday items players use, and running across harmful ones decreased the ‘health level’ of the animal to increase awareness and empathy of the actual impact and facilitate transition to real-life actions. ‘Collect items’ represented the opposite, showing concrete solutions players could implement in their own life.
    </p>
    <p>
      However, we were not sure about the input modalities, as survey results showed hesitation around voice-input by our user group while in earlier research this was truly enjoyed. We decided to do early user tests to explore different modes of interacting with the game.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="EVALUATION OF IDEAS BY 2 X 2 MATRIX">
  <g-image src="./2.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Early user tests
  </template>
  <template v-slot:body>
    <p>
      To conduct the tests, we created a quick paper prototype of our game idea and used our sketches to explain the game and provide context. We asked a group of 3 people to play the game using different interactions, while one of us mocked the movements of the animal in the game.
    </p>
  </template>
</content-section>

<content-image size="full" caption="PAPER PROTOTYPE AND USERTEST">
  <g-image src="./3.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      Our user tests showed that players liked the general idea of our game and particularly enjoyed the social aspect of steering the animal together and having individual roles to control directions by their voice. Jumping together to avoid items was found very engaging, as it evoked a feeling or demonstrating against animal extinction. However, an interaction to collect items was missing, causing less awareness on helpful items.
    </p>
  </template>
</content-section>

<content-section>
  <template v-slot:title>
    Refining our game
  </template>
  <template v-slot:body>
    <p>
      As our early usertest had largely validated our game idea, we refined our game concept and explored how we could enhance education and transition of behaviour after the game. We individually sketched our ideas of the entire game journey in multiple storyboards (e.g. encountering, getting information about animals, starting the game, levels, post-game interactions). We assembled all sketches, silently voted them individually and created a timeline together afterwards containing the best ideas.
    </p>
  </template>
</content-section>

<content-image size="wide" caption="DECIDING ON THE GAME JOURNEY">
  <g-image src="./4.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      We then created wireframes of important interactions before and after the game, such as information about the animal, choosing your favourite animal, and receiving practical tips a week after having played the game. These wireframes were discussed with five participants and refined. 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="WIREFRAMES OF INTERACTIONS BEFORE AND AFTER THE GAME">
  <g-image src="./5.jpg" />
</content-image>

<content-section>
  <template v-slot:body>
    <p>
      In parallel, a teammember created a high fidelity prototype of the game itself in Unity and combined this with our refined wireframes to allow testing of the whole game interaction. 
    </p>
  </template>
</content-section>

<content-image size="wide" caption="GAME DESIGN AND MOCK UP OF GAMEPLAY">
  <g-image src="./6.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Evaluationg our game
  </template>
  <template v-slot:body>
    <p>
      We conducted a final Wizard-of-Oz user test with three participants that played the game on a big screen from beginning to end, while we secretly controlled the animal with a keyboard. Again participants controlled the animal with their voice, but now collaborated in jumping and bending movements to avoid and collect. Players said that the game itself forced them “to move physically and mentally to help the animal” and was challenging and fun. They also found the information about the animal really useful as well as the practical post-game tips on helping the animal after the game. 
    </p>
  </template>
</content-section>

<content-image size="wide">
  <g-image src="./7.jpg" />
</content-image>

<content-section>
  <template v-slot:title>
    Learnings and outcomes
  </template>
  <template v-slot:body>
    <ul>
      <li>
        The game seemed to lead to higher awareness and willingness in players to take action to protect endangered animals. If we had more time, I would have liked to test its actual effect on behavioural change and how to ameliorate this by personalising the collect/avoid objects
      </li>
      <li>
        I learned to not discard good ideas before testing it on users as Young Creatives first seemed reluctant of playing games with their voice but loved it during user tests
      </li>
      <li>
        We became finalists of the CHI2020 Student Game Competition!
      </li>
    </ul>
  </template>
</content-section>
