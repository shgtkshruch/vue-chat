<div class="view">
  <div class="channel">
    <ul>
      <li v-for="(channel) in channels">
        {{ channel }}
      </li>
    </ul>
  </div>
  <div class="channel-name">{{ $route.params.cname }}</div>
  <div class="messages"></div>
  <div class="form"></div>
</div>
