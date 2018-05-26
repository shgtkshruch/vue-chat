import { mapGetters, mapActions } from 'vuex';
import { SET_MESSAGE } from '../../store/mutation-types';

export default {
  name: 'Chat',
  computed: {
    ...mapGetters(['messages']),
  },
  data() {
    return {
      channels: ["general", "random"],
      message: '',
    }
  },
  methods: {
    ...mapActions([ SET_MESSAGE ]),
    send_message(){
      this.SET_MESSAGE(this.message)
      this.message = "";
    }
  }
}
