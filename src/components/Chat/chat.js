export default {
  name: 'Chat',
  data() {
    return {
      channels: ["general", "random"],
      message: '',
      messages: []
    }
  },
  methods: {
    send_message(){
      this.messages.push(this.message);
      this.message = "";
    }
  }
}
