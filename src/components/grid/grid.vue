<template>
  <div :class="_classStringToObject(name)"><slot /></div>
</template>

<script lang="ts">
import type { GridProps } from "./type";

import config from "../config";
import GridContext from "./grid.context";
import "./style";


export default {
  name: "p-grid",

  props: { column: { default: 5 }, gutter: { default: 0 } },

  provide() {
    const _this = this;
    return {
      [GridContext.key]: { column: _this.column, gutter: _this.gutter },
    };
  },

  computed: {
    name() {
      return `${config.prefix}-grid`;
    },
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
