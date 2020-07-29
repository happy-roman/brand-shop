<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlApi: 'http://localhost:3000',
    };
  },
  methods: {
    // getJson(url) {
    //   return fetch(url)
    //     .then(result => result.json())
    //     .catch((error) => {
    //       // this.$refs.error.setError(error);
    //       console.log(error);
    //     });
    // },
    getJson(url) {
      const requestUrl = this.urlApi + url;
      console.log(requestUrl);
      return fetch(requestUrl, {
        mode: 'no-cors',
      })
        .then(result => result.json())
        .catch((error) => {
          console.log(error);
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
