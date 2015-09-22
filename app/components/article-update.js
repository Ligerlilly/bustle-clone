import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,

  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {

      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image'),
      };

      this.sendAction('update', article, params);
      this.set('updateArticleForm', false);
    }
  }
});
