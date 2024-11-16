import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default {
    mounted(el, binding) {
        const { observeElement, unobserveElement, initObserver } = useIntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.src = binding.value; // Set the image source when in view
                    unobserveElement(entry.target); // Stop observing once loaded
                }
            });
        });

        initObserver();
        observeElement(el); // Start observing the element
    }
};
