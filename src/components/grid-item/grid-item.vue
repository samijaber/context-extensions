<template>
  <div :class="_classStringToObject(getCls)" :style="getStyle">
    <div :class="_classStringToObject(`${name}-image-container`)">
      <img :src="image" :style="imgStyle" />
    </div>
    <div :class="_classStringToObject(`${name}-text`)">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import type { GridItemProps } from "./type";

import classNames from "classnames";
import config from "../config";
import GridContext from "../grid/grid.context.js";
import "./style";

export default {
  name: "p-grid-item",
  props: {
    badgeProps: { default: undefined },
    image: { default: "" },
    text: { default: "" },
  },

  inject: {
    context: GridContext.key,
  },

  computed: {
    name() {
      return `${config.prefix}-grid-item`;
    },
    gutterSize() {
      return this.context.gutter ? `${this.context.gutter}px` : 0;
    },
    percent() {
      return `${100 / +this.context.column}%`;
    },
    getCls() {
      return classNames(this.name, {});
    },
    getStyle() {
      return {
        flexBasis: this.percent,
        paddingLeft: this.gutterSize,
        paddingRight: this.gutterSize,
      };
    },
    imgStyle() {
      let imgSize = 32;
      if (this.context.column >= 5) {
        imgSize = 28;
      } else if (this.context.column <= 3) {
        imgSize = 48;
      }
      return {
        width: `${imgSize}px`,
        height: `${imgSize}px`,
      };
    }
  },

  methods: {
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>
