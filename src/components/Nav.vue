<script>
export default {
    data () {
        return {
            darkMode: false
        }
    },
    methods: {
        dark() {
            document.querySelector('html').classList.add('dark')
            document.querySelector('body').classList.add('dark-mode')
            this.darkMode = true
            this.$emit('dark')
        },

        light() {
            document.querySelector('html').classList.remove('dark')
            document.querySelector('body').classList.remove('dark-mode')
            this.darkMode = false
            this.$emit('light')
        },

        modeToggle() {
            if(this.darkMode || document.querySelector('body').classList.contains('dark-mode')) {
                this.light()
            } else {
                this.dark()
            }
        },
    },
    
    computed: {
        darkDark() {
            return this.darkMode && 'darkmode-toggled'
        }
    }

}
</script>
<template>
    <nav class="p-4 sm:p-8 bg-white rounded-t-sm bg-gray-50 dark:bg-gray-800 dark:bg-card-dark">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" /> -->
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Todo</span>
            </a>

            <div id="theme-toggle">
                <div class="is-flex">
                    <div class="mode-toggle dark:bg-bg-dark" @click="modeToggle" :class="darkDark">
                    <div class="toggle">
                        <div id="dark-mode" type="checkbox">
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style>
body.dark-mode {
  background-color: #242424;
}
/* body.dark-mode .flex h1 {
  color: #fff;
} */
.mode-toggle {
  position: relative;
  padding: 0;
  width: 44px;
  height: 24px;
  min-width: 36px;
  min-height: 20px;
  background-color: #fff;
  border: 0;
  border-radius: 24px;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  appearance: none;
  transition: background-color 0.5s ease;
}
.mode-toggle .toggle {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid transparent;
  box-shadow: inset 0 0 0 2px #262626;
  overflow: hidden;
  transition: transform 0.5s ease;
}
.mode-toggle .toggle #dark-mode {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.mode-toggle .toggle #dark-mode:before {
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  float: left;
  background-color: #262626;
  transition: border-radius 0.5s ease, width 0.5s ease, height 0.5s ease,
    left 0.5s ease, transform 0.5s ease;
}
body.dark-mode .mode-toggle {
  background-color: #0F172A;
}
body.dark-mode .mode-toggle .toggle {
  box-shadow: inset 0 0 0 2px #a5abba;
  transform: translateX(19px);
}
body.dark-mode .mode-toggle .toggle #dark-mode:before {
  border-radius: 50%;
  width: 150%;
  height: 85%;
  left: 40%;
  background-color: #a5abba;
  transform: translate(-10%, -40%), rotate(-35deg);
}
</style>