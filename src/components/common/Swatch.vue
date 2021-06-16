<template>
    <button
        :aria-label="ariaLabel"
        :style="swatchStyle"
        @click="onSwatchClick"
        type="button"
    />
</template>

<script>
import { ColorModel } from '../../models';
import { renderTransparentBg } from '../../helpers';

export default {
    name: 'Swatch',

    props: {
        color: {
            type: String,
            required: true
        }
    },

    computed: {
        isTransparent() {
            return ColorModel.isTransparent(this.color);
        },

        swatchStyle() {
            if (this.isTransparent) {
                return {
                    backgroundImage: `url(${renderTransparentBg()})`
                };
            }

            return {
                backgroundColor: this.color
            };
        },

        ariaLabel() {
            return `Color:${this.color}`;
        }
    },

    methods: {
        onSwatchClick() {
            this.$emit('selected', this.color);
        }
    }
};
</script>
