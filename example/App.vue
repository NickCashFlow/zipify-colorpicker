<template>
    <div id="app">
        <div class="header-container">
            <div class="header-bg" :style="{ backgroundColor: color }" />
            <div class="header">
                <div class="intro-wrap">
                    <div class="intro" :style="{ color: textColor }">
                        <h1>Zipify Colorpicker</h1>
                        <p role="presentation">
                            Vue 2.0 Zipify Color Picker component
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="demo-container">
            <input type="text" v-model.lazy="color">

            <div class="demo-list">
                <div class="demo-item">
                    <ColorPicker v-model="color" :preset-colors="presetColors" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ZipifyColorPicker, ColorModel } from '../src';

const presetColors = [
    '#3bb44a', '#ffffff', '#d9dee3', '#e49b9b', '#7eaae2',
    '#e4c438', '#c5f0ca', '#000000', '#633185', '#fb8622',
    '#e56565', '#3846ba', '#9ea5b0', 'transparent'
];

export default {
    name: 'App',

    components: {
        'ColorPicker': ZipifyColorPicker
    },

    data () {
        return {
            presetColors,
            color: 'rgb(128, 128, 128)'
        };
    },

    computed: {
        textColor() {
            return ColorModel.isTransparent(this.color) || !ColorModel.isDark(this.color) ? '#000' : '#fff';
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
* {
  margin: 0;
  padding: 0;
}
html {
  font-family: 'Lato', sans-serif;
}

.header-container {
  position: relative;
}
.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 580px;
  background-color: #333;
  z-index: 0;
}
.header {
  display: flex;
  max-width: 780px;
  margin: 0 auto;
  padding: 20px 0;
}
.intro-wrap {
  flex: 1;
  z-index: 2;
}
.intro {
  margin: 16px auto;
  color: rgba(255, 255, 255, 1);
}
.intro > h1 {
  font-size: 40px;
  font-weight: normal;
  line-height: 60px;
  text-align: center;
}
.intro > p {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: center;
}

.demo-container {
  max-width: 780px;
  min-height: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.demo-list {
  display: flex;
  margin-bottom: 20px;
}
.demo-item {
  position: relative;
  margin-bottom: 10px;
  margin: 16px auto;
  z-index: 2;
}
.demo-item h2 {
  margin: 0;
  padding: 5px 0;
  color: #666;
  font-size: 16px;
  font-weight: normal;
}
</style>
