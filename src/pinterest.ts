import waitForElment from "./utils/waitForElement";
console.log('yoooooo!')
console.time()


async function main() {
    waitForElment('[data-test-id="more-board-options"]')
        .then(element => console.log(element))

    waitForElment('[aria-label="More ideas"]')
        .then(element => {
            console.log('test')
            // Validate we were able to select an element
            if(element == null) {
                return;
            }
            
            const parentNode: Element = element.parentElement!;
            const newNode = parentNode.cloneNode(true) as Element;

            const getLastNodeResursively = (node: Element): Element => {
                if(node.children.length === 0 ) {
                    return node;
                }

                return getLastNodeResursively(node.children[node.children.length -1 ])
            }
            let lastNode = getLastNodeResursively(newNode);
            lastNode.textContent = 'Shuffle board'
            
            parentNode.parentElement!.append(newNode);

            // Clear all event listeners on children

            // Setup a event listener on the button/current node or wherever idk.  maybe console log it out?

            // Pinterest API time 
                // Get the board
                // Randomize the elements.
                // Update the pinterest board

        });

    console.timeEnd();
    console.log('thanks for coming out!')
}

main()