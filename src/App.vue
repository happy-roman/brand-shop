<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlApi: 'http://localhost:5000/',
    };
  },
  provide() {
    return {
      getJson: this.getJson,
      postJson: this.postJson,
      putJson: this.putJson,
      deleteJson: this.deleteJson,
    };
  },
  methods: {
    getJson(url) {
      return fetch(`${this.urlApi}${url}`, {
        // mode: 'no-cors',
      })
        .then(result => result.json())
        .catch((error) => {
          console.log(error || 'Поймали ошибку');
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(result => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
