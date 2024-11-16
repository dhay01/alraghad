// src/hooks/useIntersectionObserver.js
import { ref, onUnmounted } from 'vue';

export function useIntersectionObserver(callback, options = {}) {
    const observer = ref(null);

    function observeElement(element) {
        if (observer.value) observer.value.observe(element);
    }

    function unobserveElement(element) {
        if (observer.value) observer.value.unobserve(element);
    }

    function initObserver() {
        observer.value = new IntersectionObserver(callback, options);
    }

    onUnmounted(() => {
        if (observer.value) observer.value.disconnect();
    });

    return { observeElement, unobserveElement, initObserver };
}
