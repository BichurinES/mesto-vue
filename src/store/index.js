import { createStore } from 'vuex';
import { userModule } from './user';
import { cardsModule } from './cards';

export default createStore({
  modules: {
    user: userModule,
    cards: cardsModule,
  },
});
