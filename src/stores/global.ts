import { defineStore } from 'pinia';

export const useGlobalVars = defineStore('Global Variables', () => {
    const contextMenu = {
        show: false,
        x: 0,
        y: 0,
        items: []
    };
});