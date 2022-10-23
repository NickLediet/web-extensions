/**
 * Waits for an element to exist on the page and then returns a promise 
 * @param selector The DOM query string (ie, CSS selector to wait for)
 * @returns 
 */
export default function waitForElment(selector: string): Promise<Element|null> {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}