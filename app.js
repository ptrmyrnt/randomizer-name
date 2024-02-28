const app = Vue.createApp({
  data() {
    return {
      state: true,
      inputName: "",
      names: [],
      error: false,
      msgError: "Error!",
      result: "",
    };
  },

  computed: {
    isReady() {
      return this.names.length > 1;
    },
  },

  methods: {
    addNameToList() {
      const value = this.inputName;
      if (this.validate(value)) {
        this.names.push(value);
        this.inputName = "";
        this.error = false;
      } else {
        this.error = true;
      }
    },

    validate(params) {
      this.msgError = "";
      if (params === "") {
        this.msgError = "Error! Name can't be empty!";
        return false;
      }

      if (this.names.includes(params)) {
        this.msgError = "Error! Name must be unique!";
        return false;
      }

      return true;
    },

    removeName(index) {
      this.names.splice(index, 1);
    },

    showResult() {
      this.state = false;
      this.generateResult();
    },

    showInput() {
      this.state = true;
      this.names = [];
    },

    getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },

    generateResult() {
      let randName = this.getRandomName();
      if (this.result !== "") {
        while (randName === this.result) {
          randName = this.getRandomName();
        }
      }
      this.result = randName;
    },
  },
}).mount("#app");
