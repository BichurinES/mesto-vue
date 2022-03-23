import { createStore } from 'vuex';
import { userModule } from './user';

export default createStore({
  modules: {
    user: userModule,
  },
});
