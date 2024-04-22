const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref("I'm Batman");
    const autor = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "I'm Goku";
      autor.value = "Kakaroto";
    };

    return {
      message,
      autor,
      changeQuote,
    };
  },
});

app.mount("#myApp");
