<template>
  <div class="mt-16 text-center container mx-auto">
    
    <div>There are {{ questions.length }} questions</div>
    <div>Score: {{ score }}</div>
    <div>Item: {{ currentItem }}/{{ total }}</div>
    <div v-if="question" class="my-16">
      <p>{{ question.q }}</p>
      <div v-if="question.c">
        <select class="rounded shadow border w-full px-2 mx-auto max-w-lg text-center" placeholder="Answer" v-if="question.a && question.a.length" v-model="answer">
          <option disabled value="">Please select one</option>
          <option v-for="a in question.c" :key="a">{{ a }}</option>
        </select>
      </div>
      <div v-else>
        <input class="rounded shadow border w-full px-2 mx-auto max-w-lg text-center" placeholder="Answer" v-model="answer" type="text" name="" id="">
      </div>
      <div class="py-1">
        <button :disabled="remark != ''" :class="{'bg-blue-400': !remark, 'bg-gray-400': remark}" class="px-2 py-1 text-white rounded shadow m-1" @click="confirm()">Confirm</button>
        <button :disabled="disableNext" :class="{'bg-blue-400': !disableNext, 'bg-gray-400': disableNext}" @click="changeQuestion()" class="px-2 py-1 bg-blue-400 text-white rounded shadow m-1">NEXT</button>
      </div>
      <div>{{ remark }}</div>
    </div>
    
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const score = ref(0)
const remark = ref('')
const answer = ref('')
const disableNext = ref(false)
const currentItem = ref(0)
const question = ref()
const questions = [
  { q: "__ is the smallest positive number which, when it is divided by 3, 4 or 5, will leave a remainder of 2.", a: "62"},
  { q: "A fraction whose denominator is equal to or greater than the numerator, such as 6/4 is an ____________.", a: "improper fraction"},
  { q: "A geometrical close bounded figure which has 20 sides is known as an ______.", a: "icosagon"},
  { q: "A graph that uses bars with equal ranges of values is a ______.", a: "histogram"},
  { q: "A line where two faces meet in a three-dimensional structure is termed as the ____.", a: "edge"},
  { q: "A line whose points correspond to numbers is a __________.", a: "number line"},
  { q: "A number less than zero is ______.", a: "negative number"},
  { q: "A number that can be divided or is divisible by 2 is an _____ _____.", a: "even number"},
  { q: "A number that cannot be represented as a decimal or fraction is said to be ______.", a: "irrational"},
  { q: "A ___________ with four sides of equal length and no right angles is a rhombus.", a: "parallelogram"},
  { q: "_____ ____ is the distance between a number and 0 on a number line.", a: "Absolute value"},
  { q: "________ is the use of letters of the alphabet to represent numbers in equations, formulas, and rules.", a: "Algebra"},
  { q: "_____ ________ is an expression that contains a variable.", a: "Algebraic expression"},
  { q: "Among all shapes with the same perimeter, a ______ has the largest area.", a: "circle"},
  { q: "Angle is a figure formed by two rays or two line segments with a common endpoint called the _____ of the angle.", a: "vertex"},
  { q: "Area of Parallelogram is computed as: ", a: "area = base x height", c: ["area = base x height", "area = length x width"]},
  { q: "Area of Rectangle is computed as: ", a: "area = length x width", c: ["area = base x height", "area = length x width"]},
  { q: "________ = Sum of values / Number of values", a: "Arithmetic mean"},
  { q: "A ___ _____ is a graph with horizontal or vertical bars that represent data.", a: 'bar graph'} ,
  { q: `________ has been described as the greatest "might-have-been" in history of mathematics.`, a: "Blaise Pascal" },
  { q: "A _________ is a person who makes maps.", a: "cartographer"},
  { q: "______ is a temperature scale on which pure water at sea level freezes at 0° and boils at 100°.", a: "Celsius"},
  { q: "______ is a metric unit of length equivalent to 10 millimeters 1/10 of a decimeter, and 1/100 of a meter.", a: "Centimeter"},
  { q: "Cent came from the Latin word '__________', which means a hundredth part.", a: "centesimus"},
  { q: "____ came from the Latin word 'centesimus', which means a hundredth part.", a: "Cent"},
  { q: "_______ is the distance around a circle; its perimeter.", a: "Circumference"},
  { q: "Circumference of a circle is computed as: ?", a: "circumference = 2π x r", c: ['circumference = 2π x r', 'circumference = mx + b', 'circumference = 3π x r', 'circumference = 2π x 3', 'circumference = 2π x r']},
  { q: "_____ _____ is the direction in which the hands move on a typical analog clock; a turn to the right.", a: "Clockwise rotation"},
  { q: "_____ _____ is a nonzero number that is a multiple of the denominators of two or more fractions.", a: "Common denominator"},
  { q: "______ _____ is a factor of each of two or more counting numbers.", a: "Common factor"},
  { q: "______ _____ is a fraction in which the numerator and the nonzero denominators are both integers.", a: "Common fraction"},
  { q: "______ is a tool used to draw circles and arcs and copy line segments.", a: "Compass"},
  { q: "________ ________ is a counting number greater than 1 that has more than two factors.", a: "Composite number"},
  { q: "________ ________ is a figure having the same size and shape.", a: "Congruent figures"},
  { q: "________ = adjacent/hypotenuse", a: "cosine"},
  { q: "_____ is an ancient unit of length, measured from the point of the elbow to the end of the middle finger.", a: "Cubit"},
  { q: "Cubit is an ancient unit of length, measured from the point of the _____ to the end of the middle finger.", a: "elbow"},
  { q: "_____ is an information that is gathered by counting, measuring, questioning, or observing", a: "data"},
  { q: "_______ is a number written in standard base-ten notation containing a decimal point, such as 2.54.", a: "Decimal"},
  { q: "_______ _____ is a mark used to separate the ones and tenths places in decimals.", a: "Decimal point"},
  { q: "___________ is a metric unit of length equivalent to 1/10 meter, or 10 centimeters.", a: "Decimeter"},
  { q: "_______ (°) is a unit of measure for angles based on dividing a circle into 360 equal parts.", a: "Degree"},
  { q: "Degree is a unit of measure for angles based on dividing a circle into ___ equal parts.", a: "360"},
  { q: "_______ _______ (°F) is the unit interval on Fahrenheit thermometers and a US customary unit for measuring temperatures.", a: "Degree Fahrenheit"},
  { q: "_______ is a rate that compares the mass of an object to its volume.", a: "Density"},
  { q: "________ is a line segment joining two non-consecutive vertices of a polygon.", a: "Diagonal"},
  { q: "________ is a line that passes through the center of a circle and divides it in half.", a: "Diameter"},
  { q: "_________ is a term used to describe a shape whose sides are all of equal length.", a: "Equilateral"},
  { q: "__________ is the process of breaking numbers down into all of their factors.", a: "Factoring"},
  { q: "_______ means 1 followed by 100 zeroes. A googolplex is 1 followed by a googol zeros. ", a: "Googol"},
  { q: "Googol means 1 followed by 100 zeroes. A _______ is 1 followed by a googol zeros. ", a: "googolplex"},
  { q: "Googol means 1 followed by 100 zeroes. A googolplex is 1 followed by a _______ zeros. ", a: "Googol"},
  { q: "______ _________ is a branch of mathematics focused on the properties of graphs.", a: "Graph Theory"},
  { q: "If two apples cost 25 pesos, 8 apples can be purchased for ___ pesos. ", a: "100"},
  { q: "If you add up all the numbers between 1 to 100 consecutively then the total that you will reach is ____.", a: "5050"},
  { q: "If you multiply a single-digit number by 9 and all the digits of the product, the sum will always be _.", a: "9"},
  { q: "It takes 20 men to build a house for 60 days, __ men will be needed to build it in 15 days.", a: "80"},
  { q: "John can eat a quarter of a pizza in one minute. It takes _ minutes for John to eat one pizzaand a half.", a: "6"},
  { q: "________ _______ from Pisa, in the 13th century, discovered the Fibonacci sequence.", a: "Leonardo Fibonacci"},
  { q: "________ refers to addition, subtraction, multiplication or division.", a: "Operation"},
  { q: "_______ ________ give relative position in a set.", a: "Ordinal numbers"},
  { q: "________ = Target outcomes/ Total outcomes", a: "Probability"},
  { q: "__________ is a quadrilateral with two sets of opposite sides that are parallel.", a: "Parallelogram"},
  { q: "_____ ______ are integers greater than 1 that are only divisible by themselves and 1.", a: "Prime numbers"},
  { q: "____ = opposite/hypotenuse", a: "Sine"},
  { q: "____ ______: y = mx + b", a: "Slope Intercept"},
  { q: "Slope Intercept: y = mx + b", a: "y = mx + b", c: ['y = mr + x', 'y = mx + b', 'm = 2x + y', 'm = bx + y']},
  { q: "______ = opposite/adjacent", a: "Tangent"},
  { q: "______ is a straight line touching a curve from only one point.", a: "Tangent"},
  { q: "The angles of a triangle always add up to ___ degrees.", a: "180"},
  { q: "The _______ of A, B, C is (A + B + C)/3.", a: "average"},
  { q: "The biggest prime number known as __________ was discovered in January 2018 by a computer in Tennessee.", a: "M77232917"},
  { q: "The biggest prime number known as M77232917 was discovered in _________ by a computer in Tennessee.", a: "January 2018"},
  { q: "The biggest prime number known as M77232917 was discovered in January 2018 by a computer in ________.", a: "Tennessee"},
  { q: "The _________ between two variables x and y is a measure of how closely related they are, or how linearly related they are.", a: "correlation"},
  { q: "The mean absolute deviation of the following numbers:60, 80,100,75 and 95 is ____. ", a: "12.4"},
  { q: "The number _ is the smallest prime number.", a: "2"},
  { q: "The numerals we used now are called “____________” numbers.", a: "Hindu-Arabic"},
  { q: "The only prime numbers that end with a “2” or “5” are ___________.", a: "two and five"},
  { q: "The power to which a base must be raised to produce a given number is ________.", a: "logarithm"},
  { q: "The vertex angle of an isosceles triangle is 20. The measure of one of the base angle is __. ", a: "80"},
  { q: "There are ________ seconds in a day.", a: "86400"},
  { q: "____________ is the study of the relationship between the angles of triangles and their sides.", a: "Trigonometry"},
  { q: "Two lines or line segments intersecting to form a right angle are __________ lines. ", a: "perpendicular"},
  { q: "____ is a unit of measure that is equal to approximately 91.5 centimeters or 3 feet.", a: "Yard"},
  { q: "A social network services available through the computer is ________.", a: "Facebook"},
  { q: "_______ refers to a computer program.", a: "Software"},
  { q: "The information highway is called _______.", a: "internet"},
  { q: "The ___________ in the computer can perform and aid in computation.", a: "spreadsheet"},
  { q: "The ___________________________ is the brain of the computer.", a: "central processing unit"},
  { q: "The ______________________ links the computer to the base computer making it possible to share software materials.", a: "local area network"},
  { q: "______________ are type of computers for processing and accessing data at very high speeds.", a: "Mainframe computers"},
  { q: "An organizational tool used to structure the way you save files on your computers is called ______.", a: "folder"},
  { q: "_________ is the process of translating sound card signals from a microphone into codes thecomputer can use.", a: "Encoding"},
  { q: "_________ _______ replaces overhead presentation through the use of computer generated slides.", a: "PowerPoint"},
  { q: "The unit that transforms data into information is the ___.", a: "CPU"},
  { q: "__________________________ can be used to access the files and programs in the computer.", a: "My computer desktop icon"},
  { q: "____ enables the computer to communicate with other computers over the telephone.", a: "Modem"},
  { q: "___________ ____ is a malware program that repeatedly copies itself and is very similar to acomputer virus.", a: "Computer worm"},
  { q: "The father of Computer Science is ____________________.", a: "Alan Mathison Turing"},
  { q: "Like the typewriter, the computer has a _______.", a: "keyboard"},
  { q: "________ refers to single phrase or word that tells the computer to do something with aprogram or file.", a: "Command"},
  { q: "is a temporary memory.", a: "Random Access Memory"},
  { q: "is a permanent memory.", a: "Read-Only Memory"},
  { q: "was first created by Tim Berners-Lee, Robert Cailliau. ", a: "Hypertext Markup Language"},
  { q: "Hypertext Markup Language was first created by ______ and ______. ", a: "Tim Berners-Lee and Robert Cailliau"},
  { q: "HTML means. ", a: "Hypertext Markup Language"},
  { q: "______ invented the USB.", a: "Ajay Bhatt"},
  { q: "USB means ?.", a: "Universal Serial Bus"},
  { q: "____ is known as the storage unit of data.", a: "Byte"},
  { q: "___ is the Brain of a Computer. It is also known as the Central Processing Unit of the Computer.", a: "CPU"},
  { q: "CPU Means.", a: "Central Processing Unit"},
  { q: "When the File is to be stored in the Portable Document Format, the term ___ is used.", a: "PDF" }
]
const total = ref(questions.length)
let timeout = null
  const changeQuestion = () => {
    if (currentItem.value == total.value) return
    const idx = currentItem.value
    question.value = questions[idx]
    remark.value = ''
    currentItem.value++
    disableNext.value = true
    clearTimeout(timeout)
    answer.value = ''
  }
  const confirm = () => {
    const ans = answer.value.toLowerCase().replace(',', '')
    if (question.value.a.toLowerCase() === ans || question.value.a.toLowerCase() === `${ans}s`) {
      score.value++
      remark.value = 'CORRECT'
      timeout = setTimeout(() => {
        changeQuestion()
      }, 2000)
    } else {
      remark.value = 'WRONG! The Correct answer is: ' +  question.value.a
    }
    disableNext.value = false
  }
  onMounted(() => {
    shuffleArray(questions)
    question.value = questions[0]
    disableNext.value = true
  })
</script>