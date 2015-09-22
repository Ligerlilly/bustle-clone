import Ember from 'ember';

export default Ember.Component.extend({
  newArticleForm: false,
  actions: {
    newArticle() {
      this.set('newArticleForm', true);
    },

    articleSave() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        text: this.get('text'),
        image: this.get('image'),
      };
      this.set('newArticleForm', false);
      this.sendAction('articleSave', params);
    }
  }
});
