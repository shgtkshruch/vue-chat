<div class="view">
  <div class="channel">
    <ul>
      <li v-for="(channel) in channels">
        <router-link :to="{ name: 'Channel', params: { cname: channel }}">
          {{ channel }}
        </router-link>
      </li>
    </ul>
  </div>
  <div class="channel-name">{{ $route.params.cname }}</div>
  <div class="messages">
    <ul>
      <li v-for="(message) in messages">
        <div class="message">
          {{ message }}
        </div>
      </li>
    </ul>
  </div>
  <div class="form">
    <input type="text" v-model="message" />
    <input type="button" value="送信" @click="send_message" />
  </div>
</div>
