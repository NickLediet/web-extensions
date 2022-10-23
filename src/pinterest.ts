import waitForElment from "./utils/waitForElement";
console.log('yoooooo!')
console.time()


async function main() {
    waitForElment('[data-test-id="more-board-options"]')
        .then(element => console.log(element))

    waitForElment('[aria-label="More ideas"]')
        .then(element => {
            console.log('test')
            if(element == null) {
                return;
            }
    
            const parentNode: Element = element.parentElement!;
            console.log(parentNode);
            const newNode = parentNode.cloneNode(true) as Element;

            const getLastNodeResursively = (node: Element): Element => {
                if(node.children.length === 0 ) {
                    console.log('The last node: ' + node);
                    return node;
                }

                console.log('There is more to come')
                return getLastNodeResursively(node.children[node.children.length -1 ])
            }
            let lastNode = getLastNodeResursively(newNode);
            lastNode.textContent = 'Shuffle board'
            
            console.log(newNode);
            console.log(parentNode.parentElement);

            parentNode.parentElement!.append(newNode);
        });

    console.timeEnd();
    console.log('thanks for coming out!')
}

main()