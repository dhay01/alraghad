import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default {
    mounted(el, binding) {
        // Create an instance of the Intersection Observer
        const { observeElement, unobserveElement, initObserver } = useIntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.src = binding.value; // Set the image source when in view
                    unobserveElement(entry.target); // Stop observing this element
                }
            });
        });

        initObserver(); // Initialize the observer
        observeElement(el); // Start observing the element

        // Attach the unobserveElement to the element for cleanup in `unmounted`
        el._unobserve = () => unobserveElement(el);
    },
    unmounted(el) {
        // Cleanup observer when the element is unmounted
        if (el._unobserve) {
            el._unobserve();
        }
    },
};
