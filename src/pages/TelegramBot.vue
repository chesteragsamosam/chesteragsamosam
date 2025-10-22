<template>
  <div>
    Your Message is: {{ msg }}
    <textarea class="border shadow" v-model="msg" cols="30" rows="10"></textarea>
    <button class="px-2 py-1 bg-blue-400 rounded" @click="send()">Send</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const CHESTER_AGSAMOSAM = 2112629984
const botToken = '6436617367:AAFy-OcPUISlayp1XaLbgOs89gwz1_brxB4';
const msg = ref('')

const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
const send = () => {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHESTER_AGSAMOSAM,
      text: 'From website: ' + `\n${window.location}` + msg.value ,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Message sent:', data);
    alert('Message sent to Telegram!');
  })
  .catch(error => {
    console.error('Error sending message:', error);
    alert('Error sending message to Telegram.');
  });
}
  
</script>