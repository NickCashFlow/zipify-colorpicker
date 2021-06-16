<template>
    <div role="application" aria-label="Zipify color picker" class="zpc">
        <div class="zpc-saturation-wrap">
            <Saturation :value="colorModel" @change="onSaturationChanged" />
        </div>

        <div class="zpc-controls">
            <div class="zpc-sliders">
                <div class="zpc-hue-wrap">
                    <Hue v-model="colorModel" @change="onHueChange" />
                </div>
                <div class="zpc-alpha-wrap">
                    <Alpha :color="colorModel" :alpha-value="alphaValue" @change="changeAlpha" />
                </div>
            </div>
        </div>

        <div class="zpc-field" v-if="!disableFields">
            <!-- rgba -->
            <div class="zpc-field--double">
                <div class="zpc-editable-input">
                    <span class="zpc-input__label">HEX</span>
                    <input
                        aria-labelledby="hex"
                        class="zpc-input__input"
                        :value="colorModel.hex"
                        @change="onHexChanged"
                    >
                </div>
            </div>
            <div class="zpc-field--single">
                <EditableInput label="r" :value="colorModel.r" :min="0" :max="255" @change="changeR" />
            </div>
            <div class="zpc-field--single">
                <EditableInput label="g" :value="colorModel.g" :min="0" :max="255" @change="changeG" />
            </div>
            <div class="zpc-field--single">
                <EditableInput label="b" :value="colorModel.b" :min="0" :max="255" @change="changeB" />
            </div>
            <div class="zpc-field--single">
                <EditableInput label="Alpha" :value="alphaValue" :min="0" :max="100" @change="changeAlpha" />
            </div>
        </div>

        <div class="zpc-presets" role="group" aria-label="A color preset, pick one to set as current color" v-if="presetColors.length">
            <Swatch v-for="color in presetColors" :key="color" :color="color" @selected="handlePreset" class="zpc-presets-color" />
        </div>
    </div>
</template>

<script>
import { Alpha, EditableInput, Swatch, Saturation, Hue } from './common/';
import { ColorModel } from '../models';

export default {
    name: 'ZipifyColorPicker',

    components: {
        Saturation,
        Hue,
        Alpha,
        EditableInput,
        Swatch
    },

    model: {
        prop: 'color'
    },

    props: {
        color: {
            type: String,
            required: true
        },

        presetColors: {
            type: Array,
            default: () => []
        },

        type: {
            type: String,
            required: false,
            default: 'rgba'
        },

        disableFields: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        colorModel: {},
        oldValue: ''
    }),

    computed: {
        alphaValue () {
            return Math.round(this.colorModel.alpha * 100);
        }
    },

    watch: {
        color: {
            immediate: true,

            handler (value) {
                if (value !== this.oldValue) {
                    this.colorModel = this.parseColor(value);
                    this.emitEvent();
                }
            }
        }
    },

    created() {
        this.emitEvent();
    },

    methods: {
        parseColor (color) {
            return ColorModel.create(color);
        },

        handlePreset (color) {
            this.colorModel = this.parseColor(color);
            this.emitEvent();
        },

        onSaturationChanged (components) {
            this.colorModel.updateHsv(components);
            this.emitEvent();
        },

        onHexChanged(event) {
            const hex = event.target.value;

            this.colorModel = this.parseColor(hex);
            this.emitEvent();
        },

        onHueChange(hue) {
            this.colorModel.updateHsv({ h: hue });
            this.emitEvent();
        },

        changeR(r) {
            this.colorModel.updateRgb({ r });
            this.emitEvent();
        },

        changeG(g) {
            this.colorModel.updateRgb({ g });
            this.emitEvent();
        },

        changeB(b) {
            this.colorModel.updateRgb({ b });
            this.emitEvent();
        },

        emitEvent () {
            const colorString = this.colorModel.alpha === 1 ? this.colorModel.toHexString() : this.colorModel.toRgbaString();

            this.oldValue = colorString;

            this.$emit('input', colorString);
        },

        changeAlpha (alpha) {
            this.colorModel.setAlpha(alpha / 100);
            this.emitEvent();
        }
    }
};
</script>

<style>
.zpc {
  position: relative;
  box-sizing: border-box;
  width: 214px;
  padding: 8px;
  background: #3b3b3b;
  box-shadow: 0 2px 8px 0 #0d0d0d;
}

.zpc-saturation-wrap {
  width: 100%;
  padding-bottom: 70.71%;
  position: relative;
}

.zpc-controls {
  display: flex;
}

.zpc-sliders {
  padding: 10px 0;
  flex: 1;
}

.zpc-hue-wrap {
  position: relative;
  height: 8px;
  margin-bottom: 12px;
}

.zpc-alpha-wrap {
  position: relative;
  height: 8px;
  margin-top: 12px;
}

.zpc-color-wrap {
  width: 24px;
  height: 24px;
  position: relative;
  margin-top: 4px;
  margin-left: 4px;
  border-radius: 3px;
}

.vc-sketch-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);
  z-index: 2;
}

.zpc-color-wrap .zpc-checkerboard {
  background-size: auto;
}

.zpc-field {
  display: flex;
}

.zpc-field .zpc-input__input {
  box-sizing: border-box;
  width: 100%;
  padding: 2px 1px 2px 4px;
  border: 1px solid #999;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  line-height: 16px;
  background: #3b3b3b;
  color: #c4c4c4;
  margin-bottom: 8px;
}

.zpc-field .zpc-input__label {
  display: block;
  text-align: left;
  font-size: 10px;
  line-height: 1.6;
  color: #c4c4c4;
  padding-bottom: 4px;
  text-transform: capitalize;
}

.zpc-field--single {
  flex: 1;
  padding-left: 4px;
}

.zpc-field--double {
  flex: 2;
}

.zpc-presets {
  padding: 15px 0 3px 8px;
  margin: 0 -8px;
  border-top: 1px solid rgba(151, 151, 151, 0.15);
}

.zpc-presets-color {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  margin: 0 5px 5px 0;
  vertical-align: top;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border: 00;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
}

.zpc-presets-color:focus, .zpc-presets-color:focus-within {
  outline: 1px solid #ce9a0f;
}
.zpc-presets-color .zpc-checkerboard {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
}

.vc-sketch__disable-alpha .zpc-color-wrap {
  height: 10px;
}
</style>
